import React from 'react'
import { Link } from 'react-router-dom'
import "./Coin.css"

const CoinRow = ({id, rank, name, image, symbol, price, volume, priceChange, priceChangeSeven, marketcap}) => {
    return (
        <tr>
            <td className="text-right">{rank}</td>
            <td>
                <div className="coin-info">
                    <img src={image} alt={name} className="coin-image" />
                    <div className="coin-info-text">
                        <Link to={`/coin/${id}`}>{name}</Link>
                        <span className="coin-symbol">{symbol}</span>
                    </div>
                </div>
            </td>
            <td className="text-right">${price.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
            <td className={`coin-percentage text-right ${priceChange < 0 ? 'red' : 'green'}`}>{priceChange.toFixed(2)}%</td>
            <td className={`coin-percentage text-right ${priceChangeSeven < 0 ? 'red' : 'green'}`}>{priceChangeSeven.toFixed(2)}%</td>
            <td className="text-right">${volume.toLocaleString()}</td>
            <td className="text-right">${marketcap.toLocaleString()}</td>
            <td><div id={`chart-${id}`}></div></td>
        </tr>
    )
}

export default CoinRow
