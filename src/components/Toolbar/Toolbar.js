import React from 'react';
 import {Link} from 'react-router-dom';

import './Toolbar.css';
import ToggleButton from '../Sidebar/ToggleButton';
import logo from '../../image2/6e0f361a-81df-443a-a042-f35ecaeeb9df_200x200.png'

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
                      <li>
                          <Link to="/" className="link">Home</Link>
                      </li>
                      <li>
                          <Link to="/about" className="link">About</Link>
                      </li>
                      <li>
                          <Link to="/gallery" className="link">Gallery</Link>
                      </li>
                      <li>
                          <Link to="/cart" className="link">Cart</Link>
                      </li>
                      <li>
                          <Link to="/contact" className="link" >Contact</Link>
                      </li>
                   </ul>

                </div>

            </nav>

        </header>
    )
}

export default Toolbar;

