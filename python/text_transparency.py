from pdf2image_converter import get_files
from PIL import Image


def create_transparent_background(PATH, SAVE_PATH):
    for file in get_files(PATH):
        img = Image.open(f'{PATH}{file}').convert('RGBA')
        datas = img.getdata()
        new_data = []
        for item in datas:
            # finding black colour by its RGB value
            if item[0] == 255 and item[1] == 255 and item[2] == 255:
                # storing a transparent value when we find a black colour
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)  # other colours remain unchanged

        img.putdata(new_data)
        img.save(f"{SAVE_PATH}{file}", "PNG")
