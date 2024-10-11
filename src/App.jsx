import React from 'react';
import axios from 'axios';
import './App.css'

function App() {
    const handleLogin = () => {
        // Redirect user to the GitHub OAuth URL
        window.location.href = 'http://localhost:4000/auth/github';
    };

    return (
        <div className="App">
            <h1>Automatic PR Review System</h1>
            <button onClick={handleLogin} style={styles.button}>
                Connect GitHub
            </button>
            <p>Made changes</p>
        </div>
    );
}

const styles = {
    button: {
        padding: '10px 20px',
        backgroundColor: '#24292e',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default App;
