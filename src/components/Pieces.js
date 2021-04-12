import React, {useState, useEffect} from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import '../style/pieces.css';
import {ArtRepo} from '../style/assets/ArtRepo';
import Button from '@material-ui/core/Button';
import DetailsButton from '../style/DetailsButton';
import Piece from './Piece';


const Pieces = ({setChildren, seeModal}) => {
  const { url } = useRouteMatch();
  const [screenWidthClass, setClass] = useState('');
  const [width, setWidth] = useState(window.screen.width);
  const breakPoint = 1230;
  const handlePicClick = (src) => {
    seeModal();
    setChildren(<img src={src} alt="modal pic"/>);
  }

  const checkScreenWidth = () => {
    if (parseInt(width) < breakPoint) {setClass("medium-pieces-container")}
    else {setClass("pieces-container")}
  }

  useEffect(() => {
    window.addEventListener("resize", () => { setWidth(window.screen.width)}); checkScreenWidth()
  }, [width]);

  return (
    <div className="gallery-container">
      <h2 className="type-headline">Mixed Media</h2>
      <div className={screenWidthClass}>
      {ArtRepo.mixed.map((piece, i) => {
        return (
          <div key={i} className="gallery-piece" >
            <img onClick={() => handlePicClick(piece.src)} src={piece.src} alt={`piece ${i}`} loading="lazy" />
            <Link to={`/${piece.id}`}><DetailsButton className="details-button">Details</DetailsButton></Link>
          </div>
        );
      }
    )};
      </div>



    </div>
  )
}
export {Pieces};
