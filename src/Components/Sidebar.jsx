import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import "./Sidebar.css";
import { IconContext } from 'react-icons';

function Sidebar() {
  const [sidebar,setsidebar,]=useState(false)
  const showsidebar=()=>setsidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{ color: 'red'}}>
    <div className="sidebar">
      <Link to="#" className='menu-bars'>
        <FaIcons.FaBars onClick={showsidebar} />
      </Link>
     <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/reports">Reports</Link> 

    </div><nav className={Sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showsidebar}>
        <Li className=' navbar-toggle'>
          <Link to="#" className='menu-bars'>
            <AiIcons.AiOutlineClose/>
          </Link>
        </Li>
        { SidebarData.map((item,index)=>{
          return(
            <li key={index} className={item.classname}>
              <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
              </Link>
            </li>
          )
          })} 
      </ul>
      </nav>
      </IconContext.Provider>
      </>
  );
}

export default Sidebar;
