import React, {useState, useRef } from 'react';
import '../components/css/Explore.css';
import fillphoto from '../components/assets/filller.png';
import { useNavigate } from 'react-router-dom';

function Explore() {
  const [input, setInput] = useState('');
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const navigate = useNavigate();
  const navigateToRoute = (route) => {
    navigate(route);
    }

  const utecRef = useRef(null);
  const eventsRef = useRef(null);
  const entrepreneurshipRef = useRef(null);

  const scrollToRef = (ref, offset = 280) => {
    window.scrollTo({
      top: ref.current.offsetTop - offset,
      behavior: 'smooth',
    });
  };

  return (
    <div className="Explore">

      <div className="searchAI">
        <div className="searchInp">
          <img src={fillphoto} alt="Send" />
            <input type="text" placeholder='Search our AIs...'  value={input}  onChange={handleInputChange} />
        </div>
        <div className='goToTab'>
          <button className = 'goToButton' onClick={() => scrollToRef(utecRef)} >UTEC Ventures</button>
          <button className = 'goToButton'onClick={() => scrollToRef(eventsRef)}>Events</button>
          <button className = 'goToButton' onClick={() => scrollToRef(entrepreneurshipRef)}>Entrapeneurship</button>
        </div>
      </div>

      <div className='box'>

        <div className='subBox' ref={utecRef}> 
          <div className='heading'>
            <div className='subject1'>UTEC Ventures</div>
            <div className='subject1text'>akdfalksf akdlfklafka kdlflakdflka adf a f adfadf fa df afafa afafg afgdg agagfg agafg agf adfa adf aafaf afdafd adfvadf adfa asdf afgafg agafg agdfg afgfga gag</div>
          </div>

          <button className='exploreAI' onClick={() => navigateToRoute('/latamfest2')}>
            <img src={fillphoto} alt='' className='littleIcon' />
            <div className='textWrapper'>
              <span className='miniTitle'>Explore</span>
              <span className='miniDescription'>akdjfaldf dfa sdf adsf a dsf asdf a sdfasdf asdfa adsfa sdfasfadsf asfdasdf asfd adsf adf af asd fka</span>
            </div>
          </button>

          <button className='exploreAI' onClick={() => navigateToRoute('/latamfest2')}>
            <img src={fillphoto} alt='' className='littleIcon' />
            <div className='textWrapper'>
              <span className='miniTitle'>Explore</span>
              <span className='miniDescription'>akdjfaldf dfa sdf adsf a dsf asdf a sdfasdf asdfa adsfa sdfasfadsf asfdasdf asfd adsf adf af asd fka</span>
            </div>
          </button>

          <button className='exploreAI' onClick={() => navigateToRoute('/latamfest2')}>
            <img src={fillphoto} alt='' className='littleIcon' />
            <div className='textWrapper'>
              <span className='miniTitle'>Explore</span>
              <span className='miniDescription'>akdjfaldf dfa sdf adsf a dsf asdf a sdfasdf asdfa adsfa sdfasfadsf asfdasdf asfd adsf adf af asd fka</span>
            </div>
          </button>

          <button className='exploreAI' onClick={() => navigateToRoute('/latamfest2')}>
            <img src={fillphoto} alt='' className='littleIcon' />
            <div className='textWrapper'>
              <span className='miniTitle'>Explore</span>
              <span className='miniDescription'>akdjfaldf dfa sdf adsf a dsf asdf a sdfasdf asdfa adsfa sdfasfadsf asfdasdf asfd adsf adf af asd fka</span>
            </div>
          </button>
        </div>

        <div className='subBox' ref={eventsRef}> 
          <div className='heading'>
            <div className='subject1'>Events</div>
            <div className='subject1text'>akdfalksf akdlfklafka kdlflakdflka adf a f adfadf fa df afafa afafg afgdg agagfg agafg agf adfa adf aafaf afdafd adfvadf adfa asdf afgafg agafg agdfg afgfga gag</div>
          </div>

          <button className='exploreAI' onClick={() => navigateToRoute('/latamfest2')}>
            <img src={fillphoto} alt='' className='littleIcon' />
            <div className='textWrapper'>
              <span className='miniTitle'>Explore</span>
              <span className='miniDescription'>akdjfaldf dfa sdf adsf a dsf asdf a sdfasdf asdfa adsfa sdfasfadsf asfdasdf asfd adsf adf af asd fka</span>
            </div>
          </button>

          <button className='exploreAI' onClick={() => navigateToRoute('/latamfest2')}>
            <img src={fillphoto} alt='' className='littleIcon' />
            <div className='textWrapper'>
              <span className='miniTitle'>Explore</span>
              <span className='miniDescription'>akdjfaldf dfa sdf adsf a dsf asdf a sdfasdf asdfa adsfa sdfasfadsf asfdasdf asfd adsf adf af asd fka</span>
            </div>
          </button>

          <button className='exploreAI' onClick={() => navigateToRoute('/latamfest2')}>
            <img src={fillphoto} alt='' className='littleIcon' />
            <div className='textWrapper'>
              <span className='miniTitle'>Explore</span>
              <span className='miniDescription'>akdjfaldf dfa sdf adsf a dsf asdf a sdfasdf asdfa adsfa sdfasfadsf asfdasdf asfd adsf adf af asd fka</span>
            </div>
          </button>

          <button className='exploreAI' onClick={() => navigateToRoute('/latamfest2')}>
            <img src={fillphoto} alt='' className='littleIcon' />
            <div className='textWrapper'>
              <span className='miniTitle'>Explore</span>
              <span className='miniDescription'>akdjfaldf dfa sdf adsf a dsf asdf a sdfasdf asdfa adsfa sdfasfadsf asfdasdf asfd adsf adf af asd fka</span>
            </div>
          </button>
        </div>
        
        <div className='subBox' ref={entrepreneurshipRef}> 
          <div className='heading'>
            <div className='subject1'>Entrapeneurship</div>
            <div className='subject1text'>akdfalksf akdlfklafka kdlflakdflka adf a f adfadf fa df afafa afafg afgdg agagfg agafg agf adfa adf aafaf afdafd adfvadf adfa asdf afgafg agafg agdfg afgfga gag</div>
          </div>

          <button className='exploreAI' onClick={() => navigateToRoute('/latamfest2')}>
            <img src={fillphoto} alt='' className='littleIcon' />
            <div className='textWrapper'>
              <span className='miniTitle'>Explore</span>
              <span className='miniDescription'>akdjfaldf dfa sdf adsf a dsf asdf a sdfasdf asdfa adsfa sdfasfadsf asfdasdf asfd adsf adf af asd fka</span>
            </div>
          </button>

          <button className='exploreAI' onClick={() => navigateToRoute('/latamfest2')}>
            <img src={fillphoto} alt='' className='littleIcon' />
            <div className='textWrapper'>
              <span className='miniTitle'>Explore</span>
              <span className='miniDescription'>akdjfaldf dfa sdf adsf a dsf asdf a sdfasdf asdfa adsfa sdfasfadsf asfdasdf asfd adsf adf af asd fka</span>
            </div>
          </button>

          <button className='exploreAI' onClick={() => navigateToRoute('/latamfest2')}>
            <img src={fillphoto} alt='' className='littleIcon' />
            <div className='textWrapper'>
              <span className='miniTitle'>Explore</span>
              <span className='miniDescription'>akdjfaldf dfa sdf adsf a dsf asdf a sdfasdf asdfa adsfa sdfasfadsf asfdasdf asfd adsf adf af asd fka</span>
            </div>
          </button>

          <button className='exploreAI' onClick={() => navigateToRoute('/latamfest2')}>
            <img src={fillphoto} alt='' className='littleIcon' />
            <div className='textWrapper'>
              <span className='miniTitle'>Explore</span>
              <span className='miniDescription'>akdjfaldf dfa sdf adsf a dsf asdf a sdfasdf asdfa adsfa sdfasfadsf asfdasdf asfd adsf adf af asd fka</span>
            </div>
          </button>
        </div>
      </div>

    </div>
  );
}

export default Explore;