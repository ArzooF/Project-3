from flask import Flask, jsonify, send_from_directory, render_template
from sqlalchemy import create_engine
import pandas as pd

app = Flask(__name__, static_folder='/Users/NP/Documents/Project-3/static')

engine = create_engine('sqlite:///social_media_data.db')

@app.route('/api/us_social_media', methods=['GET'])
def get_us_social_media_data():
    df = pd.read_sql_query("SELECT * FROM us_social_media", engine)
    return jsonify(df.to_dict(orient='records'))

@app.route('/api/google_trends', methods=['GET'])
def get_google_trends_data():
    df = pd.read_sql_query("SELECT * FROM google_trends", engine)
    return jsonify(df.to_dict(orient='records'))

@app.route('/api/social_media', methods=['GET'])
def get_social_media_data():
    df = pd.read_sql_query("SELECT * FROM monthly_us_social_media", engine)
    return jsonify(df.to_dict(orient='records'))

@app.route('/images/<path:filename>', methods=['GET'])
def serve_image(filename):
    return send_from_directory(app.static_folder, filename)

@app.route('/images')
def images():
    return render_template('images.html')

if __name__ == '__main__':
    app.run(port=5002, debug=True)