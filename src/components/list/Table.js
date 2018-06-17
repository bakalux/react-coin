import React from "react";
import "./Table.css";
import propTypes from 'prop-types';

const Table = (props) => {
  const {currencies, renderChangePercent} = props;
  
    return (
      <div className="Table-container">
        <table className="Table">
          <thead className="Table-head">
            <tr>
              <th>Cryptocurrencies</th>
              <th>Price</th>
              <th>Market</th>
              <th>24H Change</th>
            </tr>
          </thead>
          <tbody className="Table-body">
            {currencies.map(currency => (
              <tr key={currency.id}>
                <td>
                  <span className="Table-rank">{currency.rank}</span>
                  {currency.name}
                </td>
                <td>
                  <span className="Table-dollar">$ </span>
                  {currency.price}
                </td>
                <td>
                  <span className="Table-dollar">$ </span>
                  {currency.marketCap}
                </td>
                <td>{renderChangePercent(currency.percentChange24h)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  
}

Table.propTypes = {
  currencies: propTypes.array.isRequired,
  renderChangePercent: propTypes.func.isRequired
}

export default Table;