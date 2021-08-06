import React, {useState} from "react";
import '../style/piece.css';
import { StripeContainer } from './StripeContainer';
import BuyButton from '../style/BuyButton';
// NOTE: Breadcrumbs: App.js

const Piece = ({ data, seeModal }) => {
  const [stripeContainer, showStripeContainer] = useState(false)
  const [price, setPrice] = useState(data.price)
  const handleBuyClick = () => {
    showStripeContainer(true);
  }

  let pieceData;

  if (data) {
    pieceData = (
      <>
        {stripeContainer ? <StripeContainer piece={data} price={price} /> :
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
            <tr>
              <th>Price</th>
              <td className="price-buy-cell">${(data.price)/100} 
              <h4>Currently Unavailable</h4>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    }
    </>
    )


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
