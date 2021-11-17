(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(9),s=n.n(r),c=n(1),a=n.n(c),o=n(3),i=n(10),l=n(4),u=n(5),d=n(7),h=n(6),p=n(2),j=n.n(p),b=(n(16),n(17),n(18),n(0)),m=function(e){var t=e.todos,n=e.handleUserSelect,r=e.title,s=e.onInputChange,c=e.completed;return Object(b.jsxs)("div",{className:"TodoList",children:[Object(b.jsx)("p",{children:"Filter Todos"}),Object(b.jsxs)("form",{action:"Post",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("label",{htmlFor:"title",children:["Title:"," ",Object(b.jsx)("input",{className:"input",name:"title",type:"text",value:r,onChange:s})]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("label",{htmlFor:"title",children:["Completion:"," ",Object(b.jsxs)("select",{name:"completed",value:c,onChange:s,children:[Object(b.jsx)("option",{value:"not selected",children:"not selected"}),Object(b.jsx)("option",{value:"completed",children:"completed"}),Object(b.jsx)("option",{value:"not completed",children:"not completed"})]})]})})]}),Object(b.jsx)("h2",{children:"Todos:"}),Object(b.jsx)("div",{className:"TodoList__list-container",children:Object(b.jsx)("ul",{className:"TodoList__list",children:t.length>0&&t.map((function(e){return Object(b.jsxs)("li",{className:e.completed?"TodoList__item checked":"TodoList__item unchecked",children:[Object(b.jsxs)("label",{htmlFor:"completion",children:[Object(b.jsx)("input",{name:"completion",type:"checkbox",readOnly:!0,checked:e.completed}),Object(b.jsx)("p",{children:e.title})]}),Object(b.jsxs)("button",{onClick:function(){return n(e.userId)},className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",children:["User\xa0",e.userId]})]},e.id)}))})})]})},f=(n(20),function(){var e=Object(o.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://mate.academy/students-api/todos");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("".concat(t.status," - ").concat(t.statusText));case 6:return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:throw e.prev=12,e.t0=e.catch(0),new Error("Error ocured because of this ".concat(e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}()),x=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate.academy/students-api/users/","/").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={user:{},showErrorMessage:!1},e.handleClearButton=function(){e.setState({user:void 0})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadData()}},{key:"loadData",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(this.props.userId);case 3:t=e.sent,this.setState({user:t,showErrorMessage:!1}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),this.handleClearButton(),this.setState({showErrorMessage:!0});case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.user;return Object(b.jsxs)("div",{children:[e&&Object(b.jsxs)("div",{className:"CurrentUser",children:[Object(b.jsx)("h2",{className:"CurrentUser__title",children:Object(b.jsxs)("span",{children:["Selected user:",e.id]})}),Object(b.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(b.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(b.jsx)("p",{className:"CurrentUser__phone",children:e.phone}),Object(b.jsx)("button",{type:"button",onClick:this.handleClearButton,children:"Clear"})]}),this.state.showErrorMessage?Object(b.jsx)("h1",{children:"Error ocured while loading user' info"}):null]})}}]),n}(j.a.Component),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={selectedUserId:0,todos:[],title:"",completed:"not selected"},e.onUserSelect=function(t){e.setState({selectedUserId:t})},e.handleInputChange=function(t){var n=t.target,r=n.name,s=n.value;e.setState(Object(i.a)({},r,s))},e.prepareTodos=function(){var t=e.state,n=t.todos,r=t.title,s=t.completed;return n.filter((function(e){return r?e.title.toLowerCase().includes(r.toLowerCase()):"completed"===s?e.completed:"not completed"===s?!e.completed:e}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,n=e.title,r=e.completed,s=this.prepareTodos();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"App__sidebar",children:this.state.todos.length>0&&Object(b.jsx)(m,{title:n,completed:r,handleUserSelect:this.onUserSelect,todos:s,onInputChange:this.handleInputChange})}),Object(b.jsx)("div",{className:"App__content",children:Object(b.jsx)("div",{className:"App__content-container",children:t?Object(b.jsx)(v,{userId:t}):"No user selected"})})]})}}]),n}(j.a.Component),_=O;s.a.render(Object(b.jsx)(_,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.3fabd9ae.chunk.js.map