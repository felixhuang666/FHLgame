from flask import Flask, jsonify
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)  # 啟用 CORS 支援跨域請求

@app.route('/getmap', methods=['GET'])
def get_map():
    # 創建 64x64 的隨機地圖數據
    map_data = np.random.randint(0, 5, size=(64, 64)).tolist()
    
    return jsonify({
        'map': map_data,
        'size': {
            'width': 64,
            'height': 64
        }
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000) 