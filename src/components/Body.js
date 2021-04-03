import React, {useState} from 'react';
import '../style/body.css'
const Body = () => {
  return (
    <div className="store-categories">
      <div className="card-container">
      <h2>Encaustics</h2>
        <div className="encaustics">

        </div>
      </div>
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
