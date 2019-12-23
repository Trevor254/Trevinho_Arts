import React from 'react';
import './ToggleButton.css';

const toggleButton = props => {
    return ( 
    <div>
        <button className="toggle-button">
            <div className="toggle-button__line"/>
            <div className="toggle-button__line"/>
            <div className="toggle-button__line"/>
        </button>
    </div>
    )
}

export default toggleButton;