import React, { useState, useEffect, forwardRef } from 'react';
import './Coin_Chart.css';
import MaterialTable from 'material-table';
import Chart from './Chart';
import axios from 'axios';

// material-Table icon 꺠짐 해결
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

// material-Table icon 꺠짐 해결
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
        <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
        <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const comma = (number) => {
    // 가격에 , 붙이기.
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const removeComma = (str) => {
    // 가격에서 , 제거
    str.replace('원', '');
    return parseInt(str.replace(/,/g, ''));
};

const removePs = (str) => {
    // 가격에서 %기준에서 나누기
    var temp = str.split('%');
    return parseFloat(temp[0]);
};

const Test = ({ coin_state }) => {
    const [temp, setTemp] = useState(coin_state);
    // console.log(temp);
    const [tableCoin, setTableCoin] = useState([]);

    const personValue = () => {
        setTableCoin(
            temp.reduce(
                (result, item) => [
                    ...result,
                    {
                        krw_name: `${item.korean_name} (${
                            item.market.split('-')[1]
                        })`,
                        price: `${comma(item.trade_price)}원`,
                        chage_price: `${(item.signed_change_rate * 100).toFixed(
                            2
                        )}%  (${comma(item.signed_change_price)}원)`,
                        acc_trade_price_24h: `${comma(
                            item.acc_trade_price_24h.toFixed(0)
                        )}원`,
                        highest_52_week_price: `${comma(
                            item.highest_52_week_price.toFixed(0)
                        )}원`,
                        lowest_52_week_price: `${comma(
                            item.lowest_52_week_price.toFixed(0)
                        )}원`,
                        highest_52_week_date: item.highest_52_week_date,
                        lowest_52_week_date: item.lowest_52_week_date,
                        trade_date: item.trade_date.replace(
                            /(\d{4})(\d{2})(\d{2})/g,
                            '$1-$2-$3'
                        ),
                        market: item.market,
                        high_price: item.high_price,
                        low_price: item.low_price,
                    },
                ],
                []
            )
        );
    };

    useEffect(() => {
        personValue();
    }, [temp]);

    return { tableCoin };
};

const Coin_Chart = ({ coin_state }) => {
    const [selectedRow, setSelectedRow] = useState(null);
    // console.log(coin_state);
    const { tableCoin } = Test({ coin_state });

    // console.log(tableCoin);

    return (
        <div className="App">
            {/* <h1>Demo</h1> */}
            <div>
                <MaterialTable
                    icons={tableIcons}
                    columns={[
                        {
                            title: '코인 명',
                            field: 'krw_name',
                        },
                        {
                            title: '가격',
                            field: 'price',
                            customSort: (a, b) =>
                                removeComma(a.price) - removeComma(b.price),
                        },
                        {
                            title: '변화율',
                            field: 'chage_price',
                            customSort: (a, b) =>
                                removePs(a.chage_price) -
                                removePs(b.chage_price),
                        },
                        {
                            title: '24시간 거래대금',
                            field: 'acc_trade_price_24h',
                            customSort: (a, b) =>
                                removeComma(a.acc_trade_price_24h) -
                                removeComma(b.acc_trade_price_24h),
                        },
                    ]}
                    data={tableCoin.map((e) => e)} // 되는 코드
                    title="upbit_coin_price"
                    //   onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))} // 클릭 -> 색 변경

                    options={{
                        // rowStyle: rowData => ({
                        //     backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'}), // 클릭 -> 색 변경
                        paging: false,
                        sorting: true,
                        headerStyle: {
                            position: 'sticky',
                            top: 0,
                        },
                        // maxBodyHeight: window.innerHeight - 265 테이블 스크롤로 묶기
                    }}
                    localization={{ toolbar: { searchPlaceholder: '코인 명' } }}
                    detailPanel={(rowData) => {
                        // 디테일 판낼 만들기.
                        return (
                            <div className="chart">
                                <h3> 현재가: {rowData.price}</h3>
                                <h3>
                                    {' '}
                                    오늘 최고가: {comma(rowData.high_price)}원
                                </h3>
                                <h3>
                                    {' '}
                                    오늘 최저가: {comma(rowData.low_price)}원
                                </h3>
                                <Chart candle={rowData.market} />
                            </div>
                        );
                    }}
                    onRowClick={(event, rowData, togglePanel) => togglePanel()}
                />
            </div>
        </div>
    );
};

export default Coin_Chart;
