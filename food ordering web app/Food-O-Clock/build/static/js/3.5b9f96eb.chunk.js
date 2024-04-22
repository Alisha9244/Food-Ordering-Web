(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{43:function(e,t,c){e.exports={backdrop:"Modal_backdrop__19EqC",modal:"Modal_modal__2bbZk","slide-down":"Modal_slide-down__BlhRH"}},44:function(e,t,c){e.exports={"cart-items":"Cart_cart-items__vVNLg",total:"Cart_total__2f3sM",actions:"Cart_actions__3eF3B","button--alt":"Cart_button--alt__180Ng",button:"Cart_button__2WRIe"}},45:function(e,t,c){e.exports={"cart-item":"CartItem_cart-item__3ADxX",summary:"CartItem_summary__8yU40",price:"CartItem_price__36efH",amount:"CartItem_amount__ANTDh",actions:"CartItem_actions__26b7Y"}},46:function(e,t,c){e.exports={form:"Checkout_form__2yU7Z",control:"Checkout_control__3VdHg",actions:"Checkout_actions__1PLOe",submit:"Checkout_submit__dlt1Q",invalid:"Checkout_invalid__3gsXk"}},47:function(e,t,c){"use strict";c.r(t);var a=c(14),n=c.n(a),s=c(19),r=c(4),o=c(3),i=c(1),l=c.n(i),d=c(18),j=c.n(d),u=c(43),b=c.n(u),m=c(0),O=function(e){return Object(m.jsx)("div",{className:b.a.backdrop,onClick:e.onCloseCart})},h=function(e){return Object(m.jsx)("div",{className:b.a.modal,children:Object(m.jsx)("div",{className:b.a.content,children:e.children})})},x=document.getElementById("overlays"),p=function(e){return Object(m.jsxs)(i.Fragment,{children:[j.a.createPortal(Object(m.jsx)(O,{onCloseCart:e.onCloseCart}),x),j.a.createPortal(Object(m.jsx)(h,{children:e.children}),x)]})},C=c(44),_=c.n(C),f=c(5),v=c(45),N=c.n(v),y=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:N.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:N.a.summary,children:[Object(m.jsx)("span",{className:N.a.price,children:t}),Object(m.jsxs)("span",{className:N.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:N.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},k=c(46),g=c.n(k),F=function(e){return""===e.trim()},I=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),c=Object(o.a)(t,2),a=c[0],n=c[1],s=Object(i.useRef)(),r=Object(i.useRef)(),l=Object(i.useRef)(),d=Object(i.useRef)(),j="".concat(g.a.control," ").concat(a.name?"":g.a.invalid),u="".concat(g.a.control," ").concat(a.street?"":g.a.invalid),b="".concat(g.a.control," ").concat(a.postalCode?"":g.a.invalid),O="".concat(g.a.control," ").concat(a.city?"":g.a.invalid);return Object(m.jsxs)("form",{className:g.a.form,onSubmit:function(t){t.preventDefault();var c=s.current.value,a=r.current.value,o=l.current.value,i=d.current.value,j=!F(c),u=!F(a),b=!F(i),m=6===o.trim().length;n({name:j,street:u,city:b,postalCode:m}),j&&u&&b&&m&&e.onConfirm({name:c,street:a,city:i,postalCode:o})},children:[Object(m.jsxs)("div",{className:j,children:[Object(m.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(m.jsx)("input",{type:"text",id:"name",ref:s}),!a.name&&Object(m.jsx)("p",{children:"Please enter a valid name!"})]}),Object(m.jsxs)("div",{className:u,children:[Object(m.jsx)("label",{htmlFor:"street",children:"Street"}),Object(m.jsx)("input",{type:"text",id:"street",ref:r}),!a.street&&Object(m.jsx)("p",{children:"Please enter a valid street!"})]}),Object(m.jsxs)("div",{className:b,children:[Object(m.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(m.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postalCode&&Object(m.jsx)("p",{children:"Please enter a valid postal code (6 characters long)!"})]}),Object(m.jsxs)("div",{className:O,children:[Object(m.jsx)("label",{htmlFor:"city",children:"City"}),Object(m.jsx)("input",{type:"text",id:"city",ref:d}),!a.city&&Object(m.jsx)("p",{children:"Please enter a valid city!"})]}),Object(m.jsxs)("div",{className:g.a.actions,children:[Object(m.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(m.jsx)("button",{className:g.a.submit,children:"Confirm"})]})]})};t.default=function(e){var t=Object(i.useState)(!1),c=Object(o.a)(t,2),a=c[0],d=c[1],j=Object(i.useState)(!1),u=Object(o.a)(j,2),b=u[0],O=u[1],h=Object(i.useState)(!1),x=Object(o.a)(h,2),C=x[0],v=x[1],N=Object(i.useContext)(f.a),k="$".concat(N.totalAmount.toFixed(2)),g=N.items.length>0,F=function(e){N.removeItem(e)},S=function(e){N.addItem(Object(r.a)(Object(r.a)({},e),{},{amount:1}))},P=function(){var e=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fetch("https://react-http-4e5dc-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:N.items})});case 3:O(!1),v(!0),N.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=Object(m.jsx)("ul",{className:_.a["cart-items"],children:N.items.map((function(e){return Object(m.jsx)(y,{name:e.name,amount:e.amount,price:e.price,onRemove:F.bind(null,e.id),onAdd:S.bind(null,e)},e.id)}))}),w=Object(m.jsxs)("div",{className:_.a.actions,children:[Object(m.jsx)("button",{className:_.a["button--alt"],onClick:e.onCloseCart,children:"Close"}),g&&Object(m.jsx)("button",{className:_.a.button,onClick:function(){d(!0)},children:"Order"})]}),A=Object(m.jsxs)(l.a.Fragment,{children:[R,Object(m.jsxs)("div",{className:_.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:k})]}),a&&Object(m.jsx)(I,{onConfirm:P,onCancel:e.onCloseCart}),!a&&w]}),M=Object(m.jsx)("p",{children:"Sending order data..."}),B=Object(m.jsxs)(l.a.Fragment,{children:[Object(m.jsx)("p",{children:"Successfully sent the order!"}),Object(m.jsx)("div",{className:_.a.actions,children:Object(m.jsx)("button",{className:_.a.button,onClick:e.onCloseCart,children:"Close"})})]});return Object(m.jsxs)(p,{onCloseCart:e.onCloseCart,children:[!b&&!C&&A,b&&M,!b&&C&&B]})}}}]);
//# sourceMappingURL=3.5b9f96eb.chunk.js.map