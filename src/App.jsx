import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
    const handleLogin = () => {
        // Redirect user to the GitHub OAuth URL
        window.location.href = 'http://localhost:4000/auth/github';
    };

    const checkLoginStatus = async () => {
        const response = await fetch('http://localhost:4000/api/user/status', {
            method: 'GET',
            credentials: 'include' // Ensure cookies are sent if needed
        });
        const data = await response.json();
        if (data.loggedIn) {
            // Handle logged-in state
            console.log('User is logged in');
        } else {
            // Handle not logged in state
            console.log('User is not logged in');
        }
    };

    useEffect(() => {
        checkLoginStatus(); // Call the function on component mount
    }, []); 
    

    return (
        <div className="App">
            <h1>Automatic PR Review System</h1>
            <button onClick={handleLogin} style={styles.button}>
                Connect GitHub
            </button>
            {/* <h1>hello</h1> */}
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
