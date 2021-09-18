import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CoinRow from '../components/CoinRow';

import { createChart } from 'lightweight-charts';
import * as Constants from '../extras/Constants';
import "./CoinTable.css"

function CoinTable() {

    // Store coin and filter coins
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    // Get data from API
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=24h%2C7d')
        .then(res => {
            // Set coins
            setCoins(res.data);
            
            // Get first "last update" to make the time axis
            let startDate = Date.parse(String(res.data[0].last_updated));
            let epochStartDate = Math.floor( startDate / 1000 ) - 604800;

            // Create graph for each coin
            res.data.forEach( (coin) => {
                const chart = createChart(`chart-${coin.id}`, Constants.smallChart.mainOptions);
                chart.applyOptions(Constants.smallChart.applyOptions);
        
                let areaSeries = chart.addAreaSeries( coin.price_change_percentage_24h < 0 ? Constants.smallChart.redArea : Constants.smallChart.greenArea );
                let graphData = [];
                coin.sparkline_in_7d.price.forEach( (price, index) => { graphData.push({time: epochStartDate + index*3600 , value: price}) })

                areaSeries.setData(graphData);

                chart.timeScale().fitContent();
            });

            // Jus in case
            // console.log(res.data);
        })
        .catch(error => console.log(error))
    },[]);
  
    const handleChange = (e) => {
      setSearch(e.target.value)
    }
  
    const filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="coin-app">
            <div className="container">
                <div className="table-wrapper card">
                    <div className="coin-search">
                        <h1 className="coin-text">Top 20 Cryptocurrencies</h1>
                        <form>
                            <input type="text" placeholder="Search" className="coin-input"
                            onChange={handleChange} />
                        </form>
                    </div>
                    <div className="overflow-x">
                        <table className="table">
                            <thead>
                                <tr>
                                <th className="text-right min-widt-2rem">#</th>
                                <th className="min-width-10rem">Coin</th>
                                <th className="text-right min-width-8rem">Price</th>
                                <th className="text-right min-width-4rem">24h</th>
                                <th className="text-right min-width-4rem">7d</th>
                                <th className="text-right min-width-10rem">Volume</th>
                                <th className="text-right min-width-10rem">Mkt Cap</th>
                                <th className="text-center min-width-8rem">Last 7 days</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                filteredCoins.map(coin => {
                                return (
                                    <CoinRow key={coin.id}  id={coin.id}
                                    name={coin.name} image={coin.image} symbol={coin.symbol}
                                    marketcap={coin.market_cap} price={coin.current_price} 
                                    priceChange={coin.price_change_percentage_24h}
                                    priceChangeSeven={coin.price_change_percentage_7d_in_currency} 
                                    volume={coin.total_volume} rank={coin.market_cap_rank}/>
                                )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/*
                filteredCoins.map(coin => {
                return (
                    <Coin key={coin.id} 
                    name={coin.name} image={coin.image} symbol={coin.symbol}
                    marketcap={coin.market_cap} price={coin.current_price} 
                    priceChange={coin.price_change_percentage_24h} 
                    volume={coin.total_volume}/>
                )
                })
                */
            }
        </div>
    )
}

export default CoinTable
