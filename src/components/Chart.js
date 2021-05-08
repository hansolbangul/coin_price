import React from 'react';
import { Line } from 'react-chartjs-2';

const removeComma = (str) => { // 가격에서 , 제거
    str.replace("원", "");
	return parseInt(str.replace(/,/g,""));
}

// const Test = ({coin_state}) => {
//     const [temp, setTemp] = useState(coin_state);
//     // console.log(temp);
//     const [tableCoin, setTableCoin] = useState([]);

//     const personValue = () => {
//         setTableCoin(
//             temp.reduce(
//             (result, item) => [
//               ...result,
//               { 
//                 price: item.trade_price,
//                 highest_52_week_price: item.highest_52_week_price,
//                 lowest_52_week_price: item.lowest_52_week_price
//               }
//             ],
//             []
//           )
//         );
//       };

//     useEffect(() => {
//         personValue();
//     }, [temp]);

//     return { tableCoin }
// }



const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Chart = ({name, high, price, low, highdate, lowdate, today}) => {
    const data = {
        labels: [highdate, today, lowdate],
        datasets: [
          {
            label: `# ${name}`,
            data: [removeComma(high), removeComma(price), removeComma(low)],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };

    return(
        <>
    <Line data={data} options={options} />
  </>
    )
  
};

export default Chart;