(this.webpackJsonp5f03c0745401e72e4e4aa8f9a46f3c0f6ddbd0cd=this.webpackJsonp5f03c0745401e72e4e4aa8f9a46f3c0f6ddbd0cd||[]).push([[0],{82:function(n,e,t){},83:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),c=t.n(i),a=t(21),o=t.n(a),u=t(17),d=t(7),l=t.n(d),s=t(6),f=t(2),p=t(3);function b(){var n=Object(f.a)(["\n  margin: 0 0 16px 16px;\n  font-size: 14px;\n  font-weight: bold;\n"]);return b=function(){return n},n}function j(){var n=Object(f.a)(["\n  @media "," {\n    padding: 0 16px;\n    display: flex;\n    flex-wrap: wrap;\n    margin-bottom: 64px;\n  }\n\n  @media "," {\n    display: flex;\n    flex-direction: column;\n    overflow-y: scroll;\n  }\n"]);return j=function(){return n},n}function x(){var n=Object(f.a)(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n"]);return x=function(){return n},n}var g="#f9423a",h="#a23530",m="#424749",O="#6e7679",v="#e2e4e4",y="#f1f1f2",w="#ffffff",T="425px",D="768px",k="1024px",S="1440px",C="2560px",z={mobileM:"(max-width: ".concat("375px",")"),mobileL:"(min-width: ".concat(T,")"),tablet:"(min-width: ".concat(D,")"),laptop:"(min-width: ".concat(k,")"),laptopL:"(min-width: ".concat(S,")"),desktop:"(min-width: ".concat(C,")")},I=p.a.div(x()),N=p.a.div(j(),z.laptop,z.mobileM),L=p.a.p(b());function A(){var n=Object(f.a)(["\n  padding: 0 16px;\n  padding-top: 96px;\n  width: 100%;\n"]);return A=function(){return n},n}function R(){var n=Object(f.a)(["\n  width: 50%;\n  cursor: ",";\n  color: ",";\n  text-align: center;\n  font-size: 12px;\n  padding: 8px;\n  background-color: ",";\n"]);return R=function(){return n},n}function _(){var n=Object(f.a)(["\n  width: calc(100% - 32px);\n  margin-top: 16px;\n  margin-bottom: 32px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  border: solid 1px ",";\n  border-radius: 6px;\n  overflow: hidden;\n"]);return _=function(){return n},n}var E=p.a.div(_(),v),K=p.a.a(R(),(function(n){return n.disabled?"pointer":"disabled"}),(function(n){return n.disabled?O:w}),(function(n){return n.disabled?w:m})),F=p.a.div(A()),M=t(14),P=t.n(M),U=t(26),B="CHANGE_EAT_TIME",V={changeEatTime:function(n){return function(){var e=Object(U.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:B,payload:{eatTime:n}}),e.prev=1,t({type:"CHANGE_EAT_TIME_SUCCESS",payload:{eatTime:n}}),e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(1),e.abrupt("return",e.t0);case 8:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(n){return e.apply(this,arguments)}}()}},J=Object(s.b)((function(n){return{cart:n.cart}}),V)((function(n){var e=n.eatTime,t=function(e){n.changeEatTime(e)};return Object(r.jsx)(F,{children:Object(r.jsxs)(E,{children:[Object(r.jsx)(K,{disabled:"Lunch"!==e,onClick:function(){return t("Lunch")},children:"Lunch"}),Object(r.jsx)(K,{disabled:"Dinner"!==e,onClick:function(){return t("Dinner")},children:"Dinner"})]})})})),Y=t(5),q=t.n(Y),G=t(32),H=t(30),Q=t(10),W=t(31),X=t(44),Z=t(46);function $(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n\n  .icon {\n    margin-right: 8px;\n  }\n\n  & > *:not(.icon) {\n    margin-top: 4px;\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(f.a)(["\n  flex-shrink: 0;\n"]);return nn=function(){return n},n}var en=W.a.div(nn()),tn=(W.a.div($()),function(n){var e=n.icon,t=n.strokeColor,i=void 0===t?m:t,c=n.size,a=void 0===c?40:c,o=n.customFontAwesomeIconSize,u=void 0===o?"lg":o;return Object(r.jsx)(en,{className:"icon",css:Object(Q.a)({},Object(Z.a)("".concat(a,"px"))),children:Object(r.jsx)(X.a,{icon:e,size:u,color:i})})}),rn=function(n){var e=n.rating,t=!!(e%1),i=Object(G.a)(Array(parseInt(e))).map((function(n,e){return Object(r.jsx)(tn,{icon:H.a,strokeColor:g},e)})),c=i.push(Object(G.a)(Array(parseInt(1))).map((function(n,e){return Object(r.jsx)(tn,{icon:H.b,strokeColor:g},e)})));return t?i:c};function cn(){var n=Object(f.a)(["\n  display: flex;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  background-color: ",";\n  width: 70px;\n  height: 30px;\n  border-radius: 4px;\n  text-align: center;\n  border: 0;\n  cursor: pointer;\n  &:focus {\n    outline: none;\n    border: none;\n  }\n  &:hover {\n    background-color: ",";\n  }\n"]);return cn=function(){return n},n}function an(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return an=function(){return n},n}function on(){var n=Object(f.a)(["\n  margin: 0;\n  color: ",";\n  font-size: 8px;\n  font-weight: 500;\n"]);return on=function(){return n},n}function un(){var n=Object(f.a)(["\n  margin: 0;\n  color: ",";\n  font-size: 14px;\n  font-weight: bold;\n"]);return un=function(){return n},n}function dn(){var n=Object(f.a)(["\n  color: ",";\n  font-size: 12px;\n  font-weight: bold;\n  margin-right: 4px;\n"]);return dn=function(){return n},n}function ln(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return ln=function(){return n},n}function sn(){var n=Object(f.a)(["\n  width: calc(100% - 16px);\n  line-height: 1.5;\n  padding: 16px 8px 4px;\n  height: 90px;\n"]);return sn=function(){return n},n}function fn(){var n=Object(f.a)(["\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n"]);return fn=function(){return n},n}function pn(){var n=Object(f.a)(["\n  width: 100%;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n"]);return pn=function(){return n},n}function bn(){var n=Object(f.a)([""]);return bn=function(){return n},n}function jn(){var n=Object(f.a)(["\n  display: flex;\n  /* display: ","; */\n  flex-direction: column;\n  width: 100%;\n  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);\n  border-radius: 12px;\n  align-items: center;\n  overflow: hidden;\n  background-color: #fff;\n  border-style: hidden;\n  flex: 0 0 22%;\n  margin: 16px 12px;\n\n  :not(:last-of-type) {\n    margin-right: 24px;\n  }\n"]);return jn=function(){return n},n}var xn=p.a.div(jn(),(function(n){return n.visibility?"flex":"none"})),gn=p.a.div(bn()),hn=p.a.div(pn()),mn=p.a.img(fn()),On=p.a.div(sn()),vn=p.a.div(ln()),yn=p.a.div(dn(),O),wn=p.a.h4(un(),m),Tn=p.a.p(on(),O),Dn=p.a.div(an()),kn=p.a.button(cn(),w,g,h),Sn="ADD_PRODUCT",Cn={addProduct:function(n,e){return function(){var t=Object(U.a)(P.a.mark((function t(r){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:Sn,payload:{qty:n,price:e}}),t.prev=1,r({type:"ADD_PRODUCT_SUCCESS",payload:{qty:n+1,price:e}}),t.next=8;break;case 5:return t.prev=5,t.t0=t.catch(1),t.abrupt("return",t.t0);case 8:case"end":return t.stop()}}),t,null,[[1,5]])})));return function(n){return t.apply(this,arguments)}}()}},zn=Object(s.b)((function(n){return{cart:n.cart}}),Cn)((function(n){var e=n.eatTime,t=n.image,i=n.rating,c=n.price,a=n.productName,o=n.seller,u=n.currency;return Object(r.jsx)(xn,{style:{display:n.visibility?"flex":"none"},children:Object(r.jsxs)(gn,{children:[Object(r.jsx)(hn,{children:Object(r.jsx)(mn,{src:t,alt:t})}),Object(r.jsxs)(On,{children:[Object(r.jsxs)(vn,{children:[Object(r.jsx)(yn,{children:i}),Object(r.jsx)(rn,{rating:i})]}),Object(r.jsx)(wn,{children:a}),Object(r.jsxs)(Tn,{children:[o," \u2022 Uptown ",e]}),Object(r.jsxs)(Dn,{children:[Object(r.jsx)(wn,{children:new Intl.NumberFormat("id-ID",{style:"currency",currency:u}).format(c)}),Object(r.jsxs)(kn,{onClick:function(){n.addProduct(1,c)},children:[Object(r.jsx)("span",{children:"ADD"}),Object(r.jsx)(q.a,{icon:"add",color:w,size:"14px"})]})]})]})]})})}));function In(){var n=Object(f.a)(["\n  margin: 0;\n  font-size: 12px;\n  font-weight: 300;\n"]);return In=function(){return n},n}function Nn(){var n=Object(f.a)(["\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n"]);return Nn=function(){return n},n}function Ln(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"]);return Ln=function(){return n},n}function An(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return An=function(){return n},n}function Rn(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ",";\n  padding: 8px 8px 8px 12px;\n  background-color: ",";\n  border-radius: 4px;\n"]);return Rn=function(){return n},n}function _n(){var n=Object(f.a)(["\n  position: fixed;\n  padding: 12px 12px 16px 12px;\n  bottom: 0;\n  width: calc(100% - 24px);\n"]);return _n=function(){return n},n}var En=p.a.div(_n()),Kn=p.a.div(Rn(),w,h),Fn=p.a.div(An()),Mn=p.a.div(Ln()),Pn=p.a.h3(Nn()),Un=p.a.h5(In()),Bn=Object(s.b)((function(n){return{cart:n.cart}}),null)((function(n){var e=n.cart,t=e.cartValues,i=e.price;return Object(r.jsx)(En,{children:Object(r.jsxs)(Kn,{children:[Object(r.jsxs)(Fn,{children:[Object(r.jsxs)(Pn,{children:[" ",t," Items |"," ",new Intl.NumberFormat("id-ID",{style:"currency",currency:n.cart.currency}).format(i)]}),Object(r.jsx)(Un,{children:"Termasuk ongkos kirim"})]}),Object(r.jsxs)(Mn,{children:[Object(r.jsx)(q.a,{icon:"shopping_cart",color:w}),Object(r.jsx)(q.a,{icon:"keyboard_arrow_right",color:w})]})]})})}));function Vn(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 16px;\n"]);return Vn=function(){return n},n}function Jn(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  background-color: ",";\n  border-radius: 50%;\n"]);return Jn=function(){return n},n}function Yn(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  padding: 12px;\n"]);return Yn=function(){return n},n}function qn(){var n=Object(f.a)(["\n  width: calc(100% - 60px);\n  padding: 12px 12px 12px 48px;\n  font-size: 14px;\n  border: solid 1px ",";\n  border-radius: 4px;\n  color: ",";\n  &:focus {\n    outline: none;\n  }\n"]);return qn=function(){return n},n}function Gn(){var n=Object(f.a)(["\n  position: absolute;\n  top: 20%;\n  left: 12px;\n"]);return Gn=function(){return n},n}function Hn(){var n=Object(f.a)(["\n  position: relative;\n  margin-bottom: 12px;\n  background-color: pink;\n"]);return Hn=function(){return n},n}function Qn(){var n=Object(f.a)(["\n  margin: 0;\n  font-weight: 400;\n  font-size: 12px;\n  color: ",";\n"]);return Qn=function(){return n},n}function Wn(){var n=Object(f.a)(["\n  margin: 0;\n  font-size: 14px;\n  font-weight: bold;\n  color: ",";\n"]);return Wn=function(){return n},n}function Xn(){var n=Object(f.a)(["\n  margin: 0;\n  font-size: 20px;\n  font-weight: bold;\n  color: ",";\n  margin-bottom: 12px;\n"]);return Xn=function(){return n},n}function Zn(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: flex-end;\n  cursor: pointer;\n"]);return Zn=function(){return n},n}function $n(){var n=Object(f.a)(["\n  height: 87%;\n  overflow: auto;\n  padding: 20px;\n  background-color: ",";\n  border-radius: 12px 12px 0 0;\n  line-height: 2;\n"]);return $n=function(){return n},n}function ne(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  background-color: rgba(0, 0, 0, 0.4);\n"]);return ne=function(){return n},n}var ee=p.a.div(ne()),te=p.a.div($n(),w),re=p.a.div(Zn()),ie=p.a.h2(Xn(),m),ce=p.a.h3(Wn(),m),ae=p.a.h5(Qn(),O),oe=p.a.div(Hn()),ue=p.a.div(Gn()),de=p.a.input(qn(),v,m),le=p.a.div(Yn()),se=p.a.div(Jn(),y),fe=p.a.div(Vn()),pe=function(n){var e=n.setLocSearchToggle,t=Object(i.useState)(""),c=Object(u.a)(t,2),a=c[0],o=c[1];return Object(r.jsx)(ee,{children:Object(r.jsxs)(te,{children:[Object(r.jsx)(re,{onClick:function(){e(!1)},children:Object(r.jsx)(q.a,{icon:"clear",color:m})}),Object(r.jsx)(ie,{children:"Cek makanan yang tersedia di lokasi kamu!"}),Object(r.jsxs)(oe,{children:[Object(r.jsx)(de,{type:"text",onChange:function(n){o(n.target.value)},value:a}),Object(r.jsx)(ue,{children:Object(r.jsx)(q.a,{icon:"location_on",color:g})})]}),a.length>=3&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(le,{children:[Object(r.jsx)(se,{children:Object(r.jsx)(q.a,{icon:"location_on",color:O})}),Object(r.jsxs)(fe,{children:[Object(r.jsx)(ce,{children:"Kulina"}),Object(r.jsx)(ae,{children:"Jl. Tulodong Atas 28, Senayan, Kebayoran Baru"})]})]}),Object(r.jsxs)(le,{children:[Object(r.jsx)(se,{children:Object(r.jsx)(q.a,{icon:"location_on",color:O})}),Object(r.jsxs)(fe,{children:[Object(r.jsx)(ce,{children:"Kuliner Jalanan"}),Object(r.jsx)(ae,{children:"Jl. Tulodong Atas 40, Senayan, Kebayoran Baru"})]})]})]})]})})};function be(){var n=Object(f.a)(["\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  padding: 0;\n  border: 0;\n  &:hover {\n    background-color: ",";\n  }\n  &:focus {\n    outline: none;\n  }\n  &:active {\n    outline: none;\n    color: black;\n    background-color: ",";\n  }\n"]);return be=function(){return n},n}var je=p.a.a(be(),(function(n){return n.width}),(function(n){return n.width}),y,v),xe=function(n){var e=n.color,t=n.icon;return Object(r.jsx)(je,{children:Object(r.jsx)(q.a,{color:e,icon:t})})};function ge(){var n=Object(f.a)(["\n  margin: 0;\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  color: ",";\n"]);return ge=function(){return n},n}function he(){var n=Object(f.a)(["\n  margin: 0;\n  text-align: center;\n  font-size: 8px;\n  color: ",";\n"]);return he=function(){return n},n}function me(){var n=Object(f.a)(["\n  width: 40px;\n  height: 40px;\n  margin: 4px;\n  background-color: ",";\n  color: ",";\n  cursor: ",";\n  border-radius: 50%;\n  border: 0;\n  &:focus {\n    outline: none;\n    border: none;\n  }\n"]);return me=function(){return n},n}function Oe(){var n=Object(f.a)(["\n  display: flex;\n  overflow-x: scroll;\n  margin: 0 16px;\n  &::-webkit-scrollbar {\n    height: 0;\n    background: transparent;\n  }\n"]);return Oe=function(){return n},n}var ve=p.a.div(Oe()),ye=p.a.button(me(),(function(n){return n.active?m:w}),(function(n){return n.disabled?v:void 0}),(function(n){return n.disabled?void 0:"pointer"})),we=p.a.p(he(),(function(n){return n.disabled?void 0:function(n){return n.active?y:O}})),Te=p.a.p(ge(),(function(n){return n.disabled?void 0:function(n){return n.active?w:m}})),De=function(){for(var n=new Date,e=new Date,t=[],r=0;r<14;r++){var i=e.setDate(n.getDate()+r);t.push(i)}return t},ke=function(n){var e=n.dateSelected,t=n.setDateSelected,i=function(n){return new Date(e).getDate()===new Date(n).getDate()};return Object(r.jsx)(ve,{children:De().map((function(n,e){return Object(r.jsx)("div",{children:"Sat"===l()(n).format("ddd")||"Sun"===l()(n).format("ddd")?Object(r.jsxs)(ye,{disabled:!0,children:[Object(r.jsx)(we,{disabled:!0,children:l()(n).format("ddd").toUpperCase()}),Object(r.jsx)(Te,{disabled:!0,children:l()(n).format("DD")})]}):Object(r.jsxs)(ye,{active:i(n),onClick:function(){t(n)},children:[Object(r.jsx)(we,{active:i(n),children:l()(n).format("ddd").toUpperCase()}),Object(r.jsx)(Te,{active:i(n),children:l()(n).format("DD")})]})},e)}))})};function Se(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Se=function(){return n},n}function Ce(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  cursor: pointer;\n  margin-right: 4px;\n"]);return Ce=function(){return n},n}function ze(){var n=Object(f.a)(["\n  color: ",";\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0;\n  padding: 0;\n"]);return ze=function(){return n},n}function Ie(){var n=Object(f.a)(["\n  margin: 0;\n  padding: 0;\n  color: ",";\n  font-size: 8px;\n"]);return Ie=function(){return n},n}function Ne(){var n=Object(f.a)(["\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  margin-left: 8px;\n"]);return Ne=function(){return n},n}function Le(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 4px;\n"]);return Le=function(){return n},n}function Ae(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  line-height: 1;\n  padding: 12px 4px 0 4px;\n  background-color: white;\n  border-bottom: solid 1px ",";\n"]);return Ae=function(){return n},n}var Re=p.a.div(Ae(),v),_e=p.a.div(Le()),Ee=p.a.div(Ne()),Ke=p.a.h3(Ie(),O),Fe=p.a.h1(ze(),m),Me=p.a.div(Ce()),Pe=p.a.div(Se()),Ue=function(n){var e=n.setLocSearchToggle,t=n.dateSelected,i=n.setDateSelected;return Object(r.jsxs)(Re,{children:[Object(r.jsxs)(_e,{children:[Object(r.jsx)(xe,{color:m,icon:"arrow_back",width:"30px",height:"30px"}),Object(r.jsxs)(Ee,{onClick:function(){e(!0)},children:[Object(r.jsx)(Ke,{children:"ALAMAT PENGANTARAN"}),Object(r.jsxs)(Me,{children:[Object(r.jsx)(Fe,{children:"Tokopedia Tower"}),Object(r.jsx)(xe,{color:g,icon:"expand_more",width:"20px",height:"20px"})]})]})]}),Object(r.jsx)(Pe,{children:Object(r.jsx)(ke,{dateSelected:t,setDateSelected:i})})]})},Be=Object(s.b)((function(n){return{cart:n.cart,eatTime:n.eatTime}}),null)((function(n){var e=n.cart,t=e.cartValues,c=e.products,a=n.eatTime.eatTime,o=Object(i.useState)(Date.now()),d=Object(u.a)(o,2),s=d[0],f=d[1],p=Object(i.useState)(!1),b=Object(u.a)(p,2),j=b[0],x=b[1];return Object(r.jsxs)(I,{children:[Object(r.jsx)(Ue,{setLocSearchToggle:x,dateSelected:s,setDateSelected:f}),Object(r.jsx)(J,{eatTime:a}),Object(r.jsx)(L,{children:l()(s).format("dddd, DD MMMM YYYY")}),Object(r.jsx)(N,{children:c.map((function(e){var t=e.id,i=e.productName,c=e.image,a=e.seller,o=e.price,u=e.currency,d=e.rating,l=e.eatTime;return Object(r.jsx)(zn,{visibility:l===n.eatTime.eatTime,productName:i,image:c,eatTime:l,rating:d,seller:a,price:o,currency:u},t)}))}),0!==t&&Object(r.jsx)(Bn,{}),j&&Object(r.jsx)(pe,{setLocSearchToggle:x})]})})),Ve=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,84)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),c(n),a(n)}))},Je=t(9),Ye=t(45),qe={products:[{id:1,productName:"Burger Queen",seller:"by Kulina",price:35e3,currency:"IDR",rating:4.5,image:"assets/burger.jpg",eatTime:"Lunch"},{id:2,productName:"Egg Toast Err",seller:"by Kulina",price:15e3,currency:"IDR",rating:2.5,image:"assets/egg-toast.jpg",eatTime:"Lunch"},{id:3,productName:"Fried Rice Cak Lontong",seller:"by Kulina",price:27e3,currency:"IDR",rating:4.5,image:"assets/fried-rice.jpg",eatTime:"Dinner"},{id:4,productName:"Fruit Salad",seller:"by Kulina",price:1e4,currency:"IDR",rating:4.5,image:"assets/fruit-salad.jpg",eatTime:"Lunch"},{id:5,productName:"Ice Cream Tung-tung",seller:"by Kulina",price:5e3,currency:"IDR",rating:4.5,image:"assets/ice-cream.jpg",eatTime:"Lunch"},{id:6,productName:"Nuggets Ugetz",seller:"by Kulina",price:6500,currency:"IDR",rating:4.5,image:"assets/nuggets.jpg",eatTime:"Dinner"},{id:7,productName:"Pasta Abata",seller:"by Kulina",price:15e3,currency:"IDR",rating:1.5,image:"assets/pasta.jpg",eatTime:"Dinner"},{id:8,productName:"Pizza Pottato Bianca",seller:"by Kulina",price:45e3,currency:"IDR",rating:3.5,image:"assets/pizza.jpg",eatTime:"Dinner"},{id:9,productName:"Buryam Sarinah",seller:"by Kulina",price:15e3,currency:"IDR",rating:4.5,image:"assets/porridge.jpg",eatTime:"Lunch"},{id:10,productName:"Roasted Egg",Seller:"by Kulina",price:5e3,currency:"IDR",rating:4.5,image:"assets/roasted-egg.jpg",eatTime:"Lunch"},{id:11,productName:"Fresh Vegetables",Seller:"by Kulina",price:1e4,currency:"IDR",rating:3.5,image:"assets/vegetables.jpg",eatTime:"Lunch"}],isChartOpen:!1,currentDate:Date.now(),location:"Tokopedia Tower",cartValues:0,price:0,currency:"IDR"},Ge=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Sn:var t=e.payload,r=t.qty,i=t.price;return Object(Q.a)(Object(Q.a)({},n),{},{cartValues:n.cartValues+r,price:n.price+i});default:return n}},He={eatTime:"Lunch"},Qe=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case B:var t=e.payload.eatTime;return Object(Q.a)(Object(Q.a)({},n),{},{eatTime:t});default:return n}},We=Object(Je.c)({cart:Ge,eatTime:Qe}),Xe=[Ye.a],Ze=Je.d,$e=Object(Je.e)(We,Ze(Je.a.apply(void 0,Xe)));t(82);o.a.render(Object(r.jsx)(s.a,{store:$e,children:Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Be,{})})}),document.getElementById("root")),Ve()}},[[83,1,2]]]);
//# sourceMappingURL=main.4d6e589b.chunk.js.map