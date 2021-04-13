import React, {useState} from 'react';
import '../style/body.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Body = () => {
  return (
    <div className="store-categories">
    <a className="card-container" href="/pieces/encaustics">
      <div >
      <h2>Encaustics</h2>
        <div className="encaustics">
        </div>
      </div>
    </a>

      <div className="card-container">
      <h2>Prints</h2>
        <div className="prints">
        </div>
      </div>
      <div className="card-container">
      <h2>Mixed</h2>
        <div className="mixed">

        </div>
      </div>
    </div>
  )
}
export {Body};
