import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar';
import './Layout.css'; 
import TopBar from './components/TopBar';


const Layout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  }
  return (
    <div className="layout">
      <TopBar/>
      <SideBar isVisible={isSidebarVisible}  toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;