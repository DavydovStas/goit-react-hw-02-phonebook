(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(9),r=n.n(c),o=n(8),i=n(3),s=n(4),u=n(6),l=n(5),b=n(1),h=n.n(b),j=n(2),m=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(j.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:"",id:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["Name:",Object(a.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(a.jsxs)("label",{children:["Number:",Object(a.jsx)("input",{type:"text",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(h.a.Component);function d(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:"contact-list",children:e.map((function(t){var e=t.name,c=t.id,r=t.number;return Object(a.jsxs)("li",{className:"contact-item",children:[e,": ",r,Object(a.jsx)("button",{className:"contact-item-button",onClick:function(){return n(c)},children:"delete"})]},c)}))})}function f(t){var e=t.filter,n=t.onChange;return Object(a.jsxs)("div",{className:"filter-section",children:[Object(a.jsx)("p",{className:"filter-title",children:"Find contacts by name"}),Object(a.jsx)("input",{className:"filter-input",type:"text",value:e,onChange:n})]})}var O=n(17),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.formSubmitHandler=function(e){t.state.contacts.map((function(t){return t.name.toLocaleLowerCase()})).includes(e.name)?alert("".concat(e.name," is already in contacts")):t.setState((function(t){return t.contacts.push(Object(o.a)(Object(o.a)({},e),{},{id:Object(O.a)()}))}))},t.chengeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=n.toLocaleLowerCase(),r=e.filter((function(t){return t.name.toLocaleLowerCase().includes(c)}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(m,{onSubmit:this.formSubmitHandler}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(f,{value:n,onChange:this.chengeFilter}),Object(a.jsx)(d,{contacts:r,onDeleteContact:this.deleteContact})]})}}]),n}(h.a.Component);r.a.render(Object(a.jsx)(p,{}),document.querySelector("#root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.131d2736.chunk.js.map