import React from "react";
import "./Coin_Chart.css";
import { Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';
import Coin_index from "./Coin_index";


const Coin_Chart = ( {coin_state} ) => {
    return (
        <div className="coin_index">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>코인 명</TableCell>
                        <TableCell>가격</TableCell>
                        <TableCell>변화율</TableCell>
                        <TableCell>24시간 거래대금</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {coin_state.map((e) => 
                    <Coin_index market={e.market} korean_name={e.korean_name} signed_change_price={e.signed_change_price} trade_price={e.trade_price} signed_change_rate={e.signed_change_rate} acc_trade_price_24h={e.acc_trade_price_24h} />)}
                </TableBody>
            </Table>

            {/* <Link
            to = {{
                pathname: '/coin'
            }}
            >
            <li>{market}, {korean_name}, {trade_price}</li> */}
            {/* </Link> */}
        </div>
    )
}

export default Coin_Chart;