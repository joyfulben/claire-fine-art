import React from 'react';
import '../style/footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <nav>
        <a href="/"><h3>Home</h3></a>
        <a href="/contact"><h3>Contact</h3></a>
        <a href="/pieces"><h3>Pieces</h3></a>
      </nav>
      <div className="art-rights">
        <h3>Claire Fine Art LLC</h3>
        <h3>All rights reserved &#x00A9;2021</h3>
      </div>
    </div>
  )
};

export default Footer;
