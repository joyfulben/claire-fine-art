import React from 'react';
import '../style/footer.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Footer = ({siteLogo}) => {
  return (
    <div className="footer-container">
      <Router>
      {
        /* All the following links are routed in App.js.
        */
      }
        <ul>
          <a href="/">Home</a>
          <a href="/pieces">Pieces</a>
          <a href="/contact">Contact</a>
        </ul>
      </Router>
      <div className="art-rights">
        <h3>Claire Fine Art LLC</h3>
        <div className="footer-logo-container">
        <img className="footer-logo" src={siteLogo.logo} alt="site logo"/>
        <img className="footer-logo-background" src={siteLogo.logoBackground} alt="site logo background" />
        </div>
        <h3>All rights reserved &#x00A9;2021</h3>
      </div>
    </div>
  )
};

export default Footer;
