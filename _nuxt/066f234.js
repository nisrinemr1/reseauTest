(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{268:function(e,t,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(111).default)("484192a5",content,!0,{sourceMap:!1})},269:function(e,t,n){"use strict";n(268)},270:function(e,t,n){var o=n(110)(!1);o.push([e.i,"iframe{border:none;width:100%;height:100%}",""]),e.exports=o},271:function(e,t,n){"use strict";var o=n(273),r={components:{Unity:n.n(o).a}},l=(n(269),n(49)),component=Object(l.a)(r,(function(){return(0,this._self._c)("iframe",{attrs:{src:"https://hackathon22.interface3.be/Enigma/FinalGame/index.html",width:"1000",height:"600"}})}),[],!1,null,null,null);t.a=component.exports},275:function(e,t,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(111).default)("33ed2faf",content,!0,{sourceMap:!1})},280:function(e,t,n){"use strict";n(275)},281:function(e,t,n){var o=n(110)(!1);o.push([e.i,".home-page,.home-page .home-container{display:flex;justify-content:center}.home-page .home-container{width:100%;height:100vh;flex-direction:column;align-items:center}.home-page .home-container form{background:linear-gradient(180deg,rgba(43,237,230,.1) 0,rgba(43,237,230,.2));padding:20px 60px;border:10px double #04ebeb;display:flex;flex-direction:column;align-items:flex-start}.home-page .home-container form h3{padding-bottom:20px}.home-page .home-container form .inputUserName{width:50%;display:flex;flex-direction:column;justify-content:flex-start}.home-page .home-container form .play-btn{margin-top:30px;justify-content:flex-end}.home-page .home-container .footer{position:absolute;bottom:0;text-align:center}",""]),e.exports=o},283:function(e,t,n){"use strict";n.r(t);var o={name:"home",transition:{name:"game",mode:"out-in"},data:function(){return{userName:""}},methods:{getUserName:function(){this.userName?(localStorage.setItem("storedData",this.userName),alert("Welcome "+this.userName),this.$router.push({name:"game"})):alert("user name is empty")}},components:{Webgl:n(271).a}},r=(n(280),n(49)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"home-page"},[t("div",{staticClass:"home-container"},[t("form",{attrs:{placeholder:"Username"},on:{submit:function(t){return t.preventDefault(),e.getUserName.apply(null,arguments)}}},[t("h1",[e._v("Welcome to Enigma")]),e._v(" "),t("h3",[e._v("Please, enter your user name:")]),e._v(" "),t("div",{staticClass:"inputUserName"},[t("label",{attrs:{for:"name"}},[e._v(" User name: ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})]),e._v(" "),t("button",{staticClass:"play-btn"},[e._v("Let's play")])]),e._v(" "),e._m(0)])])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"footer"},[t("h2",[e._v("Hackathon 2022 🤍")]),e._v(" "),t("h2",[e._v(" Shaila-GAME, Scheherazad-GAME, Manon-GAME ")]),e._v(" "),t("h2",[e._v(" Lelanie-ASR, Juliette-ASR, Nisrine-WEB ")])])}],!1,null,null,null);t.default=component.exports}}]);