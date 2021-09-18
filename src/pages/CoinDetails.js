import React, { useState, useEffect, useRef  } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { createChart } from 'lightweight-charts';
import * as Constants from '../extras/Constants';
import Coin from '../components/Coin';
import { Link } from 'react-router-dom';

function CoinDetails() {
    const [coin, setCoin] = useState({});
    const params = useParams();

    // Get data from API
    useEffect(() => {
        if(params.id){
            axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`)
            .then(res => {
                // Set coins
                setCoin(res.data);
                var htmlChart = document.getElementById(`chart-${params.id}`);
                var chartHeight = htmlChart.offsetWidth > 400 ? 420 : Math.floor(htmlChart.offsetWidth/2); 
                drawChart(res.data, {width: htmlChart.offsetWidth, height: chartHeight});
            })
            .catch(error => console.log(error))
        }
    },[]);

    const drawChart = (coin, chartSize) => {
        // Get first "last update" to make the time axis
        let startDate = Date.parse(String(coin.market_data.last_updated));
        let epochStartDate = Math.floor( startDate / 1000 ) - 604800;

        // Create graph for each coin

        const chart = createChart(`chart-${params.id}`, chartSize);
        chart.applyOptions(Constants.detailsChart.applyOptions);

        let areaSeries = chart.addAreaSeries( coin.market_data.price_change_percentage_7d < 0 ? Constants.detailsChart.redArea : Constants.detailsChart.greenArea );
        let graphData = [];
        coin.market_data.sparkline_7d.price.forEach( (price, index) => { graphData.push({time: epochStartDate + index*3600 , value: price}) })

        areaSeries.setData(graphData);

        chart.timeScale().fitContent();
    }

    return (
        <div>
            {coin ? (
                <div className="coin-app">
                    <div className="container ">
                        <Link to='/' className="return">Return</Link>
                    </div>
                    <Coin coin={coin} />
                </div>
            ) : (
                <h3>Coin "{params.id || ''}" not found...</h3>
            )}
        </div>
    )
}

export default CoinDetails
