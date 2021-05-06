// import React, { useEffect, useState } from "react";

// const upbit_get = () =>{
//   const [upbit_price, setUpbit_price] = useState([]); // 계속 쓰는 정보

//   const [isLoading, setisLoading] = useState(true); // 알화성
//   const [upbit_coin, setUpbit_coin] = useState([]); // 일회성
//   const [name, setName] = useState([]); // 일회성
//   const [coin, setCoin] = useState([]); // 일회성
//   // const [error, setError] = useState(null);
//   const upbit_Link = "https://api.upbit.com/v1/ticker?markets=";
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         setisLoading(true);
//         // rep_coin을 통해 업비트에 있는 코인의 이름들을 불러오기.
//         // setUpbit_coin 을 통해 upbit_coin에 값 넣기.
//         // text라는 변수에 저장된 값을 링크형식에 사용할 수 있게 , 로 구분 마지막 문자열 ','은 split할 예정.
//         const rep_coin = await axios.get("https://api.upbit.com/v1/market/all");
//         setUpbit_coin(rep_coin.data);
//         setName(upbit_coin.map((e) => e.market));

//       } catch {
//         // setError("error");
//       } finally {
//         // 로딩이 끝났다는 것을 알려주기 위해 false값을 넣어준다.
//         setisLoading(false);
//       }
//     };
//     fetchUsers();
//     // console.log(name);
//   }, []);

//   useEffect(() => {
//     const fetchUsers_info = async () => {
//       try {
//         setisLoading(true);   
        
//         setCoin(name.map((names) => { 
//           if(names.includes("KRW") == true ){ 
//             return names;
//           } else {
//             return;
//           }}))

//         setCoin(coin.filter((item) => {
//           return item !== null && item !== undefined && item !== "";
//         }))

//         // console.log(coin);

//         const text = coin.map((e) => e)+",";

//         // console.log(text);

//         // upbit_Link + 원하는 코인의 가격을 통해 가격을 볼 수 있음.
//         // rep_price로 받아서 setUpbit_price를 통해 upbit_price에 값을 저장 (코인의 정보, 가격 포함)
//         // text.slice(0, -1) => text의 마지막 ',' 를 제거하기 위함.
//         const rep_price = await axios.get(upbit_Link+text.slice(0, -1)); 
//         setUpbit_price(rep_price.data);
//       } catch {
//         // setError("error");
//       } finally {
//         // 로딩이 끝났다는 것을 알려주기 위해 false값을 넣어준다.
//         setisLoading(false);
//       }
//     };
//     fetchUsers_info();
//   }, []);

//   console.log(upbit_price);
//   // loading이 되지 않았다면 로딩중을 띄워라
//   if (isLoading) { return <div>로딩중</div> } 

// //   if (upbit_price) {
// //       return <div>로디이이이이이잉중</div>
// //   }

// //   const 

// }

// export default upbit_get;