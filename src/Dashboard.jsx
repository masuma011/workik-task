// Dashboard.js
import React from 'react';

const Dashboard = () => {


    return (
        <div className="App">
            <h1>Automatic PR Review System</h1>
            <label style={styles.label}>
                Logged In!
            </label>
        </div>
    );
};

const styles = {
    label: {
        padding: '10px 20px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        
    },
};

export default Dashboard;
