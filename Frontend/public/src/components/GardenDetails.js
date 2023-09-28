import React from 'react';
import './GardenDetails.css';

class GardenDetails extends React.Component {
    render() {
        return (
            <div id="garden-details-section">

                {/* Individual Plant Profiles */}
                <section id="plant-profiles">
                    <h2>Plant Profiles</h2>
                    <div className="plants-grid">
                        {this.props.plants.map((plant, index) => (
                            <div key={index} className="plant-card">
                                <img src={plant.imageUrl} alt={plant.name} />
                                <p>{plant.name}</p>
                                <p>Last Watered: {plant.lastWatered}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sensor Readings */}
                <section id="sensor-readings">
                    <h2>Sensor Readings</h2>
                    <div className="sensor-grid">
                        {this.props.sensors.map((sensor, index) => (
                            <div key={index} className="sensor-card">
                                <h3>{sensor.type}</h3>
                                <p>Reading: {sensor.value}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Graphical Insights */}
                <section id="graphical-insights">
                    <h2>Graphical Insights</h2>
                    {/* Placeholder for charts;*/}
                    <div className="chart">
                        <p>Chart Placeholder</p>
                    </div>
                </section>

            </div>
        );
    }
}

export default GardenDetails;
