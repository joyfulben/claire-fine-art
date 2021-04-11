import React, {useState, useEffect} from 'react';
import '../style/pieces.css';
import {ArtRepo} from '../style/assets/ArtRepo';
import Button from '@material-ui/core/Button';
import DetailsButton from '../style/DetailsButton';


const Pieces = ({setChildren, seeModal}) => {

  const [screenWidthClass, setClass] = useState('');
  const [width, setWidth] = useState(window.screen.width);
  const breakPoint = 1230;
  const handlePicClick = (src) => {
    seeModal();
    setChildren(<img src={src} alt="modal pic"/>);
  }
  console.log(width);
  const checkScreenWidth = () => {

    if (width < breakPoint) setClass("medium-pieces-container")
    else setClass("pieces-container")
  }
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.screen.width));
    checkScreenWidth();
  }, []);

  return (
    <div className="gallery-container">
      <h2 className="type-headline">Mixed Media</h2>
      <div className={screenWidthClass}>
      {ArtRepo.mixed.map((url, i) => {
        return (
          <div className="gallery-piece" >
            <img onClick={() => handlePicClick(url.src)} src={url.src} alt={`piece ${i}`} loading="lazy" />
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
