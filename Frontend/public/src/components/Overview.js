import React from 'react';
import './Overview.css';  // Assuming you have a corresponding CSS file for styling.

class Overview extends React.Component {
    render() {
        return (
            <div id="overview-section">
                <section id="garden-summary">
                    <h2>Garden Summary</h2>
                    <p>Number of Plants: {this.props.numPlants}</p>
                    <p>Sensors in Use: {this.props.numSensors}</p>
                </section>

                <section id="quick-alerts">
                    <h2>Quick Alerts</h2>
                    {this.props.alerts.map((alert, index) => (
                        <div key={index} className="alert">
                            {alert}
                        </div>
                    ))}
                </section>

                <section id="weather-forecast">
                    <h2>Weather Forecast</h2>
                    <p>{this.props.weather}</p>
                </section>
            </div>
        );
    }
}

export default Overview;
