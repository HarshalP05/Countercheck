import React, { useState } from 'react';
import './Sidebar.css'; // Make sure this path is correct

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`floorcon ${isOpen ? 'open' : ''}`}>
      <label onClick={toggleSidebar} id="toggle-button">
        <span className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} id="icon"></span>
      </label>

      <div className="head">Floors</div>
      <ol>
        <li><a className='anc-bar' href="/Floor5">5th Floor</a></li>
        <li><a className='anc-bar' href="/Floor4">4th Floor</a></li>
        <li><a className='anc-bar' href="/Floor3">3rd Floor</a></li>
        <li><a className='anc-bar' href="/Floor2">2nd Floor</a></li>
        <li><a className='anc-bar' href="/Floor1">1st Floor</a></li>
        <li><a className='anc-bar' href="/Ground">Ground Floor</a></li>
        <li className="home"><a href="/"><i className="fas fa-home"></i></a></li>
      </ol>
    </div>
  );
};

export default Sidebar;
