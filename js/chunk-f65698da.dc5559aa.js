(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f65698da"],{"19af":function(e,t,s){},2788:function(e,t,s){"use strict";s("19af")},d96f:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal"},[s("form",{staticClass:"login-form",on:{submit:function(t){return t.preventDefault(),e.loginUser(t)}}},[s("h3",{staticClass:"title"},[e._v("Login")]),s("div",{staticClass:"login-input"},[e._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{type:"email",placeholder:"Enter Email",name:"email",id:"email",required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e._m(1),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"Enter Password",name:"psw",id:"psw",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),s("button",{staticClass:"btn-login",attrs:{type:"submit"}},[e._v("LOGIN")])]),s("div",{staticClass:"register"},[s("p",[e._v("Not a member yet?")]),s("p",{on:{click:e.goToRegister}},[e._v("Register here.")])])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"email required"},[s("b",[e._v("Email")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"psw required"},[s("b",[e._v("Password")])])}],r=s("5530"),n=s("2f62"),o={data:function(){return{user:{email:null,password:null}}},methods:Object(r["a"])(Object(r["a"])({},Object(n["c"])(["hideModal"])),{},{goToRegister:function(){this.$router.push("/register"),this.hideModal()},loginUser:function(){console.log(this.user.email,this.user.password),this.$store.dispatch("authenticateUser",this.user),this.hideModal()}})},l=o,u=(s("2788"),s("2877")),c=Object(u["a"])(l,a,i,!1,null,"b81480dc",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-f65698da.dc5559aa.js.map