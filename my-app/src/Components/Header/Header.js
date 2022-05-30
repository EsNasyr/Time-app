import React from 'react';
import logo from "../Header/../../images/clock-regular.svg"
const Header = () => {
    return (
        <header>
            <div className="">
                <img src={logo} className="logo" alt="clock"/>
                <h1>Time App</h1>
            </div>
        </header>
    );
};

export default Header;