import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar';
import './Layout.css'; 
import TopBar from './components/TopBar';
import RightSideBar from './components/RightSideBar';

const Layout = () => {

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  }
  
  // const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(true);
  // const toggleRightSidebar = () => {
  //   setIsRightSidebarVisible(!isRightSidebarVisible);
  // }

  return (
    <div className="layout">
      <TopBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarVisible} />
      <SideBar isVisible={isSidebarVisible} />
      <div className="main-content">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;
