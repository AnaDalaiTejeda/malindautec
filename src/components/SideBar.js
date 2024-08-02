import React from 'react'
import './css/SideBar.css'; 
import fillphoto from './assets/filller.png'
import { useNavigate } from 'react-router-dom';

const SideBar = ({isVisible, toggleSidebar}) => {
  const navigate = useNavigate();
  const navigateToRoute = (route) => {
    navigate(route);
    }

    return (
      <div className={`SideBar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className='upperSide'>

        <div className= "topbuttons">
          <button className = "closeSideBar" onClick = {toggleSidebar}>
            <img className='closeImg' src={fillphoto} alt=""/>
          </button>
        </div>

        <div className='upperSideTop'>
          {/* <img src={gptLogo} alt='Logo' className='logo' /> */}
          <span className='brand'>Melinda??</span>
        </div>

        <div className= "options">
          <button className='home' onClick={() => navigateToRoute('/')} >
            <img src={fillphoto} alt='' className='homeIcon' />
            <span className='homeText'>Home</span>
          </button>
        
          <button className='explore' onClick={() => navigateToRoute('/explore')}>
            <img src={fillphoto} alt='' className='exploreIcon' />
            <span className='exploreText'>Explore</span>
          </button>
        
          
          <button className='history' onClick={() => navigateToRoute('/history')}>
            <img src={fillphoto} alt='' className='historyIcon' />
            <span className='historyText'>History</span>
          </button>
      </div>
      </div> 

        <div className = "lowerSide">
          
          <button className='aboutUs' onClick={() => navigateToRoute('/about')}>
            <span className='aboutUsText'>About</span>
          </button> 

          <button className='contactUs' onClick={() => navigateToRoute('/contact')}>
            <span className='contactUsText'>Contact Us</span>
          </button>            

        </div>
      
      </div>
    )
  }


export default SideBar;