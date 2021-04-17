import React from "react";
import '../style/piece.css';

// NOTE: Breadcrumbs: App.js

const Piece = ({ data }) => {
  console.log(data);
  let pieceData;

  if (data) {
    pieceData = (
      <div className="piece-container">

        <img src={data.src} alt={`${data.title} pic`} />
        <div className="title-price-container">
          <h1> {data.title} </h1>
          <hr />
          <h2>
          {data.medium}</h2>
          <hr />
          <h2>${data.price}</h2>
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
