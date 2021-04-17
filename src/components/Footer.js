import React from 'react';
import '../style/footer.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
      <Router>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/pieces">Pieces</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </Router>
      <div className="art-rights">
        <h3>Claire Fine Art LLC</h3>
        <h3>All rights reserved &#x00A9;2021</h3>
      </div>
    </div>
  )
};

export default Footer;
