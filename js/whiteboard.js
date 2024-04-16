
paper.install(window);
window.onload = function () {
    chooseQuestion()
    paper.setup('whiteboard');

};
let tool = new Tool();

const defaultValues = {
    mode: 'draw',
    color: '#000000',
    width: 6,
    whiteboardSelector: '#whiteboard',
    modeSelector: '#mode',
    colorSelector: '#color',
    minWidth: 1,
    maxWidth: 9999,

};

var whiteboard = {
    mode: defaultValues.mode,
    color: defaultValues.color,
    width: defaultValues.width,
    items: [],
    current: {
        id: 0,
        path: null,
        text: null
    },
    mouse: {
        point: null,
        click: null
    },
    delete: true,
    isBusy: false,



    resetStats: function () {
        if (this.current.path)
            this.current.path.selected = false;
        if (this.current.text) {
            this.current.text.selected = false;
            try {
                tools.text.pushCurrentText();
            } catch (e) { }
        }
        this.isBusy = false;
        this.current.path = null;
        this.current.text = null;
        this.mouse.click = null;
    },

    clear: function () {
        this.items.forEach(function (path) {
            path.remove()
        });
        this.items = [];
    },

    readValues: function () {
        this.mode = $(defaultValues.modeSelector).val();
        this.color = $(defaultValues.colorSelector).val();
        this.width = $(defaultValues.widthSelector).val();

        if (!this.mode)
            this.mode = defaultValues.mode;

        try {
            this.width = Number(this.width);
            if (this.width < 1 || isNaN(this.width)) {
                this.width = defaultValues.width;
            }
        } catch (error) {
            this.width = defaultValues.width;
            console.warn('Couldn\'t read width. Using default: '
                + defaultValues.width.toString());
        }
    },

    deleteItem: function (name) {
        this.items.forEach(function (item, index) {
            if (item.name == name) {
                item.remove();
                whiteboard.items.splice(index, 1);
            }
        });
    },
};

var tools = {};

var events = {
    onMouseDown: [],
    onMouseDrag: [],
    onMouseMove: [],
    onMouseUp: [],
    onKeyDown: [],
    onKeyUp: []
};

function updateSelectedColor(color) {
    color = (typeof color != 'undefined') ? color : whiteboard.color;
    whiteboard.getSelectedItems().forEach(function (item) {
        if (item instanceof Path) {
            item.strokeColor = color;
        } else if (item instanceof PointText) {
            item.fillColor = color;
        }
    });
}

tool.onMouseDown = function (event) {
    events.onMouseDown.forEach(function (func) {
        func(event);
    });
}

tool.onMouseDrag = function (event) {
    events.onMouseDrag.forEach(function (func) {
        func(event);
    });
}

tool.onMouseMove = function (event) {
    events.onMouseMove.forEach(function (func) {
        func(event);
    });
}

tool.onMouseUp = function (event) {
    events.onMouseUp.forEach(function (func) {
        func(event);
    });
}

events.onMouseDown.push(function (event) {
    whiteboard.readValues();
});

var onClickMode = null;

function isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}

function chooseButton(id) {
    whiteboard.resetStats();
    if (!$('#save-load-modal').hasClass('show')) {
        $('.sticky-sidebar button:not(.mode-btn)').blur();
        $('.sticky-sidebar input:not(.mode-btn)').blur();
        ['#move', '#draw', '#del', '#text'].forEach(
            function (mode) { $(mode).removeClass('btn-dark'); });
        $('#' + id).addClass('btn-dark');
        $('#mode')[0].value = id;
    }
}

$('#draw').click(function () { chooseButton('draw'); });
$('#del').click(function () { chooseButton('del'); });

$('#whiteboard').bind('contextmenu', function () {
    return false;
});

$('#whiteboard').on('mousedown', function (event) {
    onClickMode = $('#mode').val();
    if (event.which == 2 || event.which == 3) {
        event.preventDefault();
        if (!whiteboard.isBusy) {
            if (event.which == 2) chooseButton('move');
            else if (event.which == 3) chooseButton('del');
        }
    }
});

$('#whiteboard').on('mouseup', function (event) {
    if (event.which == 2 || event.which == 3) {
        if (!onClickMode)
            chooseButton(defaultValues.mode);
        else if (whiteboard.mode != onClickMode)
            chooseButton(onClickMode);
    }
    onClickMode = null;
});

events.onMouseDown.push(function (event) {
    whiteboard.readValues();
});

tools.eraser = {
    path: null,
    check: function () {
        return (
            !whiteboard.isBusyHotKey &&
            whiteboard.mode == 'del'
        );
    },
    removeIntersections: function () {
        whiteboard.items.forEach(function (item) {
            let intersections = tools.eraser.path.getIntersections(
                (item instanceof Path) ? item : new Path.Rectangle(item.bounds)
            );
            if (intersections.length > 0) whiteboard.deleteItem(item.name);
        });
    }
};

events.onMouseDown.push(function (event) {
    if (tools.eraser.check()) {
        whiteboard.isBusy = true;

        tools.eraser.path = new Path({
            segments: [event.point],
            strokeWidth: 1
        });
        tools.eraser.path.add(event.point);
        tools.eraser.removeIntersections();
    }
});

events.onMouseDrag.push(function (event) {
    if (tools.eraser.check()) {
        if (whiteboard.isBusy) {
            if (event.item) whiteboard.deleteItem(event.item.name);

            tools.eraser.path.add(event.point);
            tools.eraser.removeIntersections();
        }
    }
});

events.onMouseUp.push(function (event) {
    if (tools.eraser.path) {
        tools.eraser.path.remove();
        tools.eraser.path = null;
    }

    if (tools.eraser.check()) {
        whiteboard.resetStats();
    }
})

tools.brush = {
    check: function () {
        return (
            !whiteboard.isBusyHotKey &&
            whiteboard.mode == 'draw'
        );
    }
};

events.onMouseDown.push(function (event) {
    if (tools.brush.check()) {
        whiteboard.isBusy = true;

        let pathName = '#' + whiteboard.current.id++;
        whiteboard.current.path = new Path({
            segments: [event.point],
            strokeColor: whiteboard.color,
            strokeWidth: whiteboard.width,
            strokeJoin: 'round',
            strokeCap: 'round',
            name: pathName
        });
        whiteboard.current.path.add(event.point);
    }
});

events.onMouseDrag.push(function (event) {
    if (tools.brush.check()) {
        if (whiteboard.isBusy) whiteboard.current.path.add(event.point);
    }
});

events.onMouseUp.push(function (event) {
    if (tools.brush.check()) {
        if (whiteboard.isBusy && whiteboard.current.path) {
            if (whiteboard.current.path.segments.length > 5) {
                whiteboard.current.path.simplify(10);
            } else if (whiteboard.current.path.segments.length <= 2) {
                whiteboard.current.path.add(event.point.add(0.1));
                whiteboard.current.path.simplify(50);
            }
            whiteboard.items.push(whiteboard.current.path);

            whiteboard.resetStats();
        }
    }
});
