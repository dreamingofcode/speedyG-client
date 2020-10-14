import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/landingpage';
import About from './components/about'
import Services from './components/services';
import Reviews from './components/reviews'
import logoHorizontal from './icons/logoHorizontal.png';
import './style.css';

function App() {
  return (
    <div className="App">

        <header className="main-head">
          <nav>
            <h1 id="logo">
              <a href="/">
                <img
                  src={logoHorizontal}
                  className="nav-logo"
                  alt="company-logo"
                />
              </a>
            </h1>
            <input type="checkbox" className="menu-check"/>
            <ul className="nav-links">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services ">Services</a>
              </li>
              <li>
                <a href="/reviews">Reviews</a>
              </li>
              <li>
                <a href="#account">Account</a>
              </li>
            </ul>
            <div className="burger">
              <span></span>
              <span></span>
              <span></span>
       
            </div>
          </nav>
        </header>
        <body>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/reviews" component={Reviews} />
        </Switch>
      </body>
    </div>
  );
}

export default App;
