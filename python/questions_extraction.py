from pdf2image_converter import get_files
import cv2
import math
from pathlib import Path


# return an array of the y position of the start of horizontal lines in image
def get_horizontal_lines_pos(PATH):
    img = cv2.imread(f"{PATH}")
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    edges = cv2.Canny(gray, 80, 120)
    lines = cv2.HoughLinesP(edges, 1, math.pi/2, 2, None, 30, 1)

    arr = []
    for line in lines:
        # filter all horizontal lines except the ones that separates questions
        if line[0][3] == line[0][1] and line[0][2]-line[0][0] > 1300:
            arr.append(line[0][1])

    arr.sort()
    return arr


def extract_question(PATH, SAVE_PATH):
    # Path(SAVE_PATH).mkdir(parents=True)
    files = get_files(PATH)
    files.sort()
    question_n = 0
    cur_year = files[0][:4]
    for file in files:
        arr = get_horizontal_lines_pos(f"{PATH}{file}")
        if cur_year != file[:4]:
            question_n = 0
            cur_year = file[:4]
        img = cv2.imread(f"{PATH}{file}")
        j = 0
        for i in range(1, len(arr) - 1):
            if abs(arr[j] - arr[i]) < 10:
                continue
            cropped_image = img[(arr[j]+10):arr[i], 220:1520]
            cv2.imwrite(
                f'{SAVE_PATH}{file[:4]}-{question_n}.png', cropped_image)
            j = i
            question_n += 1
