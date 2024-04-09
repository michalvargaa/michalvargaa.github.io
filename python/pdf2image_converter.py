from os import listdir
from os.path import isfile, join
from pdf2image import convert_from_path
from pathlib import Path


# convert pdf file to set of images (1 page = 1 image)
def pdf_to_images(PATH, SAVE_PATH):
    # Path(SAVE_PATH).mkdir(parents=True, exist_ok=True)
    for file in get_files(PATH):
        images = convert_from_path(f'{PATH}{file}')
        for i in range(1, len(images) - 2):
            # save pages as images with name `<year>-#.jpg`
            images[i].save(
                f"{SAVE_PATH}{file.split('.')[0]}-{i}.jpg", 'JPEG')


# return all files (array) from provided path
def get_files(PATH):
    return [f for f in listdir(PATH) if isfile(join(PATH, f))]
