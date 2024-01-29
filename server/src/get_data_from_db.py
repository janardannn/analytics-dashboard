import os 
from dotenv import load_dotenv
from db import DB

load_dotenv()

collection = DB[os.getenv('COLLECTION')]

datas = list(collection.find())

for k in datas:
    k.pop("_id")
    k.pop("__v")

data  = datas