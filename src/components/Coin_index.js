import React from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Link } from "react-router-dom";

const comma = (number) => { // 가격에 , 붙이기.
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// toFixed(n) 소수점 뒤에 n 만큼만 두고 나머지 다 자름
const Coin_index = ( {market, korean_name, signed_change_price, trade_price, signed_change_rate, acc_trade_price_24h  } ) => {
    return (
        <TableRow>
            <TableCell><Link
            to = {{
                pathname: `/coin_info/${market}`
            }}
            >
            {korean_name} ({market})</Link></TableCell>
            <TableCell>{comma(trade_price)}원</TableCell>
            <TableCell>{signed_change_rate.toFixed(3)} ({comma(signed_change_price)}원)</TableCell> 
            <TableCell>{comma(acc_trade_price_24h.toFixed(0))}원</TableCell>
        </TableRow>
    )
}


export default Coin_index;