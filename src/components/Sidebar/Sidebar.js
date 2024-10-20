import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css'; // Make sure this path is correct

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false); // Close the sidebar
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={sidebarRef} className={`floorcon ${isOpen ? 'open' : ''}`}>
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
        <li><a className='anc-bar' href="/User" target="_blank" rel="noopener noreferrer">Click here to access Search By Teacher Features !!</a></li>
      </ol>
    </div>
  );
};

export default Sidebar;
