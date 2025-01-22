import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameMap = () => {
    const [mapData, setMapData] = useState(null);

    useEffect(() => {
        const fetchMapData = async () => {
            try {
                const response = await axios.get('http://your-backend-api/map');
                setMapData(response.data);
            } catch (error) {
                console.error('Error fetching map data:', error);
            }
        };

        fetchMapData();
    }, []);

    if (!mapData) {
        return <div>Loading map...</div>;
    }

    return (
        <div className="game-map">
            {mapData.map((row, rowIndex) => (
                <div key={rowIndex} className="map-row">
                    {row.map((cell, cellIndex) => (
                        <div
                            key={`${rowIndex}-${cellIndex}`}
                            className="map-cell"
                            style={{
                                backgroundColor: `rgb(${cell}, ${cell}, ${cell})`
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GameMap; 