import React from 'react';
import './css/TopBar.css'; 
import fillphoto from './assets/filller.png';

const TopBar = ({ toggleSidebar,isSidebarOpen }) => {
  return (
    <div className={`topBar ${isSidebarOpen ? 'shift' : ''}`}>
      <button className="closeSideBar" onClick={toggleSidebar}>
        <img className="closeImg" src={fillphoto} alt="Close Sidebar" />
      </button>

      <button className={`newChat ${isSidebarOpen ? 'shift' : ''}`}>
        <img className="newChatImg" src={fillphoto} alt="Create new chat" />
      </button>

      <span className={`topBarBrand ${isSidebarOpen ? 'shift' : ''}`}>MelindaUTEC</span>

    </div>
  );
}

export default TopBar;