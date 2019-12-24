import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    return(
       <nav className="side-drawer">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Gallery</a></li>
          <li><a href="/">Cart</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
       </nav>
    )
}

export default Sidebar;