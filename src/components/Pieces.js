import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/pieces.css';
import DetailsButton from '../style/DetailsButton';
import Piece from './Piece';


// NOTE: Breadcrumbs: App.js

const Pieces = ({setChildren, seeModal, childData, type, darkMode, styles}) => {
  const piecesArr = [];
  /* updateChildren is a function that immediately adds the first object in the childData array. There will always be at least one object in the array. Then there is a conditional looking for an array length of more than 1. This means all 3 objects of the full ArtRepo are being passed into Pieces. */
  const updateChildren = () => {
    childData[0].map(piece => { return piecesArr.push(piece) });

    if (childData.length > 1) {
      childData[1].map(piece => { return piecesArr.push(piece) });
      childData[2].map(piece => { return piecesArr.push(piece) });
    }
  }
  updateChildren();

  const breakPoint = 1230;
  const [activeIconId, setActiveIconId] = useState(0);
  const [width, setWidth] = useState(0)
  const [iconNavbarDisplay, setDisplay] = useState('none')


  const handlePicClick = (piece) => {
    seeModal();
    setChildren(<Piece data={piece}/>);
  }

  const navbarIconClickHandler = (id) => {
    setActiveIconId(id);
  }



  return (
    <>
    <div className="gallery-container">
      <h2 className="type-headline">{type}</h2>
       <div style={{display: iconNavbarDisplay}} className="icon-navbar-container">

        { piecesArr.map((piece, i) => {
            return (
              <div key ={i} className={`small-piece-container ${activeIconId === piece.id && 'active'}`} >
                <a href={`#${piece.id}`}><img onClick={() => navbarIconClickHandler(piece.id)} src={piece.src} alt={`piece ${i}`} /></a>
              </div>
            )
          })
        }
        </div>
      <div className="pieces-container">

      {piecesArr.map((piece, i) => {
        return (
          <div id={`${piece.id}`} key={i} className="gallery-piece" >
            <img onClick={() => handlePicClick(piece)} src={piece.src} alt={`piece ${i}`} loading="lazy" />
            <Link  to={`/${piece.id}`}></Link>
          </div>
        );
      }
    )}
      </div>
    </div>
  }
  </>
  )
}
export {Pieces};
