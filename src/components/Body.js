import React from 'react';
import '../style/body.css';
// This is the three image buttons on the homepage
const Body = () => {
  return (
    <div className="store-categories">
    <a href="/pieces/encaustics">
      <div className="card-container">
      <h2>Encaustics</h2>
        <div className="encaustics">
        </div>
      </div>
    </a>
    <a href="/pieces/prints">
      <div className="card-container">
      <h2>Prints</h2>
        <div className="prints">
        </div>
      </div>
    </a>
    <a href="/pieces/mixed">
      <div className="card-container">
      <h2>Mixed</h2>
        <div className="mixed">
        </div>
      </div>
    </a>
    </div>
  )
}
export {Body};
