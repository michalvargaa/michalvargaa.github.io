import tabula
from os import listdir
from os.path import isfile, join
from pdf2image_converter import get_files
import csv


def pdf2csv(PATH, name):
    # Read a PDF File
    df = tabula.read_pdf(PATH, pages='all')[0]
    # convert PDF into CSV
    tabula.convert_into(PATH, f'./answers_csv/{name}.csv', output_format="csv", pages='all')

    i = 0
    with open(f"./answers_csv/{name}.csv", 'r') as f:
        with open("./answers.csv", 'a') as ans:
            reader = csv.reader(f)
            for line in reader:
                i += 1
                ans.write(line[1]+'\n')
                if i == 30:
                    break


def generate_answer_key(PATH):
    files = get_files(PATH)
    files.sort()
    for file in files:
        name = file[0:-4]
        pdf2csv(f'{PATH}{file}', name)
