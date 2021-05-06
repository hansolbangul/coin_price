import { lazy, useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url) { // 1번째 api 호출하기.
    const [name, setname] = useState(null);
    const [loading1, setLoading1] = useState(null);
    const [error1, setError1] = useState("");
    
    // 비동기 처리하기.
    const callUrl = async () => {
        try {
            const { data } = await axios.get(url);
            setname(data);
        } catch {
            setError1("😭");
        } finally {
            setLoading1(false);
        }
    };

    useEffect(() => {
        callUrl()
    }, []);

    return { name, loading1, error1 };
}

function Swap (name) { // 1번째 api에서 KRW(원화마켓)만 추리기
    const [coin_price, setCoin_Price] = useState([]);
    const value_price = (() => {
        if (name) {
            setCoin_Price(name.map((e) => {
                if(e.market.includes("KRW") == true ){ 
                    return e.market;
                } else {
                    return;
                }
            }));
            return coin_price;
        }
    });

    useEffect(() => {
        value_price()
    }, [name]);

    return { coin_price };
}

function Swap_undefined (name) { // 원화마켓만 추린것에서 undefined 제거하기.
    const [coin_section, setCoin_Section] = useState([]);
    const value_price = (() => {
        if (name) {
            setCoin_Section(name.filter((item) => {
                return item !== null && item !== undefined && item !== "";
            }))
        }
    });

    useEffect(() => {
        value_price()
    }, [name]);
    // http+coin_section.map((e) => e) 로 문장을 만들 수 있음 
    return { coin_section };
}

function useEdit(url) { // 2번째 api 받아오기
    // console.log(url);
    const [coin, setCoin] = useState(null);
    const [loading2, setLoading2] = useState(null);
    const [error2, setError2] = useState("");

    const callUrl = async () => {
        try {
            const { data } = await axios.get(url);
            setCoin(data);
            // console.log(data);
        } catch {
            setError2("😭");
        } finally {
            setLoading2(false);
        }
    };

    useEffect(() => {
        callUrl()
    }, [url]);

    return { coin, loading2, error2 };
}

const comma = (number) => { // 가격에 , 붙이기.
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function Korean_name (name, coin) { // 원화 마켓의 영어이름, 한국이름을 뽑음.
    const [loading, setLoading] = useState(null);
    const [krw_name, setKrw_name] = useState();

    const rename = () => {
        if(coin){
            // name에는 KRW와 BTC, USDT등이 있음. 그렇기에 KRW만 남기기 위함.
            // coin을 비교대상으로 두어 KRW만 뽑음.
            // 코드분석이 필요함. reduce와 some에대해 더 공부할 것.
            setKrw_name(name.reduce(
                (result, item) =>
                coin.some(el => el.market === item.market)
                ? 
                [...result, item]
                : result,
                []
            ));
        }
        setLoading(true);
    }

    useEffect(() => {
        rename();
        // console.log(krw_name);
    }, [coin]);
    
    // console.log(krw_name);
    return { krw_name, loading}; 
} 

function Arrchange (krw_name, coin) { // 원화이름이랑, price랑 합치기.
    const [ coin_state, setCoin_State ] = useState();
    
    const arr = () =>{
        if (krw_name){
            setCoin_State(krw_name.map(_a => {
                const foundB = coin.find(_b => _a.market===_b.market)
                return foundB ? {..._a,...foundB} : _a
            }))
        }
    }
    
    useEffect(() => {
        arr();
    }, [krw_name])

    return { coin_state };
}

const Main = () => {
    // 1번째 api 받아오기 code: 93~100
    const { name, loading1, error1 } = useFetch("https://api.upbit.com/v1/market/all");

    // 1번째 api에서 KRW(원화마켓)만 추리기
    const { coin_price } = Swap(name);

    // 원화마켓만 추린것에서 undefined 제거하기.
    const { coin_section } = Swap_undefined(coin_price);

    // 2번째 api 받아오기 code: 102~107
    const upbit_Link = "https://api.upbit.com/v1/ticker?markets=";

    // coin_section.map((e) => e)를 통해 받아온 api의 원화마켓명을 모두 붙인 후 받아오기. 
    const upbit_url = upbit_Link+coin_section.map((e) => e);
    const { coin, loading2, error2 } = useEdit(upbit_url);

    // 원화 마켓의 영어이름, 한국이름을 뽑음.
    const { krw_name, loading } = Korean_name(name, coin);
    
    // 원화 마켓의 영어이름, 한국이름인 krw_name 과 코인의 가격 및 정보를 갖고있는 coin을 market 기준으로 병합.
    const { coin_state } = Arrchange(krw_name, coin);

    // {krw_name ? console.log(krw_name) : console.log("happy")}
    // const { arr , setArr } = useState();
    
    // setArr(krw_name.map(_a => {
    //     const foundB = coin.find(_b => _a.market===_b.market)
    //     return foundB ? {..._a,...foundB} : _a
    // }))

    // console.log(c);
    // console.log(coin_state);
    // if(krw_name) {
    //     console.log(krw_name);
    // } else {
    //     console.log("happy");
    // }

    return (
        <div className="App">
            <h1>Coin</h1>
            {/* {loading1 && <span>loading1 your cat</span>}
            {!loading1 && error1 && <span>{error1}</span>}
            {!loading1 && name && <li>{name.map((e) => e.market)}</li>} */}
            {/* <h1>{coin.map((e) => e.change)}</h1> */}
            {/* {!loading2 && coin && coin.map((e) => <li>{e.market}{e.trade_price}</li>)} */}
            {!coin_state ? 
            (<div className="Loading_div">Loding</div>) : 
            (<div>{coin_state.map((e) => <li key={coin_state.id}>{e.market}, {e.korean_name}, {comma(e.trade_price)}</li>)}</div>)}
            {/* (<div>{coin.map((e) => <li key={coin.id}>{e.market}, {comma(e.trade_price)}</li>)}</div>)} */}

        </div>
    );
}

export default Main;
