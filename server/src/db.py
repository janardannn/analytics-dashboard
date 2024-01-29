import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

try:
    client = MongoClient(os.getenv('MONGO_URL'))
except Exception as e:
    print(e)
    
DB = client[os.getenv('DB')]