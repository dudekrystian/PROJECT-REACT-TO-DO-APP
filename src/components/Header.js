import React from 'react';
import './App.css';

const Header = (props) => {

    const today = new Date().toUTCString().slice(4, 11);
    return (
        <>
            <h1>TaskList</h1>
            <h3>{today}</h3>
        </>
    )
}

export default Header;