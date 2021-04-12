import React from "react";
import { useParams } from "react-router-dom";

const Piece = ({ data }) => {
  console.log("Piece component loaded");
  const { pieceId } = useParams();
  const piece = data.find(p => p.id === Number(pieceId));
  let pieceData;
  if (piece) {
    pieceData = (
      <div>
        <h3> {piece.title} </h3>
        <img src={piece.src} />
        <hr />
        <h2>${piece.price}</h2>
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
