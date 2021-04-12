import React from "react";
import { useParams } from "react-router-dom";
import '../style/piece.css';

const Piece = ({ data }) => {
  console.log("Piece component loaded");
  const { pieceId } = useParams();
  const piece = data.find(p => p.id === Number(pieceId));
  let pieceData;
  if (piece) {
    pieceData = (
      <div className="piece-container">

        <img src={piece.src} />
        <div className="title-price-container">
          <h1> {piece.title} </h1>
          <hr />
          <h2>
          {piece.medium}</h2>
          <hr />
          <h2>${piece.price}</h2>
        </div>
      </div>
    );
  } else {
    pieceData = <h2> Sorry. Piece doesn't exist </h2>;
  }

  return (
    <div>
      <div>{pieceData}</div>
    </div>
  );
};

export default Piece;
