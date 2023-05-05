import React, {useEffect} from 'react';
import Home from './components/Home';
import { MapPin, Phone, InstagramLogo, Envelope, EnvelopeOpen } from "phosphor-react";
import About from './components/About';
import Gallery from './components/Gallery';
import PreviewGallery from './components/Preview Gallery/previewGallery';
const App = () => {
    let component;
    switch(window.location.pathname){
        case "/":
            component = <Home/>;
            break;
        case "/about":
            component = <About/>;
            break;
        case "/previewGallery":
          component = <PreviewGallery/>;
          break;
        default: 
        console.log("Error in te switch statement");
        break;
    }

    useEffect(() => {
      const contactNumber = document.getElementById('contactNumber');
      const phoneIcon = document.getElementById('phoneIcon');

      const envOpen = document.getElementById('envOpen');
      const envClose = document.getElementById('envClose');
      
      phoneIcon.addEventListener('mouseenter', function() {
        contactNumber.style.display = 'block';
      })

      phoneIcon.addEventListener('mouseleave', function() {
        contactNumber.style.display = 'none';
      })

      envClose.addEventListener('mouseenter', function (){
        envOpen.style.display = 'block';
        envClose.style.display = 'none';
        
      })

      envClose.addEventListener('mouseleave', function (){
        envClose.style.display = 'block';
        envOpen.style.display = 'none';
      })

    },[])
    return(
        <div>
          <div className='testtest'>
            {component}
          </div>
            <div className="navs">
          <ul className="navigation-ul">
            <li>
              <button className="nav-btns">
                <a href="/">Home</a>
              </button>
            </li>
            <li>
              <button className="nav-btns"><a href="/about">About</a></button>
            </li>
            <li>
              <button className="nav-btns"><a href='/previewGallery'>Gallery</a></button>
            </li>
            <li>
              <button className="nav-btns">Pricing</button>
            </li>
            <li>
              <button className="nav-btns">Book</button>
            </li>
          </ul>
          <div className='phonenumber__wrapper' id='contactNumber'>
            <p className='phonenumber__text'>+642102775992</p>
          </div>
          <ul className="social-ul">
            <li id='phoneIcon'>
              <Phone size={25} color={"#202020"} />
            </li>
            <li>
              <a href="https://www.instagram.com/kali.graphy/" target="_blank">
                <InstagramLogo size={25} color={"#202020"} />
              </a>
            </li>
            <li className='envOpen-Icon' id='envOpen'>
              <EnvelopeOpen size={25} color={"#202020"} />
            </li>
            <li id='envClose'>
              <Envelope size={25} color={"#202020"}/>
            </li>
            <li>
              <MapPin size={25} color={"#202020"} />
            </li>
          </ul>
        </div>
        </div>
    )
}

export default App;