import React from 'react';
 import {Link} from 'react-router-dom';

import './Toolbar.css';
import ToggleButton from '../Sidebar/ToggleButton';
import logo from '../../image2/eb055966-6724-43f8-bbcc-d50648a8de36_200x200(1).png'

const Toolbar = (props) => {
    return(

        <header className="toolbar">
         
            <nav className="toolbar__navigation">

                <div className = "toolbar__toggle-button">
                  <ToggleButton click={props.toggleClickHandler} />
                </div>

                <div className="toolbar_logo">
                   <img className="title-logo" src={logo} alt=""/> 
                   <p className="paragraph">Trevinho Pencil Arts</p>
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

