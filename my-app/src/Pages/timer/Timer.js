import React from 'react';

const Timer = () => {
    const Back = () => {
        window.location.replace("./App.js")
    }
    return (
        <div className="timer">
            <h1>Timer</h1>
            <button onClick={Back}>Back</button>
        </div>
    );
};

export default Timer;