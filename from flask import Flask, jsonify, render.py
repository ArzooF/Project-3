from flask import Flask, jsonify, render_template_string
from sqlalchemy import create_engine
import pandas as pd
import plotly.express as px
import plotly.io as pio

app = Flask(__name__)

# Create a SQLAlchemy engine
engine = create_engine('sqlite:///social_media_data.db')

# Load the data when the application starts
df1 = pd.read_sql_query("SELECT * FROM us_social_media", engine)
df2 = pd.read_sql_query("SELECT * FROM google_trends", engine)
df3 = pd.read_sql_query("SELECT * FROM social_media", engine)  # New dataframe

@app.route("/api/v1.0/us_social_media")
def us_social_media():
    # Convert dataframe to dictionary
    data = df1.to_dict(orient='records')
    return jsonify(data)

@app.route("/api/v1.0/google_trends")
def google_trends():
    # Convert dataframe to dictionary
    data = df2.to_dict(orient='records')
    return jsonify(data)

@app.route("/api/v1.0/social_media")  # New route
def social_media():
    # Convert dataframe to dictionary
    data = df3.to_dict(orient='records')
    return jsonify(data)

@app.route("/plot/us_social_media/<platform>")
def plot_us_social_media(platform):
    # Create a simple line plot
    fig = px.line(df1, x='Date', y=platform)
    # Convert the plot to HTML
    plot_html = pio.to_html(fig, full_html=False)
    # Return the plot as HTML
    return render_template_string("<html><body>{{plot}}</body></html>", plot=plot_html)

@app.route("/plot/social_media/<platform>")  # New plot route
def plot_social_media(platform):
    # Create a simple line plot
    fig = px.line(df3, x='Date', y=platform)
    # Convert the plot to HTML
    plot_html = pio.to_html(fig, full_html=False)
    # Return the plot as HTML
    return render_template_string("<html><body>{{plot}}</body></html>", plot=plot_html)

if __name__ == '__main__':
    app.run(debug=True)