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

@app.route('/sectorvsintensity', methods=['GET'])
def sector_vs_intensity():
    return data_analysis.sector_vs_intensity_data()

@app.route('/regionvssector', methods=['GET'])
def region_vs_sector():
    return(data_analysis.region_vs_sector_data())

@app.route('/countryvstopic', methods=['GET'])
def coutnry_vs_topic():
    return data_analysis.country_vs_topic_data()

@app.route('/countryvsintensity', methods=['GET'])
def country_vs_intensity():
    return data_analysis.country_vs_intensity_data()

@app.route('/countryvssector', methods=['GET'])
def country_vs_sector():
    return data_analysis.country_vs_sector_data()

app.run()