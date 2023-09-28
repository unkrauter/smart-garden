// LearningCommunity.js

import React from 'react';
import './LearningCommunity.css';

class LearningCommunity extends React.Component {
    render() {
        return (
            <div id="learning-community-section">

                {/* Personalized Tips */}
                <section id="personalized-tips">
                    <h2>Personalized Gardening Tips</h2>
                    <ul className="tips-list">
                        {this.props.tips.map((tip, index) => (
                            <li key={index} className="tip-item">
                                <p>{tip.content}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Community Interactions */}
                <section id="community-interactions">
                    <h2>Your Community Interactions</h2>
                    <ul className="interactions-list">
                        {this.props.interactions.map((interaction, index) => (
                            <li key={index} className="interaction-item">
                                <p><strong>{interaction.topic}</strong></p>
                                <p>{interaction.comment}</p>
                                <p><small>{interaction.date}</small></p>
                            </li>
                        ))}
                    </ul>
                </section>

            </div>
        );
    }
}

export default LearningCommunity;
