from get_data_from_db import data
from flask import Flask, jsonify, request
from flask_cors import CORS

import data_analysis

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def index():
    return (data)

@app.route('/topicvslikelihood', methods=['GET'])
def topic_vs_likelihood():
    return (data_analysis.topic_vs_likelihood_data())

@app.route('/topicvsrelevance', methods = ['GET'])
def topic_vs_relevance():
    return data_analysis.topic_vs_relevance_data()


app.run()