import React, {useState} from 'react';
import '../style/pieces.css';
import {ArtRepo} from '../style/assets/ArtRepo';

const Pieces = () => {
  console.log(ArtRepo[0]);
  return (
    <div className="gallery-container">
      <h2 className="type-headline">Mixed Media</h2>
      <div className="pieces-container">
      {ArtRepo.mixed.map((url, i) => {
        return (
          <div className="gallery-piece">
            <img src={url} alt={`piece ${i}`} />
          </div>
        )
      }
      )}
      </div>
    </div>
  )
}
export {Pieces};
