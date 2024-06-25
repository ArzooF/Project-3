from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

df = pd.read_csv("./data/social_media.csv")

@app.route('/data', methods = ["GET"])
def index():
    sm_data = df.to_json()
    return sm_data


@app.route("/volatilities", methods=["GET"])
def vol_data():

    data = "Data"
    # return data.to_json
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)