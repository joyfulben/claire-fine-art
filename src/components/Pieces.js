import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/pieces.css';
import DetailsButton from '../style/DetailsButton';

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

  const [screenWidthClass, setClass] = useState('pieces-container');
  const breakPoint = 1230;

  const handlePicClick = (src) => {
    seeModal();
    setChildren(<img src={src} alt="modal pic"/>);
  }


  const darkie = () => {
    if (darkMode) {
      return (styles.detailsButton);
    } else {
      return ({});
    }
  }
  // useEffect(() => {
  //   setWidth(window.screen.width);
  //   checkScreenWidth()
  // }, [width]);
console.log(window.innerWidth)
  return (
    <div className="gallery-container">
      <h2 className="type-headline">{type}</h2>
      <div className={screenWidthClass}>
      {piecesArr.map((piece, i) => {
        return (
          <div key={i} className="gallery-piece" >
            <img onClick={() => handlePicClick(piece.src)} src={piece.src} alt={`piece ${i}`} loading="lazy" />
            <Link  to={`/${piece.id}`}><DetailsButton onClick={() => setChildren(piece)} className="details-button">Details</DetailsButton></Link>
            
          </div>
        );
      }
    )}
      </div>
    </div>
  )
}
export {Pieces};
