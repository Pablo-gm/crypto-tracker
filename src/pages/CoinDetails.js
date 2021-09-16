import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { createChart } from 'lightweight-charts';
import * as Constants from '../extras/Constants';
import Coin from '../components/Coin';

function CoinDetails() {
    const [coin, setCoin] = useState({});
    const params = useParams();
    const showMissing = false;
    console.log("params");
    console.log(params);

    // Get data from API
    useEffect(() => {
        if(params.id){
            axios.get('https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false')
            .then(res => {
                // Set coins
                setCoin(res.data);
                //init();
                console.log("resp");
                console.log(res.data);
                
            })
            .catch(error => console.log(error))
        }else{
            showMissing = true;
        }
    },[]);


    const init = useCallback(() => {
        const chart = createChart('something', Constants.smallChart.mainOptions);
        chart.applyOptions(Constants.smallChart.applyOptions);

        var areaSeries = chart.addAreaSeries( Constants.smallChart.redArea );

        //const lineSeries = chart.addLineSeries({priceScaleId: '', priceLineVisible: false, crosshairMarkerVisible: false});
        areaSeries.setData([
            { time: '2019-04-11', value: 80.01 },
            { time: '2019-04-12', value: 96.63 },
            { time: '2019-04-13', value: 76.64 },
            { time: '2019-04-14', value: 81.89 },
            { time: '2019-04-15', value: 74.43 },
            { time: '2019-04-16', value: 80.01 },
            { time: '2019-04-17', value: 96.63 },
            { time: '2019-04-18', value: 76.64 },
            { time: '2019-04-19', value: 81.89 },
            { time: '2019-04-20', value: 74.43 },
        ]);
        chart.timeScale().fitContent();
    }, []);

    return (
        <div>
            <h1>Details</h1>
            <div id="something">

            </div>
            {coin ? (
                <Coin coin={coin} />
            ) : (
                <h3>Coin "{params.id || ''}" not found...</h3>
            )}
        </div>
    )
}

export default CoinDetails
