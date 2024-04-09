from pdf2image_converter import pdf_to_images
from questions_extraction import extract_question
from text_transparency import create_transparent_background
from cleanup import rm_dir


def main():
    # pdf_to_images('../maturity/', './tmp_images/')
    # extract_question('./tmp_images/', './q/')
    create_transparent_background('./q/', '../questions/')
    # rm_dir(['./tmp_images/', './tmp_questions/', './__pycache__/']) 


if __name__ == "__main__":
    main()
