import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
  let sidebarClasses = 'side-drawer';

  if(props.show){
    sidebarClasses = 'side-drawer open';
  }
    return(
       <nav className={sidebarClasses}>
         <div className="side-logo">
           <p>TREVINHO ARTS</p>
         </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
       </nav>
    )
}

export default Sidebar;