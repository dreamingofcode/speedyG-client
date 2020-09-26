import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Services from './components/services';
import LandingPage from './components/landingpage';
import logoHorizontal from './icons/logoHorizontal.png';
import './style.css';

function App() {
  return (
    <div className="App">
      <body>
        <header className="main-head">
          <nav>
            <h1 id="logo">
              <a href='/'> 
                <img
                  src={logoHorizontal}
                  className="nav-logo"
                  alt="company-logo"
                />
              </a>
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
