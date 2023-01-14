import React from 'react';
import Home from './components/Home';
import { MapPin, Phone, InstagramLogo, EnvelopeOpen } from "phosphor-react";
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
              <button className="nav-btns">Sessions</button>
            </li>
            <li>
              <button className="nav-btns">Book</button>
            </li>
          </ul>
          <ul className="social-ul">
            <li>
              <Phone size={25} color={"#202020"} />
            </li>
            <li>
              <a href="https://www.instagram.com/kali.graphy/" target="_blank">
                <InstagramLogo size={25} color={"#202020"} />
              </a>
            </li>
            <li>
              <EnvelopeOpen size={25} color={"#202020"} />
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