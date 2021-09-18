import React from 'react'
import "./Coin.css"

const Coin = ({coin}) => {

    if(coin.image){
        return (
            <div className="container">
                <div className="coin-container">
                    <div className="coin-graph card">
                        <h3>{coin.name} last 7d:</h3>
                        <div className="" id={'chart-' + coin.id}>

                        </div>
                    </div>
                    <div className="coin-details card">
                        <img className="coin-details-image" src={coin.image.large} alt={coin.symbol} />
                        <div className="coin-details-name">{coin.name}</div>
    
                        <div className="coin-details-subtitle">{coin.name} Current Price</div>
                        <div className="coin-details-text-label">Price</div>
                        <div className="coin-details-text text-right">${coin.market_data.current_price.usd.toLocaleString('en-US', {minimumFractionDigits: 2})}</div>
                        <div className="coin-details-text-label">Price Change 24h</div>
                        <div className="coin-details-text text-spread"><span className={`${coin.market_data.price_change_percentage_24h < 0 ? 'red' : 'green'}`}>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</span> ${coin.market_data.price_change_24h.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
    
                        
                        <div className="coin-details-subtitle">{coin.name} Current Price History</div>
                        <div className="coin-details-text-label">7d</div>
                        <div className="coin-details-text text-right"><span className={`${coin.market_data.price_change_percentage_7d < 0 ? 'red' : 'green'}`}>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</span></div>
                        <div className="coin-details-text-label">30d</div>
                        <div className="coin-details-text text-right"><span className={`${coin.market_data.price_change_percentage_30d < 0 ? 'red' : 'green'}`}>{coin.market_data.price_change_percentage_30d.toFixed(2)}%</span></div>
                        <div className="coin-details-text-label">1 Year</div>
                        <div className="coin-details-text text-right"><span className={`${coin.market_data.price_change_percentage_1y < 0 ? 'red' : 'green'}`}>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</span></div>

                    </div>
                </div>
            </div>
        )
    }else{
        return (<div></div>)
    }

}

// Additional data might be added later, for example:
/*
<div className="coin-details-subtitle">{coin.name} Market Cap</div>
<div className="coin-details-text-label">Market Cap</div>
<div className="coin-details-text text-right">${coin.market_data.market_cap.usd.toLocaleString('en-US', {minimumFractionDigits: 2})}</div>

<div className="coin-details-subtitle">{coin.name} Current Supply</div>
<div className="coin-details-text-label">Circulating Supply</div>
<div className="coin-details-text text-right">{coin.market_data.circulating_supply.toLocaleString('en-US', {minimumFractionDigits: 0})} {coin.symbol.toUpperCase()}</div>
<div className="coin-details-text-label">Total Supply</div>
<div className="coin-details-text text-right">{ coin.market_data.total_supply ? coin.market_data.total_supply.toLocaleString('en-US', {minimumFractionDigits: 0}) : ''} {coin.symbol.toUpperCase()}</div>
*/

export default Coin
