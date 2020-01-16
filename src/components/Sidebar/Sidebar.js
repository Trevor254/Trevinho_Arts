import React from 'react';
import {Link} from 'react-router-dom'
import './Sidebar.css';
import logo from '../../image2/eb055966-6724-43f8-bbcc-d50648a8de36_200x200(1).png'
const Sidebar = (props) => {
  let sidebarClasses = 'side-drawer';

  if(props.show){
    sidebarClasses = 'side-drawer open';
  }
    return(
       <nav className={sidebarClasses}>
         <div className="side-logo">
           <img className="title-logo" src={logo} alt=""/> 
           <p>TREVINHO ARTS</p>
         </div>
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
           <Link to="/contact" className="link">Contact</Link>
         </li>
        </ul>
       </nav>
    )
}

export default Sidebar;