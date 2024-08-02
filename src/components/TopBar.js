import React from 'react';
import './css/TopBar.css'; 
import fillphoto from './assets/filller.png';

const TopBar = ({ toggleSidebar }) => {
  return (
    <div className="topBar">
      <button className="closeSideBar" onClick={toggleSidebar}>
        <img className="closeImg" src={fillphoto} alt="Close Sidebar" />
      </button>

      <span className="topBarBrand">MelindaUTEC</span>

    </div>
  );
}

export default TopBar;