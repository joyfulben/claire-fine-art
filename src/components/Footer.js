import React from 'react';
import '../style/footer.css';
import { BrowserRouter as Router } from 'react-router-dom';

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
        <div className="reserved-rights">
          <h3>All rights reserved</h3>
          <h3>&#x00A9;2021</h3>
        </div>
      </div>
      <h4>Built and Designed by <a href="https://benveloper.com">benveloper.com</a></h4>
    </div>
  )
};

export default Footer;
