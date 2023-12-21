from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
import re
import os
from google.cloud import storage

app = Flask(__name__)

storage_client = storage.Client()

model_blob_path = 'LSTM_Things/my_model.h5'
bucket_name = 'phiseye1' 

bucket = storage_client.bucket(bucket_name)
blob = bucket.blob(model_blob_path)
local_model_path = 'my_model.h5'
blob.download_to_filename(local_model_path)

lstm_model = tf.keras.models.load_model(local_model_path)

def preprocess_url(url):
    url = re.sub(r"https?://", "", url)
    url_length = len(url)
    return url_length

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        try:
            url = request.json['url']

            url_length = preprocess_url(url)

            input_array = np.full((8, 1), url_length)  

            prediction = lstm_model.predict(np.expand_dims(input_array, axis=0))  

            if prediction[0][0] >= 0.6:
                result = {'prediction': 'Legitimate'}
            elif prediction[0][0] <= 0.6:
                result = {'prediction': 'Phishing'}
            else:
                result = {'prediction': 'not detect'}

            return jsonify(result), 200  

        except Exception as e:
            return jsonify({'error': str(e)}), 500 

    else:
        return jsonify({'message': 'Method not allowed'}), 405  
    
if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
