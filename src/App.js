import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Services from './components/services';
import LandingPage from './components/landingPage'
import logoHorizontal from './icons/logoHorizontal.png';
import painter from './icons/painter.png';
import logoVertical from './icons/logoVertical.png';
import logo from './icons/logo.png';
import drywall from './icons/drywall2.png';
import paintSupplies from './icons/paintSupplies.png';
import framing from './icons/framing.png';
import './style.css';

function App() {
  return (
    <div className="App">
      <body>
        <header className="main-head">
          <nav>
            <h1 id="logo">
              <img
                src={logoHorizontal}
                className="nav-logo"
                alt="company-logo"
              />
            </h1>
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="/services ">Services</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <a href="#account">Account</a>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
        <Route exact path="/" component={LandingPage} />
          <Route exact path="/services" component={Services} />
        </Switch>
        
      </body>
    </div>
  );
}

export default App;
