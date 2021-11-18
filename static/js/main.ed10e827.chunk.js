(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(11),s=n.n(r),c=n(1),a=n.n(c),o=n(3),i=n(4),l=n(10),u=n(5),d=n(6),h=n(8),p=n(7),j=n(2),b=n.n(j),m=(n(17),n(18),n(19),n(0)),f=function(e){var t=e.todos,n=e.handleUserSelect,r=e.title,s=e.onInputChange,c=e.completed;return Object(m.jsxs)("div",{className:"TodoList",children:[Object(m.jsx)("p",{children:"Filter Todos"}),Object(m.jsxs)("form",{action:"Post",children:[Object(m.jsx)("div",{children:Object(m.jsxs)("label",{htmlFor:"title",children:["Title:"," ",Object(m.jsx)("input",{className:"input",name:"title",type:"text",value:r,onChange:s})]})}),Object(m.jsx)("div",{children:Object(m.jsxs)("label",{htmlFor:"title",children:["Completion:"," ",Object(m.jsxs)("select",{name:"completed",value:c,onChange:s,children:[Object(m.jsx)("option",{value:"not selected",children:"not selected"}),Object(m.jsx)("option",{value:"completed",children:"completed"}),Object(m.jsx)("option",{value:"not completed",children:"not completed"})]})]})})]}),Object(m.jsx)("h2",{children:"Todos:"}),Object(m.jsx)("div",{className:"TodoList__list-container",children:Object(m.jsx)("ul",{className:"TodoList__list",children:t.length>0&&t.map((function(e){return Object(m.jsxs)("li",{className:e.completed?"TodoList__item checked":"TodoList__item unchecked",children:[Object(m.jsxs)("label",{htmlFor:"completion",children:[Object(m.jsx)("input",{name:"completion",type:"checkbox",readOnly:!0,checked:e.completed}),Object(m.jsx)("p",{children:e.title})]}),Object(m.jsxs)("button",{onClick:function(){return n(e.userId)},className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",children:["User\xa0",e.userId]})]},e.id)}))})})]})},x=(n(21),function(){var e=Object(o.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://mate.academy/students-api/todos");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("".concat(t.status," - ").concat(t.statusText));case 6:return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:throw e.prev=12,e.t0=e.catch(0),new Error("Error ocured because of this ".concat(e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}()),O=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate.academy/students-api/users/","/").concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={user:{},showErrorMessage:!1},e.handleClearButton=function(){e.setState({user:null}),(0,e.props.clearUser)()},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadData()}},{key:"loadData",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(this.props.userId);case 3:t=e.sent,this.setState({user:t,showErrorMessage:!1}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),this.handleClearButton(),this.setState({showErrorMessage:!0});case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.user;return Object(m.jsxs)("div",{children:[e&&Object(m.jsxs)("div",{className:"CurrentUser",children:[Object(m.jsx)("h2",{className:"CurrentUser__title",children:Object(m.jsxs)("span",{children:["Selected user:",e.id]})}),Object(m.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(m.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(m.jsx)("p",{className:"CurrentUser__phone",children:e.phone}),Object(m.jsx)("button",{type:"button",onClick:this.handleClearButton,children:"Clear"})]}),this.state.showErrorMessage?Object(m.jsx)("h1",{children:"Error ocured while loading user' info"}):null]})}}]),n}(b.a.Component),_=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={selectedUserId:0,todos:[],title:"",completed:"not selected"},e.onUserSelect=function(t){e.setState({selectedUserId:t})},e.handleInputChange=function(t){var n=t.target,r=n.name,s=n.value;e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(i.a)({},r,s))}))},e.handleClearUser=function(){e.setState({selectedUserId:0})},e.prepareTodos=function(){var t=e.state,n=t.todos,r=t.title,s=t.completed;return n.filter((function(e){return r?e.title.toLowerCase().includes(r.toLowerCase()):"completed"===s?e.completed:"not completed"===s?!e.completed:e}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,n=e.title,r=e.completed,s=this.prepareTodos();return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"App__sidebar",children:this.state.todos.length>0&&Object(m.jsx)(f,{title:n,completed:r,handleUserSelect:this.onUserSelect,todos:s,onInputChange:this.handleInputChange})}),Object(m.jsx)("div",{className:"App__content",children:Object(m.jsx)("div",{className:"App__content-container",children:t?Object(m.jsx)(v,{clearUser:this.handleClearUser,userId:t}):"No user selected"})})]})}}]),n}(b.a.Component),w=_;s.a.render(Object(m.jsx)(w,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ed10e827.chunk.js.map