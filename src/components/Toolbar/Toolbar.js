import React from 'react';
import './Toolbar.css';

const Toolbar = () => {
    return(
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div>

                </div>

                <div className="toolbar_logo">
                  <p>THE LOGO</p>
                </div>

                <div className="spacer"/>

                <div className="toolbar_navigation-items">
                   <ul>
                       <li><a href="/">Home</a></li>
                       <li><a href="/">About</a></li>
                       <li><a href="/">Gallery</a></li>
                       <li><a href="/">Cart</a></li>
                       <li><a href="/">Contact</a></li>
                   </ul>
                </div>
            </nav>
        </header>
    )
}

export default Toolbar;