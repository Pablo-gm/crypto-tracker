import React from 'react'
import "./Coin.css"

const Coin = ({coin}) => {
    console.log("Coin");
    console.log(coin);
    if(coin.image){
        return (
            <div className="container">
                <div className="coin-container">
                    <div className="coin-graph card">
                        Coin Graph
                    </div>
                    <div className="coin-details card">
                        <img className="coin-details-image" src={coin.image.large} alt={coin.symbol} />
                        <div className="coin-details-name">{coin.name}</div>
    
                        <div className="">{coin.name} Current Price</div>
                        <div className="coin-details-text-label">Price</div>
                        <div className="coin-details-text">{coin.market_data.current_price.usd.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
                        <div className="coin-details-text-label">Price Change 24h</div>
                        <div className="coin-details-text"><span className={`${coin.market_data.price_change_percentage_24h < 0 ? 'red' : 'green'}`}>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</span> {coin.market_data.price_change_24h.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
    
                        
                        <div className="">{coin.name} Current Price History</div>
                        <div className="coin-details-text-label">7d</div>
                        <div className="coin-details-text">{coin.market_data.price_change_percentage_7d_in_currency.usd.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
                        <div className="coin-details-text-label">30d</div>
                        <div className="coin-details-text">{coin.market_data.price_change_percentage_30d.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
                        <div className="coin-details-text-label">1 Year</div>
                        <div className="coin-details-text">{coin.market_data.price_change_percentage_1y.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
    
                        <div className="">{coin.name} Market Cap</div>
                        <div className="coin-details-text-label">Market Cap</div>
                        <div className="coin-details-text">{coin.market_data.market_cap.usd.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
    
                        <div className="">{coin.name} Current Price</div>
                        <div className="coin-details-text-label">Circulating Supply</div>
                        <div className="coin-details-text">{coin.market_data.circulating_supply.toLocaleString(undefined, {minimumFractionDigits: 0})} {coin.symbol}</div>
                        <div className="coin-details-text-label">Total Supply</div>
                        <div className="coin-details-text">{coin.market_data.total_supply.toLocaleString(undefined, {minimumFractionDigits: 0})} {coin.symbol}</div>
                    </div>
                </div>
            </div>
        )
    }else{
        return (<div></div>)
    }

}

export default Coin
