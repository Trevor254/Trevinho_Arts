import React from 'react';
import './Toolbar.css';
import ToggleButton from '../Sidebar/ToggleButton';
import logo from '../../images/6e0f361a-81df-443a-a042-f35ecaeeb9df_200x200.png'

const Toolbar = (props) => {
    return(
        <header className="toolbar">

            <nav className="toolbar__navigation">

                <div className = "toolbar__toggle-button">
                  <ToggleButton click={props.toggleClickHandler} />
                </div>

                <div className="toolbar_logo">
                  <img src={logo} alt=""/>
                </div>

                <div className="spacer"/>

                <div className="toolbar_navigation-items">

                   <ul>
                       <li><a href="/">Home</a></li>
                       <li><a href="/about">About</a></li>
                       <li><a href="/gallery">Gallery</a></li>
                       <li><a href="/cart">Cart</a></li>
                       <li><a href="/contact">Contact</a></li>
                   </ul>

                </div>

            </nav>

        </header>
    )
}

export default Toolbar;