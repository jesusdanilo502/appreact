(this["webpackJsonpcurso-intro-react"]=this["webpackJsonpcurso-intro-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),c=n(4),a=n.n(c),l=n(6),i=n(2);var s=n(0),u=r.a.createContext();function d(e){var t=function(e,t){var n=r.a.useState(!0),o=Object(i.a)(n,2),c=o[0],a=o[1],l=r.a.useState(!1),s=Object(i.a)(l,2),u=s[0],d=s[1],j=r.a.useState(t),f=Object(i.a)(j,2),b=f[0],p=f[1];return r.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),p(n),a(!1)}catch(u){p(u)}}),3e3)})),{item:b,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),p(t)}catch(u){d(u)}},loading:c,error:u}}("TODOS_V1",[]),n=t.item,o=t.saveItem,c=t.loading,a=t.error,d=r.a.useState(""),j=Object(i.a)(d,2),f=j[0],b=j[1],p=r.a.useState(!1),O=Object(i.a)(p,2),m=O[0],x=O[1],v=n.filter((function(e){return!!e.completed})).length,h=n.length,g=[];g=!f.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=f.toLowerCase();return t.includes(n)}));return Object(s.jsx)(u.Provider,{value:{loading:c,error:a,totalTodos:h,completedTodos:v,searchValue:f,setSearchValue:b,searchedTodos:g,completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),r=Object(l.a)(n);r[t].completed=!0,o(r)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),r=Object(l.a)(n);r.splice(t,1),o(r)},addTodo:function(e){var t=Object(l.a)(n);t.push({completed:!1,text:e}),o(t)},openModal:m,setOpenModal:x},children:e.children})}n(8);function j(){var e=r.a.useContext(u),t=e.totalTodos,n=e.completedTodos;return Object(s.jsxs)("h2",{className:"TodoCounter",children:[" Item ",n," de ",t]})}n(14);function f(){var e=r.a.useContext(u),t=e.searchValue,n=e.setSearchValue;return Object(s.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}n(15);function b(e){return Object(s.jsx)("section",{children:Object(s.jsx)("ul",{children:e.children})})}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createElement("path",{d:"M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"});function x(e,t){var n=e.title,r=e.titleId,c=O(e,["title","titleId"]);return o.createElement("svg",p({viewBox:"0 0 405.272 405.272",xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,m)}var v=o.forwardRef(x);n.p;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=o.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"});function T(e,t){var n=e.title,r=e.titleId,c=g(e,["title","titleId"]);return o.createElement("svg",h({viewBox:"0 0 348.333 348.334",xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,y)}var C=o.forwardRef(T);n.p;n.p,n(16);var I={check:function(e){return Object(s.jsx)(v,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return Object(s.jsx)(C,{className:"Icon-svg Icon-svg--delete",fill:e})},list:function(e){}};function S(e){var t=e.type,n=e.color,o=void 0===n?"gray":n,r=e.onClick;return Object(s.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:r,children:I[t](o)})}function N(e){var t=e.type,n=e.color,o=void 0===n?"red":n;return Object(s.jsx)("span",{className:"Icon-container Icon-container--".concat(t),children:I[t](o)})}function w(e){var t=e.completed,n=e.onComplete;return Object(s.jsx)(S,{type:"check",color:t?"#4caf50":"gray",onClick:n})}function k(e){var t=e.onDelete;return Object(s.jsx)(S,{type:"delete",onClick:t})}n(17);function L(e){return Object(s.jsxs)("li",{className:"TodoItem",children:[Object(s.jsx)(w,{completed:e.completed,onComplete:e.onComplete}),Object(s.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(s.jsx)(k,{onDelete:e.onDelete})]})}n(18);function E(e){return Object(s.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(19);function M(e){var t=e.children;return a.a.createPortal(Object(s.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(20);function P(){var e=r.a.useState(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=r.a.useContext(u),a=c.addTodo,l=c.setOpenModal;return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(n),l(!1)},children:[Object(s.jsx)("label",{children:"Escribe tu nuevo To Do"}),Object(s.jsx)("textarea",{value:n,onChange:function(e){o(e.target.value)},placeholder:"Escribe una nueva tarea"}),Object(s.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(s.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button-cancel",onClick:function(){l(!1)},children:"Cancelar"}),Object(s.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",children:"A\xf1adir"})]})]})}function D(e){e.error;return Object(s.jsx)("p",{children:"Hubo un error"})}n(21);function B(){return Object(s.jsxs)("div",{className:"LoadingTodo-container",children:[Object(s.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(s.jsx)("p",{className:"LoadingTodo-text",children:"Cargando Item"}),Object(s.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function F(){return Object(s.jsx)("p",{children:" crea tu propio todo"})}function J(e){e.completed;return Object(s.jsx)(N,{type:"list",color:"gray"})}function V(e){var t=r.a.useContext(u),n=t.totalTodos;t.completedTodos;return Object(s.jsxs)("h1",{className:"Title",children:["Carrito de Compra  ",n,Object(s.jsx)(J,{completed:e.completed})]})}function z(){var e=r.a.useContext(u),t=e.error,n=e.loading,o=e.searchedTodos,c=e.completeTodo,a=e.deleteTodo,l=e.openModal,i=e.setOpenModal;return Object(s.jsxs)(r.a.Fragment,{children:[Object(s.jsx)(V,{}),Object(s.jsx)(j,{}),Object(s.jsx)(f,{}),Object(s.jsxs)(b,{children:[t&&Object(s.jsx)(D,{error:t}),n&&new Array(4).fill().map((function(e,t){return Object(s.jsx)(B,{},t)})),!n&&!o.length&&Object(s.jsx)(F,{}),o.map((function(e){return Object(s.jsx)(L,{text:e.text,completed:e.completed,onComplete:function(){return c(e.text)},onDelete:function(){return a(e.text)}},e.text)}))]}),!!l&&Object(s.jsx)(M,{children:Object(s.jsx)(P,{})}),Object(s.jsx)(E,{setOpenModal:i})]})}var A=function(){return Object(s.jsx)(d,{children:Object(s.jsx)(z,{})})};n(22);a.a.render(Object(s.jsx)(A,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.f5d683c7.chunk.js.map