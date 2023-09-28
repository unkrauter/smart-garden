import React from 'react';
import './TasksNotifications.css';

class TasksNotifications extends React.Component {
    render() {
        return (
            <div id="tasks-notifications-section">

                {/* Upcoming Tasks */}
                <section id="upcoming-tasks">
                    <h2>Upcoming Tasks</h2>
                    <ul className="tasks-list">
                        {this.props.tasks.map((task, index) => (
                            <li key={index} className="task-item">
                                <p>{task.description}</p>
                                <p><small>Due on: {task.dueDate}</small></p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Notification History */}
                <section id="notification-history">
                    <h2>Notification History</h2>
                    <ul className="notifications-list">
                        {this.props.notifications.map((notification, index) => (
                            <li key={index} className="notification-item">
                                <p>{notification.message}</p>
                                <p><small>Received on: {notification.date}</small></p>
                            </li>
                        ))}
                    </ul>
                </section>

            </div>
        );
    }
}

export default TasksNotifications;
