(this.webpackJsonpcoin_price=this.webpackJsonpcoin_price||[]).push([[0],{436:function(e,t,c){},455:function(e,t,c){},624:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(15),i=c.n(a),o=(c(436),c(17)),u=c(30),j=c(155),s=c.n(j),b=c(268),f=c(49),O=c(269),d=c.n(O),l=(c(455),c(262)),_=c.n(l),p=c(418),h=c(16),w=function(e){return e.replace("\uc6d0",""),parseInt(e.replace(/,/g,""))},x={scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},g=function(e){var t=e.name,c=e.high,r=e.price,n=e.low,a=e.highdate,i=e.lowdate,o={labels:[a,e.today,i],datasets:[{label:"# ".concat(t),data:[w(c),w(r),w(n)],fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(p.a,{data:o,options:x})})},m=c(404),k=c.n(m),v=c(414),S=c.n(v),R=c(405),E=c.n(R),C=c(412),F=c.n(C),P=c(272),y=c.n(P),A=c(271),N=c.n(A),I=c(406),L=c.n(I),$=c(407),B=c.n($),D=c(409),J=c.n(D),z=c(410),K=c.n(z),M=c(411),T=c.n(M),V=c(415),W=c.n(V),Z=c(408),q=c.n(Z),G=c(413),H=c.n(G),Q=c(416),U=c.n(Q),X={Add:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(k.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(E.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(N.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(L.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(y.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(B.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(q.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(J.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(K.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(T.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(y.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(F.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(N.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(H.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(S.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(W.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(h.jsx)(U.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))}))},Y=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},ee=function(e){return e.replace("\uc6d0",""),parseInt(e.replace(/,/g,""))},te=function(e){var t=e.split("%");return parseFloat(t[0])},ce=function(e){var t=e.coin_state,c=Object(r.useState)(t),n=Object(f.a)(c,2),a=n[0],i=(n[1],Object(r.useState)([])),o=Object(f.a)(i,2),j=o[0],s=o[1];return Object(r.useEffect)((function(){s(a.reduce((function(e,t){return[].concat(Object(u.a)(e),[{krw_name:"".concat(t.korean_name," (").concat(t.market.split("-")[1],")"),price:"".concat(Y(t.trade_price),"\uc6d0"),chage_price:"".concat((100*t.signed_change_rate).toFixed(2),"%  (").concat(Y(t.signed_change_price),"\uc6d0)"),acc_trade_price_24h:"".concat(Y(t.acc_trade_price_24h.toFixed(0)),"\uc6d0"),highest_52_week_price:"".concat(Y(t.highest_52_week_price.toFixed(0)),"\uc6d0"),lowest_52_week_price:"".concat(Y(t.lowest_52_week_price.toFixed(0)),"\uc6d0"),highest_52_week_date:t.highest_52_week_date,lowest_52_week_date:t.lowest_52_week_date,trade_date:t.trade_date.replace(/(\d{4})(\d{2})(\d{2})/g,"$1-$2-$3")}])}),[]))}),[a]),{tableCoin:j}},re=function(e){var t=e.coin_state,c=Object(r.useState)(null),n=Object(f.a)(c,2),a=(n[0],n[1],ce({coin_state:t}).tableCoin);return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("div",{children:Object(h.jsx)(_.a,{icons:X,columns:[{title:"\ucf54\uc778 \uba85",field:"krw_name"},{title:"\uac00\uaca9",field:"price",customSort:function(e,t){return ee(e.price)-ee(t.price)}},{title:"\ubcc0\ud654\uc728",field:"chage_price",customSort:function(e,t){return te(e.chage_price)-te(t.chage_price)}},{title:"24\uc2dc\uac04 \uac70\ub798\ub300\uae08",field:"acc_trade_price_24h",customSort:function(e,t){return ee(e.acc_trade_price_24h)-ee(t.acc_trade_price_24h)}}],data:a.map((function(e){return e})),title:"upbit_coin_price",options:{paging:!1,sorting:!0},localization:{toolbar:{searchPlaceholder:"\ucf54\uc778 \uba85"}},detailPanel:function(e){return Object(h.jsxs)("div",{className:"chart",children:[Object(h.jsxs)("h1",{children:[" \uc624\ub298\ub0a0\uc9dc: ",e.trade_date]}),Object(h.jsx)(g,{name:e.krw_name,high:e.highest_52_week_price,price:e.price,low:e.lowest_52_week_price,highdate:e.highest_52_week_date,lowdate:e.lowest_52_week_date,today:e.trade_date})]})},onRowClick:function(e,t,c){return c()}})})})};function ne(e){var t=Object(r.useState)([]),c=Object(f.a)(t,2),n=c[0],a=c[1];return Object(r.useEffect)((function(){!function(){if(e)a(e.map((function(e){return 1==e.market.includes("KRW")?e.market:void 0})))}()}),[e]),{coin_price:n}}function ae(e){var t=Object(r.useState)([]),c=Object(f.a)(t,2),n=c[0],a=c[1];return Object(r.useEffect)((function(){e&&a(e.filter((function(e){return null!==e&&void 0!==e&&""!==e})))}),[e]),{coin_section:n}}function ie(e,t){var c=Object(r.useState)(null),n=Object(f.a)(c,2),a=n[0],i=n[1],o=Object(r.useState)(),j=Object(f.a)(o,2),s=j[0],b=j[1];return Object(r.useEffect)((function(){t&&b(e.reduce((function(e,c){return t.some((function(e){return e.market===c.market}))?[].concat(Object(u.a)(e),[c]):e}),[])),i(!0)}),[t]),{krw_name:s,loading:a}}function oe(e,t){var c=Object(r.useState)(),n=Object(f.a)(c,2),a=n[0],i=n[1];return Object(r.useEffect)((function(){e&&i(e.map((function(e){var c=t.find((function(t){return e.market===t.market}));return c?Object(o.a)(Object(o.a)({},e),c):e})))}),[e]),{coin_state:a}}var ue=function(){var e=function(e){var t=Object(r.useState)(null),c=Object(f.a)(t,2),n=c[0],a=c[1],i=Object(r.useState)(null),o=Object(f.a)(i,2),u=o[0],j=o[1],O=Object(r.useState)(""),l=Object(f.a)(O,2),_=l[0],p=l[1],h=function(){var t=Object(b.a)(s.a.mark((function t(){var c,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get(e);case 3:c=t.sent,r=c.data,a(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),p("\ud83d\ude2d");case 11:return t.prev=11,j(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){h()}),[]),{name:n,loading1:u,error1:_}}("https://api.upbit.com/v1/market/all"),t=e.name,c=(e.loading1,e.error1,function(e){var t=Object(r.useState)(null),c=Object(f.a)(t,2),n=c[0],a=c[1],i=Object(r.useState)(null),o=Object(f.a)(i,2),u=o[0],j=o[1],O=Object(r.useState)(""),l=Object(f.a)(O,2),_=l[0],p=l[1],h=function(){var t=Object(b.a)(s.a.mark((function t(){var c,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get(e);case 3:c=t.sent,r=c.data,a(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),p("\ud83d\ude2d");case 11:return t.prev=11,j(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){h()}),[e]),{coin:n,loading2:u,error2:_}}("https://api.upbit.com/v1/ticker?markets="+ae(ne(t).coin_price).coin_section.map((function(e){return e})))),n=c.coin,a=(c.loading2,c.error2,ie(t,n)),i=a.krw_name,o=(a.loading,oe(i,n).coin_state);return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"\ucf54\uc778\uc774 \ub610..."}),o?Object(h.jsx)("div",{children:Object(h.jsx)(re,{coin_state:o})}):Object(h.jsx)("div",{className:"Loading_div",children:"Loding"})]})},je=c(417),se=c(31),be=function(){return Object(h.jsx)(je.a,{children:Object(h.jsx)(se.a,{path:"/",exact:!0,component:ue})})};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(be,{})}),document.getElementById("root"))}},[[624,1,2]]]);
//# sourceMappingURL=main.8bb54d21.chunk.js.map