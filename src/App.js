import React from 'react';
import Home from './components/Home';
import { MapPin, Phone, InstagramLogo, EnvelopeOpen } from "phosphor-react";
import About from './components/About';
const App = () => {
    let component;
    switch(window.location.pathname){
        case "/":
            component = <Home/>;
            break;
        case "/about":
            component = <About/>;
            break;
        default: 
        console.log("Error in te switch statement");
        break;
    }
    return(
        <div>
            {component}
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
              <button className="nav-btns">Gallery</button>
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