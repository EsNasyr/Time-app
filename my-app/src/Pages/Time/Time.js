import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";

const Time = () => {
    const [time, setTime] = useState([]);
    const [mainland, setMainland] = useState('')
    const [cityName, setCityName] = useState('');
    const Back = () => {
        window.location.replace("./App.js")
    }

    const fetchTime = () => {
        return (
            axios.get(`http://worldtimeapi.org/api/timezone/`)
                .then(response => response.data))
    }

    useEffect(() => {
        fetchTime().then(time => setTime(time))
    }, [])


    return (
        <div className="time-section">
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={time}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Your location" />}
            />
            <button onClick={() => fetchTime()}>Get</button>
            {JSON.stringify(time) === '{}' ?
                null :
                (
                    <div>
                        <h2>{time.timezone}</h2>
                        <h3>{time.datetime}</h3>
                    </div>
                )
            }
            <button onClick={Back}>Back</button>
        </div>
    );
};

export default Time;