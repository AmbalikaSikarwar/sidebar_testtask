import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';



function Navbar() {
  const [sidebar, setSidebar] = useState(true);


  return (
    <>
        <div className='navbar'>
          
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
   <ul>   <li className='navbar-toggle'>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}

            <br></br><br></br><br></br><br></br>
            <h3 className="help">Need Our help ?</h3><br></br>
           &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <button type="button" class="btn btn-success">Contact Us</button>
            
            </ul>
        </nav>

    </>
  );
}

export default Navbar;
