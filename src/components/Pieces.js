import React, {useState} from 'react';
import '../style/pieces.css';
import {ArtRepo} from '../style/assets/ArtRepo';
import Button from '@material-ui/core/Button';
import DetailsButton from '../style/DetailsButton';


const Pieces = () => {

  console.log(ArtRepo[0]);
  return (
    <div className="gallery-container">
      <h2 className="type-headline">Mixed Media</h2>
      <div className="pieces-container">
      {ArtRepo.mixed.map((url, i) => {
        return (
          <div className="gallery-piece">
            <img src={url.src} alt={`piece ${i}`} loading="lazy"/>
            <DetailsButton className="details-button">Details</DetailsButton>
          </div>
        )
      }
      )}
      </div>
    </div>
  )
}
export {Pieces};
