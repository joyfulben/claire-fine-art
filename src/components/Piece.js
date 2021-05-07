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
          <table>
            <thead>
              <tr className="piece-title-row">
                <th>{data.title}</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <th>Mediums</th>
              <td>{data.medium}</td>
            </tr>
            <tr>
              <th>Canvas</th>
              <td>{data.canvas}</td>
            </tr>
            <tr>
              <th>Year</th>
              <td>{Number(data.year)}</td>
            </tr>
            </tbody>
          </table>
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
