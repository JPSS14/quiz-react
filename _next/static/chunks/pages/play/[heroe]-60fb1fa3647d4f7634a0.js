_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"20a2":function(e,t,n){e.exports=n("nOHt")},GEMt:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/play/[heroe]",function(){return n("yYqx")}])},IfUh:function(e,t,n){e.exports={mainContainer:"Heroe_mainContainer__2qomV",mainQuestion:"Heroe_mainQuestion__2VLxK",background:"Heroe_background__1bg2D",heroeSelected:"Heroe_heroeSelected__3zDJh",heroeSelectedImg:"Heroe_heroeSelectedImg__1BFWO",option:"Heroe_option__2uV-K",buttonCorrection:"Heroe_buttonCorrection__1n6jZ",buttonCancel:"Heroe_buttonCancel__39ykV",buttonStart:"Heroe_buttonStart__3ETQ6",certo:"Heroe_certo__2uVF-",errado:"Heroe_errado__2AaNU"}},YCxv:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("nKUr"),i=n("20a2"),c=n("iQSY"),r=n.n(c),o=n("IfUh"),s=n.n(o),l=n("q1tI"),j=n("w1Jn");function u(){var e=Object(i.useRouter)(),t=Object(l.useContext)(j.a),n=t.isActive,c=t.start,r=t.startNewQuestion,o=t.option,u=t.corrigirTreino,d=t.corrigir;return Object(a.jsx)(a.Fragment,{children:n&&"/training/[heroe]"===e.pathname?Object(a.jsxs)("div",{className:s.a.option,children:[Object(a.jsx)("button",{className:s.a.buttonCorrection,onClick:function(){u()},children:"Corrigir"}),Object(a.jsx)("button",{className:s.a.buttonCancel,onClick:c,children:"Desistir"})]}):n&&"/play/[heroe]"===e.pathname?Object(a.jsxs)("div",{className:s.a.option,children:[Object(a.jsx)("button",{className:s.a.buttonCorrection,onClick:function(){d()},children:"Corrigir"}),Object(a.jsx)("button",{className:s.a.buttonCancel,onClick:c,children:"Desistir"})]}):Object(a.jsx)("button",{id:"startButton",className:s.a.buttonStart,onClick:function(){c(),r(e.query.heroe),console.log(o)},children:"Iniciar Quiz!"})})}function d(){var e=Object(l.useContext)(j.a).activeCorrection;return Object(a.jsx)(a.Fragment,{children:"Certo"===e?Object(a.jsx)("div",{className:s.a.certo,children:Object(a.jsx)("p",{children:"Correto"})}):"Errado"===e?Object(a.jsx)("div",{className:s.a.errado,children:Object(a.jsx)("p",{children:"Errado"})}):Object(a.jsx)(a.Fragment,{})})}function v(e){var t=e.activeAlternative1,n=e.activeAlternative2,i=e.activeAlternative3,c=e.activeAlternative4,r=Object(l.useContext)(j.a),o=r.isActive,u=r.muda,d=Object(l.useState)(""),v=d[0],b=d[1];return Object(l.useEffect)((function(){u(v)}),[v]),Object(a.jsx)("div",{className:s.a.mainQuestion,children:o?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:t,checked:v===t,value:t,onChange:function(e){b(e.target.value)}}),Object(a.jsx)("label",{htmlFor:t,children:t})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:n,checked:v===n,value:n,onChange:function(e){b(e.target.value)}}),Object(a.jsx)("label",{htmlFor:n,children:n})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:i,checked:v===i,value:i,onChange:function(e){b(e.target.value)}}),Object(a.jsx)("label",{htmlFor:i,children:i})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:c,checked:v===c,value:c,onChange:function(e){b(e.target.value)}}),Object(a.jsx)("label",{htmlFor:c,children:c})]})]}):Object(a.jsx)("div",{className:s.a.mainQuestion})})}function b(){var e=Object(i.useRouter)(),t="".concat("/quiz-react","/c-").concat(e.query.heroe,"-dif.png"),n=Object(l.useContext)(j.a),c=n.isActive,r=n.option,o=n.activeQuestion;return Object(a.jsx)(a.Fragment,{children:c&&1===r?Object(a.jsxs)("div",{className:s.a.mainQuestion,children:[Object(a.jsx)("p",{children:o.question}),Object(a.jsx)(v,{activeAlternative1:o.answer,activeAlternative2:o.alternative1,activeAlternative3:o.alternative2,activeAlternative4:o.alternative3})]}):c&&2===r?Object(a.jsxs)("div",{className:s.a.mainQuestion,children:[Object(a.jsx)("p",{children:o.question}),Object(a.jsx)(v,{activeAlternative1:o.alternative1,activeAlternative2:o.answer,activeAlternative3:o.alternative2,activeAlternative4:o.alternative3})]}):c&&3===r?Object(a.jsxs)("div",{className:s.a.mainQuestion,children:[Object(a.jsx)("p",{children:o.question}),Object(a.jsx)(v,{activeAlternative1:o.alternative1,activeAlternative2:o.alternative2,activeAlternative3:o.answer,activeAlternative4:o.alternative3})]}):c&&4===r?Object(a.jsxs)("div",{className:s.a.mainQuestion,children:[Object(a.jsx)("p",{children:o.question}),Object(a.jsx)(v,{activeAlternative1:o.alternative1,activeAlternative2:o.alternative2,activeAlternative3:o.alternative3,activeAlternative4:o.answer})]}):Object(a.jsx)("div",{className:s.a.heroeSelected,children:Object(a.jsx)("div",{className:s.a.heroeSelectedImg,children:Object(a.jsx)("img",{src:t,alt:t})})})})}function h(){var e=Object(i.useRouter)(),t=Object(l.useContext)(j.a),n=t.isActive,c=t.start;return Object(l.useEffect)((function(){!0===n&&c()}),[]),Object(a.jsxs)("main",{className:r.a.main,children:[Object(a.jsx)("div",{className:r.a.mainTitle,children:Object(a.jsx)("h1",{children:"Responda"})}),Object(a.jsxs)("div",{className:s.a.mainContainer,children:[Object(a.jsx)(b,{}),Object(a.jsx)("div",{className:s.a.background,children:Object(a.jsx)("img",{src:"".concat("/quiz-react","/").concat(e.query.heroe,"-back.jpg"),alt:"".concat(e.query.heroe)})})]}),Object(a.jsx)(u,{}),Object(a.jsx)(d,{})]})}},iQSY:function(e,t,n){e.exports={main:"main_main__9OvF0",mainTitle:"main_mainTitle__26jc4",mainContent:"main_mainContent__2T6_s",dsNone:"main_dsNone__2W6nG",xp:"main_xp__30Yvq"}},yYqx:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n("nKUr"),i=n("YCxv");function c(){return Object(a.jsx)(i.a,{})}}},[["GEMt",0,2,1,3]]]);