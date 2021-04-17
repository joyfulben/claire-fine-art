import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/pieces.css';
import DetailsButton from '../style/DetailsButton';



const Pieces = ({setChildren, seeModal, childData, type, darkMode, styles}) => {
  const piecesArr = [];
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
