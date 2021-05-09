import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import ReactApexChart from 'react-apexcharts';

function CandleUrl (url) { // 1번째 api 호출하기.
    const [isCandle, setIsCandle] = useState(null);
    
    // 비동기 처리하기.
    const callUrl = async () => {
        try {
            const { data } = await axios.get(url);
            setIsCandle(data);
        } finally {
            // setLoading1(false);
        }
    };

    useEffect(() => {
        callUrl()
    }, []);

    return { isCandle };
}

const Test = (isCandle) => {
    // if(isCandle){
    //     console.log(isCandle);
    // }
    const [coinCandle, setCoinCandle] = useState(null);

    const personValue = () => {
        if(isCandle){
            console.log(isCandle);
            setCoinCandle(
                isCandle.reduce(
                (result, item) => [
                  ...result,
                  { 
                      data: [{
                        x: item.timestamp,
                        y: [item.opening_price, item.high_price, item.low_price, item.trade_price]
                      }]
                    
                  }
                ],
                []
            )
        );
        }
      };

    useEffect(() => {
        personValue();
    }, [isCandle]);

    return { coinCandle }
}


const Chart = ({candle}) => {
    const [options, setOptions] = useState({
        options: {
            plotOptions:{
                toolbar: {
                    show: true,
                    tools: {
                      download: false,
                    },
                },
            },
            chart: {
              type: 'candlestick',
              height: 100
            },
            title: {
              text: 'CandleStick Chart',
              align: 'left'
            },
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              tooltip: {
                enabled: true
              }
            }
          },
        })
    console.log(options.options)

    const { isCandle } = CandleUrl(`https://api.upbit.com/v1/candles/minutes/30?market=${candle}&count=30`);
    // console.log(isCandle);
    const { coinCandle } = Test(isCandle);

    // const { candleMinutes } = ArrayAdd(coinCandle)

    // if (coinCandle) {
    //     console.log(coinCandle);
    // }
    // console.log(coinCandle);
    
    // console.log(`https://api.upbit.com/v1/candles/minutes/30?market=${candle}&count=10`);
    

    return (

        <div>
            {coinCandle ? (
                <div className="chart">
                    <ReactApexChart 
                    options={options.options} 
                    series={coinCandle} 
                    type="candlestick" 
                    height={350} /></div>
                ) : (
                <h2>Loding</h2>
                )  }
        </div>



      );
    }


export default Chart;