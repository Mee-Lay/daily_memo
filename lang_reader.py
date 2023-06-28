import csv
import json
import shutil
import os

EN_JSON = 'en.json'
JP_JSON = 'jp.json'
LOCALE_PATH = '/src/assets/locales/'

enJson = {}
jpJson = {}

cwd = os.getcwd()
currentFolder = os.path.basename(cwd)
src = cwd
dst = cwd + LOCALE_PATH

with open(src + "/src/assets/locales/lang.csv") as csvfile:
    for row in csv.DictReader(csvfile):
        enJson[row["code"]] = row["en"]
        jpJson[row["code"]] = row["jp"]

with open(EN_JSON, 'w', encoding='utf8') as jsonf:
    jsonf.write(json.dumps(enJson, indent=2, ensure_ascii=0))
with open(JP_JSON, 'w', encoding='utf8') as jsonf:
    jsonf.write(json.dumps(jpJson, indent=2, ensure_ascii=0))

shutil.move(os.path.join(src, EN_JSON), os.path.join(dst, EN_JSON))
shutil.move(os.path.join(src, JP_JSON), os.path.join(dst, JP_JSON))
