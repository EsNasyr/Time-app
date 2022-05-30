import React, {useState, useEffect} from 'react';
import Time from "./Pages/Time/Time";
import "./App.css"
import Header from "./Components/Header/Header";
import StopWatch from "./Pages/StopWatch/StopWatch";
import Timer from "./Pages/timer/Timer";
import time from "./images/globe-africa-solid.svg"
import stopwatch from "./images/stopwatch-20-solid.svg"
import hourglass from "./images/hourglass-half-solid.svg"

const App = () => {
    const [modalActive, setModalActive] = useState(false)
    const [secActive, setSecActive] = useState(false)
    const [timerActive, setTimerActive] = useState(false)

    return (
        <div className="App">
                <Header/>
                <div className="container">
                    { modalActive ?
                        (<Time/>) :
                        <div className="time">
                            <img src={time} onClick={() => setModalActive(true)} className="item" alt="world"/>
                        </div>
                    }
                    { secActive ?
                        (<StopWatch/>) :
                        <div className="time">
                            <img src={stopwatch} onClick={() => setSecActive(true)} className="item" alt="stopwatch"/>
                        </div>
                    }
                    { timerActive ?
                        (<Timer/>) :
                        <div className="time">
                            <img src={hourglass} onClick={() => setTimerActive(true)} className="item-3" alt="hourglass"/>
                        </div>
                    }
                </div>
            </div>
            );
        };

export default App;