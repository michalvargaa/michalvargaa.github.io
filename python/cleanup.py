import shutil


def rm_dir(dir_arr):
    for dir in dir_arr:
        shutil.rmtree(dir)


