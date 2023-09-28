
import React from 'react';
import Header from './Header';
import Overview from './Overview';
import GardenDetails from './GardenDetails';
import TasksNotifications from './TasksNotifications';
import LearningCommunity from './LearningCommunity';
import AccountSettings from './AccountSettings';
import Footer from './Footer';

function App() {
    return (
        <div className="container">
            {/* Header Component */}
            <Header />

            {/* Overview Section */}
            <Overview />

            {/* Garden Details Section */}
            <GardenDetails />

            {/* Tasks & Notifications Section */}
            <TasksNotifications />

            {/* Learning & Community Section */}
            <LearningCommunity />

            {/* Account & Settings Section */}
            <AccountSettings />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
