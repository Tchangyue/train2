(this.webpackJsonpshopc=this.webpackJsonpshopc||[]).push([[0],{150:function(e,t,a){},235:function(e){e.exports=JSON.parse('[{"id":0,"sku":8552515751438644,"title":"Cat Tee Black T-Shirt","description":"14/15 s/n\xba","availableSizes":["S","L","XL","XXL"],"style":"Branco com listras pretas","price":10.9,"installments":9,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":1,"sku":18644119330491310,"title":"Sphynx Tie Dye Grey T-Shirt","description":"14/15 s/n\xba","availableSizes":["S","L","XL","XXL"],"style":"Preta com listras brancas","price":10.9,"installments":9,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":2,"sku":11854078013954528,"title":"Danger Knife Grey","description":"14/15 s/n\xba","availableSizes":["S","L"],"style":"Branco com listras pretas","price":14.9,"installments":7,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":3,"sku":876661122392077,"title":"White DGK Script Tee","description":"2014 s/n\xba","availableSizes":["S","L"],"style":"Preto com listras brancas","price":14.9,"installments":7,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":4,"sku":9197907543445676,"title":"Born On The Streets","description":"14/15 s/n\xba - Jogador","availableSizes":["XL"],"style":"Branco com listras pretas","price":25.9,"installments":12,"currencyId":"USD","currencyFormat":"$","isFreeShipping":false},{"id":5,"sku":10547961582846888,"title":"Tso 3D Short Sleeve T-Shirt A","description":"14/15 + Camiseta 1\xba Mundial","availableSizes":["S","L","XL"],"style":"Preto","price":10.9,"installments":9,"currencyId":"USD","currencyFormat":"$","isFreeShipping":false},{"id":6,"sku":6090484789343891,"title":"Man Tie Dye Cinza Grey T-Shirt","description":"Goleiro 13/14","availableSizes":["XL","XXL"],"style":"Branco","price":49.9,"installments":4,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":7,"sku":18532669286405344,"title":"Crazy Monkey Black T-Shirt","description":"1977 Infantil","availableSizes":["S"],"style":"Preto com listras brancas","price":22.5,"installments":4,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":8,"sku":5619496040738316,"title":"Tso 3D Black T-Shirt","description":"","availableSizes":["XL"],"style":"Azul escuro","price":18.7,"installments":4,"currencyId":"USD","currencyFormat":"$","isFreeShipping":false},{"id":9,"sku":11600983276356164,"title":"Crazy Monkey Grey","description":"","availableSizes":["L","XL"],"style":"","price":134.9,"installments":5,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":10,"sku":27250082398145996,"title":"On The Streets Black T-Shirt","description":"","availableSizes":["L","XL"],"style":"","price":49,"installments":9,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":11,"sku":39876704341265610,"title":"Wine Skul T-Shirt","description":"","availableSizes":["S","L"],"style":"Wine","price":13.25,"installments":3,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":12,"sku":12064273040195392,"title":"Cat Tee Black T-Shirt","description":"4 MSL","availableSizes":["S","XXL"],"style":"Black with custom print","price":10.9,"installments":9,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":13,"sku":51498472915966370,"title":"Dark Thug Blue-Navy T-Shirt","description":"","availableSizes":["M"],"style":"Front print and paisley print","price":29.45,"installments":5,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":14,"sku":10686354557628304,"title":"Sphynx Tie Dye Wine T-Shirt","description":"GPX Poly 1","availableSizes":["S","L","XL"],"style":"Front tie dye print","price":9,"installments":3,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":15,"sku":11033926921508488,"title":"Skuul","description":"Treino 2014","availableSizes":["S","L","XL","XXL"],"style":"Black T-Shirt with front print","price":14,"installments":5,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true}]')},289:function(e,t){},412:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(59),c=a.n(n),i=a(0),s=a(87),o=(a(198),a(107)),l=a(423),u=a(422),d=a(418),p=a(419),j=a(425),b=(a(150),Object(n.connect)((function(e){return{cart:e.cart.data}}))((function(e){var t=e.cart,a=e.dispatch,n=Object(i.useState)(!1),c=Object(o.a)(n,2),s=c[0],b=c[1],y=Object(i.useState)(!0),h=Object(o.a)(y,2),m=h[0],f=h[1],S=t.reduce((function(e,t){return e+t.product.price*t.quantity}),0).toFixed(2);return Object(i.useEffect)((function(){window.localStorage.data&&a({type:"cart/setStorage"})}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("button",{className:"cartBtn",onClick:function(){b(!0)},children:[Object(r.jsx)(j.a,{}),Object(r.jsx)("span",{className:"showCount",children:t.length})]}),Object(r.jsx)("div",{className:"cartDiv",children:Object(r.jsx)(l.a,{title:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:s?"countCart":"",children:t.length}),Object(r.jsxs)("span",{className:"titleCart",children:[Object(r.jsx)(j.a,{}),"Cart"]})]}),placement:"right",closable:!1,onClose:function(){b(!1)},visible:s,width:"35%",footer:Object(r.jsxs)("div",{style:{height:"100px",position:"relative"},children:[Object(r.jsx)("span",{className:"totalTitle",children:"Total: "}),Object(r.jsxs)("span",{className:"totalNum",children:["$ ",S]}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){if(m)return u.b.warn("\u5408\u8ba1".concat(S,",\u518d\u6b21\u70b9\u51fb\u5373\u53ef\u7ed3\u7b97")),void f(!1);a({type:"cart/checkout"}),f(!0)},disabled:0===t.length,className:"checkBtn",children:"Check Out"})]}),headerStyle:{textAlign:"center",backgroundColor:"#1b1a20"},bodyStyle:{backgroundColor:"#1b1a20"},footerStyle:{backgroundColor:"#1b1a20",color:"#fff"},children:0===t.length?Object(r.jsx)("h1",{style:{color:"#fff"},children:"Your Shopping-Cart is empty!"}):Object(r.jsx)("div",{children:Object(r.jsx)(d.b,{itemLayout:"horizontal",dataSource:t,renderItem:function(e,t){return Object(r.jsxs)(d.b.Item,{children:[Object(r.jsx)(p.a,{src:"./img/".concat(e.product.sku,"_1.jpg"),className:"cartImg"}),Object(r.jsxs)("div",{className:"detail",children:[e.product.title,Object(r.jsx)("br",{}),Object(r.jsxs)("span",{children:[e.size," | ",e.product.description]}),Object(r.jsx)("br",{}),Object(r.jsxs)("span",{children:["quantity: ",e.quantity]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"btnDel",onClick:function(){a({type:"cart/removeCart",payload:{index:t,quantity:e.quantity}})},children:"X"}),Object(r.jsxs)("p",{className:"goodsPrice",children:["$",e.product.price]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("button",{className:"btnDecrement",onClick:function(){a({type:"cart/decreaseNum",payload:{id:e.id,size:e.size,key:-1}})},children:"-"}),Object(r.jsx)("button",{className:"btnIncrement",onClick:function(){a({type:"cart/increaseNum",payload:{id:e.id,size:e.size,key:1}})},children:"+"})]})]})]},e.sku)}})})})})]})}))),y=a(19),h=a.n(y),m=a(105),f=a(417),S=a(49),O=a(424),x=a(421),v=a(226),g=a(420),k=a(426),w=g.a.SubMenu,z=Object(n.connect)((function(e){var t=e.products;return{products:t.data,staticData:t.shopData}}))((function(e){var t=e.dispatch,a=e.products,n=e.staticData,c=function(){var e=Object(m.a)(h.a.mark((function e(r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({type:"products/sortDatas",payload:{product:a,key:r,bol:!1}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(m.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({type:"products/sortDatas",payload:{product:n,key:a,bol:!0}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsxs)("span",{className:"headerLeft",children:[Object(r.jsx)("span",{style:{color:"red",fontWeight:"500"},children:a.length})," Products found"]}),Object(r.jsx)("span",{className:"headerRight",children:Object(r.jsxs)(g.a,{theme:"light",mode:"horizontal",children:[Object(r.jsx)(w,{title:"Specified Size",style:{color:"#000",fontSize:"18px"},children:["S","M","L","XL","XXL"].map((function(e){return Object(r.jsx)(g.a.Item,{onClick:function(){return i("".concat(e))},children:e},e+"*")}))}),Object(r.jsxs)(w,{icon:Object(r.jsx)(k.a,{}),style:{color:"#000",fontSize:"18px"},title:"Order by",children:[Object(r.jsx)(g.a.Item,{onClick:function(){return c("")},children:"\u9ed8\u8ba4"},"setting:1"),Object(r.jsx)(g.a.Item,{onClick:function(){return c("asc")},children:"\u4ef7\u683c\u5347\u5e8f"},"setting:2"),Object(r.jsx)(g.a.Item,{onClick:function(){return c("desc")},children:"\u4ef7\u683c\u964d\u5e8f"},"setting:3")]})]})})]})})),D=a(46),F=a(55),N={namespace:"cart",state:{data:[]},effects:{addCart:h.a.mark((function e(t,a){var r,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.put,e.next=4,n({type:"products/addCart",payload:r});case 4:return e.next=6,n({type:"saveItem",payload:r});case 6:case"end":return e.stop()}}),e)})),setStorage:h.a.mark((function e(t,a){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.payload,r=a.put,e.next=4,r({type:"storageData",cdata:{_data:JSON.parse(window.localStorage.data)}});case 4:case"end":return e.stop()}}),e)})),settlementData:h.a.mark((function e(t,a){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.payload,r=a.put,e.next=4,r({type:"settlement"});case 4:case"end":return e.stop()}}),e)})),decreaseNum:h.a.mark((function e(t,a){var r,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.put,e.next=4,n({type:"cutOne",payload:r});case 4:return e.next=6,n({type:"products/addOne",payload:r});case 6:case"end":return e.stop()}}),e)})),increaseNum:h.a.mark((function e(t,a){var r,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.put,e.next=4,n({type:"increment",payload:r});case 4:case"end":return e.stop()}}),e)})),removeCart:h.a.mark((function e(t,a){var r,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.put,e.next=4,n({type:"removeGood",payload:r});case 4:case"end":return e.stop()}}),e)}))},reducers:{saveItem:function(e,t){var a=t.payload,r=e.data,n=[],c=r.find((function(e){return e.product_id===a.product_id&&e.size===a.size}));c?(c.quantity+=a.quantity,n=r.map((function(e){return e.product_id===c.product_id&&e.size===c.size?c:e}))):n=[].concat(Object(F.a)(r),[a]);var i=window.localStorage,s=JSON.stringify(r);return i.setItem("data",s),{data:n}},removeGood:function(e,t){var a=t.payload,r=e.data;r[a.index].product.installments+=a.quantity,r.splice(a.index,1),console.log(r);var n=window.localStorage,c=JSON.stringify(r);return n.setItem("data",c),Object(D.a)(Object(D.a)({},e),{},{data:Object(F.a)(r)})},increment:function(e,t){var a=t.payload,r=e.data,n=r.findIndex((function(e){return e.id===a.id&&e.size===a.size}));0===r[n].product.installments?u.b.error("\u5e93\u5b58\u4e0d\u8db3"):(r[n].quantity+=a.key,r[n].product.installments-=a.key);var c=window.localStorage,i=JSON.stringify(r);return c.setItem("data",i),{data:Object(F.a)(r)}},storageData:function(e,t){return{data:t.cdata._data}},settlement:function(e,t){var a=t.data,r=window.localStorage,n=JSON.stringify(a);return r.setItem("data",n),Object(D.a)(Object(D.a)({},e),{},{data:a._data})},checkout:function(e){var t=e.data;t.splice(0,t.length);var a=window.localStorage,r=JSON.stringify(t);return a.setItem("data",r),{data:Object(F.a)(t)}},cutOne:function(e,t){var a=t.payload,r=e.data,n=r.findIndex((function(e){return e.id===a.id&&e.size===a.size}));1===r[n].quantity?u.b.error("\u5e93\u5b58\u53ea\u6709\u4e00\u4ef6\u5566\uff0c\u4e0d\u80fd\u518d\u51cf\u4e86"):(r[n].quantity+=a.key,r[n].product.installments-=a.key,console.log(r[n].product.installments));var c=window.localStorage,i=JSON.stringify(r);return c.setItem("data",i),{data:Object(F.a)(r)}}}},I=f.a.Meta,C=Object(n.connect)((function(e){var t=e.products,a=e.cart;return{products:t.data,cartData:a.data}}))((function(e){var t=e.dispatch,a=e.products,n=e.cartData,c=Object(i.useState)(0),s=Object(o.a)(c,2),l=s[0],p=s[1];Object(i.useEffect)((function(){t({type:"products/fetch",payload:{}})}),[n]),Object(i.useEffect)(Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(1);case 2:return e.next=4,t({type:"products/fetch",payload:{page:1}});case 4:return console.log("dispatchs"),window.localStorage.data&&t({type:"cart/setStorage"}),e.next=8,p(0);case 8:case"end":return e.stop()}}),e)}))),[]);var j=(a||[]).map((function(e,a){return Object(r.jsx)(S.a,{xs:20,sm:10,md:7,lg:5,style:{marginTop:"15px"},children:Object(r.jsxs)(f.a,{hoverable:!0,cover:Object(r.jsx)("img",{alt:"ex",src:"./img/".concat(e.sku,"_1.jpg")}),style:{textAlign:"center"},children:[e.isFreeShipping?Object(r.jsx)("div",{style:{position:"relative"},children:Object(r.jsx)("span",{className:"freeShip",children:"Free Shipping"})}):"",Object(r.jsx)(I,{title:e.title}),Object(r.jsx)("span",{className:"contentLine",children:"\u2014\u2014\u2014\u2014"}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"price",children:"$"}),Object(r.jsx)("span",{className:"priceInt",children:e.price-e.price%1}),Object(r.jsx)("span",{className:"priceFloat",children:e.price%1===0?"":"."+e.price.toString().split(".")[1]}),Object(r.jsx)("br",{}),Object(r.jsx)(O.a,{content:Object(r.jsx)(d.b,{size:"small",dataSource:e.availableSizes,renderItem:function(a){return Object(r.jsx)(d.b.Item,{children:Object(r.jsxs)(x.a,{disabled:0===e.installments,onClick:function(){t({type:"cart/addCart",payload:{product_id:e.id,quantity:e.installments>0?1:0,product:e,size:a}}),0===e.installments?u.b.error("\u5e93\u5b58\u4e0d\u8db3"):u.b.success("\u6dfb\u52a0\u6210\u529f")},block:!0,children:[a,console.log(e.installments,"\u5e93\u5b58")]})})}}),title:"\u9009\u62e9\u4f60\u7684\u5c3a\u7801",trigger:"click",children:Object(r.jsx)("button",{disabled:0===e.installments,className:"contentBtn",children:"Add to Car"})})]})},a)}));return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)(z,{}),l?Object(r.jsx)("div",{className:"loading",children:Object(r.jsx)(v.a,{size:"large"})}):j]})}));var L=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b,{}),Object(r.jsx)(s.a,{type:"flex",justify:"space-around",style:{margin:"90px 45px 0"},children:Object(r.jsx)(C,{})})]})},T=a(235),X=function(){return new Promise((function(e){setTimeout((function(){return e(T)}),1e3)}))},$={namespace:"products",state:{data:[],shopData:[]},effects:{fetch:h.a.mark((function e(t,a){var r,n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.payload,r=a.call,n=a.put,e.next=4,r(X);case 4:if(c=e.sent,console.log(c),!c){e.next=13;break}return e.next=9,n({type:"saveData",payload:{res:c}});case 9:return e.next=11,n({type:"saveShopdata",payload:{res:c}});case 11:e.next=14;break;case 13:u.b.error("\u672a\u627e\u5230\u6570\u636e");case 14:case"end":return e.stop()}}),e)})),sortDatas:h.a.mark((function e(t,a){var r,n,c,i,s,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=r.product,c=r.key,i=r.bol,s=a.put,o=[],i?c&&n.forEach((function(e){for(var t=0;t<e.availableSizes.length;t++)e.availableSizes[t]===c&&o.push(e)})):o="asc"===c?n.sort((function(e,t){return e.price-t.price})):"desc"===c?n.sort((function(e,t){return t.price-e.price})):n.sort((function(e,t){return e.id-t.id})),e.next=6,s({type:"setData",data:Object(F.a)(o)});case 6:case"end":return e.stop()}}),e)}))},reducers:{saveData:function(e,t){console.log(t,"12323");var a=t.payload.res;return Object(D.a)(Object(D.a)({},e),{},{data:a})},saveShopdata:function(e,t){var a=t.payload.res;return Object(D.a)(Object(D.a)({},e),{},{shopData:a})},addOne:function(e,t){var a=t.payload,r=e.data,n=JSON.parse(JSON.stringify(r));return n.map((function(e){(e.id=a.product_id)&&++e.installments})),{data:n}},addCart:function(e,t){var a=t.payload;return{data:e.data.map((function(e){return e.id===a.product_id&&e.installments>0?(e.installments--,e):e}))}},setData:function(e,t){return Object(D.a)(Object(D.a)({},e),{},{data:Object(F.a)(t.data)})}}},B=a(236),U=c()({history:Object(B.a)()});U.router((function(){return Object(r.jsx)(L,{})})),U.model($),U.model(N),U.start("#root")}},[[412,1,2]]]);
//# sourceMappingURL=main.774c6b4d.chunk.js.map