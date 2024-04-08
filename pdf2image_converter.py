from os import listdir
from os.path import isfile, join
from pdf2image import convert_from_path


# return all .pdf files (array) from provided path
def get_pdf_files(PATH):
    return [f for f in listdir(PATH) if isfile(join(PATH, f))]


# convert pdf file to set of images (1 page = 1 image)
def pdf_to_images(PATH):
    for file in get_pdf_files(PATH):
        images = convert_from_path(f'{PATH}{file}')
        # for i in range(1, len(images) - 1):
        for i in range(1, 2):
            # save pages as images with name `<year>-#.jpg`
            images[i].save(f"{file.split('.')[0]}-{i}.jpg", 'JPEG')


PATH = './maturity/'
pdf_to_images(PATH)
