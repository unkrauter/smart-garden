import React from 'react';
import './Header.css';  // Assuming you have a corresponding CSS file for styling.

class Header extends React.Component {
    render() {
        return (
            <header id="main-header">
                <img src="assets/images/profile_picture_default.jpg" alt="User Profile Picture" id="profile-picture" />
                <h1 id="username">{this.props.username}</h1>   {/* Assuming the username is passed as a prop */}
                <nav>
                    <a href="#" id="settings-icon">Settings</a>
                    <a href="#" id="logout-icon" onClick={this.props.handleLogout}>Log Out</a> {/* Assuming there's a logout function passed as a prop */}
                </nav>
            </header>
        );
    }
}

export default Header;