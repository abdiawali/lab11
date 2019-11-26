(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"2b30":function(t,e,a){"use strict";var n=a("7c47"),s=a.n(n);s.a},"40e5":function(t,e,a){},"55d9":function(t,e,a){"use strict";var n=a("40e5"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("RouterView"),a("Footer")],1)},i=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"jumbotron"},[a("h1",{staticClass:"display-4",attrs:{id:"title"}},[t._v("Have you visited every state?")])])])}],l={name:"Header"},c=l,u=(a("2b30"),a("2877")),d=Object(u["a"])(c,r,o,!1,null,"37bde74a",null),f=d.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"m-2"},[a("span",{staticClass:"p-3"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("span",{staticClass:"p-3"},[a("router-link",{attrs:{to:"/about"}},[t._v("About this site")])],1)]),t._m(0)])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-right p-2"},[t._v("Header image by "),a("a",{attrs:{href:"https://unsplash.com/photos/6V2vCZ2hYtY"}},[t._v("@chrislawton via Unsplash.")]),a("br"),a("a",{attrs:{href:"https://icons8.com/icon/43632/map"}},[t._v("Map icon by Icons8")])])}],p={name:"Footer"},m=p,A=(a("760c"),Object(u["a"])(m,v,h,!1,null,null,null)),y=A.exports,g={name:"app",components:{Header:f,Footer:y}},b=g,O=(a("034f"),Object(u["a"])(b,s,i,!1,null,null,null)),V=O.exports,w=a("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"state-list"}},[a("Summary",{attrs:{total:t.totalVisited,visitedAll:t.visitedAll}}),a("div",{staticClass:"d-flex flex-wrap justify-content-around"},t._l(t.states,(function(e){return a("div",{key:e.name,staticClass:"p-2"},[a("State",{attrs:{state:e},on:{isVisited:t.updateVisited}})],1)})),0)],1)},Y=[],x=(a("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"state-summary p-2 rounded"},[n("span",{staticClass:"m-2"},[t._v(t._s(t.state.name))]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.stateVisited,expression:"stateVisited"}],staticClass:"m-2",attrs:{id:"visited",type:"checkbox"},domProps:{checked:Array.isArray(t.stateVisited)?t._i(t.stateVisited,null)>-1:t.stateVisited},on:{change:[function(e){var a=t.stateVisited,n=e.target,s=!!n.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);n.checked?r<0&&(t.stateVisited=a.concat([i])):r>-1&&(t.stateVisited=a.slice(0,r).concat(a.slice(r+1)))}else t.stateVisited=s},function(e){return t.$emit("isVisited",t.stateName,t.stateVisited)}]}})]),n("p",[n("router-link",{attrs:{to:{name:"detail",params:{state:t.stateName}}}},[n("img",{staticClass:"map-icon",attrs:{src:a("596e")}})])],1)])}),j=[],C=(a("b0c0"),{name:"State",props:{state:Object},data:function(){return{stateName:this.state.name,stateVisited:this.state.visited}}}),S=C,M=(a("7694"),Object(u["a"])(S,x,j,!1,null,"ef1e39a6",null)),G=M.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"summary"},[a("h3",[t._v("You have visited "+t._s(t.total)+" "+t._s(t.statesPlural)+" ")]),t.visitedAll?a("p",{attrs:{id:"visited-all"}},[t._v(" You have visited all 50 states and the District of Columbia! ")]):t._e()])},W=[],P=(a("a9e3"),{name:"Summary",props:{total:Number,visitedAll:Boolean},computed:{statesPlural:function(){return 1===this.total?"state":"states"}}}),Z=P,F=(a("8c21"),Object(u["a"])(Z,z,W,!1,null,"654bb096",null)),B=F.exports,_={name:"StateList",components:{State:G,Summary:B},data:function(){return{states:[]}},mounted:function(){this.getAll()},methods:{getAll:function(){var t=this;this.$stateService.getAll().then((function(e){t.states=e}))},updateVisited:function(t,e){var a=this;this.$stateService.setVisited(t,e).then((function(){a.getAll()}))}},computed:{totalVisited:function(){var t=this.states.filter((function(t){return t.visited}));return t.length},visitedAll:function(){var t=this.states.filter((function(t){return t.visted}));return t.length==this.states.length}}},k=_,q=Object(u["a"])(k,E,Y,!1,null,null,null),H=q.exports,X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h2",[t._v(" Where have you ever traveled?")]),a("p",[t._v(" Use this site to keep track of how many states you have visited")]),a("p",[t._v(" A Vue.js site by Abdi. ")])])}],L={name:"ABout"},D=L,K=Object(u["a"])(D,X,I,!1,null,null,null),T=K.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"state-detail p-2"},[a("h2",[t._v("The State of "+t._s(t.state.name))]),t.state.visited?a("p",[t._v("You have visited this state")]):a("p",[t._v("You have not visited this state")]),a("div",{attrs:{id:"map-container"}},[a("l-map",{ref:"stateMap",staticStyle:{height:"100%",width:"100%"},attrs:{zoom:t.zoom,center:t.center}},[a("l-tile-layer",{attrs:{url:t.url}})],1)],1)])},R=[],Q=a("2699"),N=a("a40a"),J={name:"StateDetail",components:{LMap:Q["a"],LTileLayer:N["a"]},data:function(){return{state:{name:""},url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",zoom:2,center:[44,-103],bounds:null}},mounted:function(){this.state.name=this.$route.params.state,this.$refs.stateMap.mapObject.dragging.disable(),this.fetchStateData()},methods:{fetchStateData:function(){var t=this;this.$stateService.getOne(this.state.name).then((function(e){t.state=e,t.zoom=e.zoom,t.center=[e.lat,e.lon],t.$refs.stateMap.mapObject.flyTo(t.center,t.zoom)})).catch((function(t){return console.error(t)}))}}},$=J,tt=(a("55d9"),Object(u["a"])($,U,R,!1,null,"0e5cf954",null)),et=tt.exports,at=new w["a"]({routes:[{path:"/",component:H},{path:"/about",component:T},{path:"/Detail/:state",name:"detail",component:et}]}),nt=a("5f5b"),st=a("bc3a"),it=a.n(st),rt={getAll:function(){return it.a.get("/api/states/").then((function(t){return t.data}))},setVisited:function(t,e){return it.a.patch("/api/state/"+t,{visited:e}).then((function(t){return t.data}))},getOne:function(t){return it.a.get("/api/state/"+t).then((function(t){return t.data}))}};a("f9e3"),a("2dd8"),a("6cc5");n["default"].use(w["a"]),n["default"].use(nt["a"]),n["default"].prototype.$stateService=rt,new n["default"]({render:function(t){return t(V)},router:at}).$mount("#app")},"596e":function(t,e){t.exports="data:image/png;base64,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"},"760c":function(t,e,a){"use strict";var n=a("c3f5"),s=a.n(n);s.a},7694:function(t,e,a){"use strict";var n=a("9b76"),s=a.n(n);s.a},"7c47":function(t,e,a){},"85ec":function(t,e,a){},"8c21":function(t,e,a){"use strict";var n=a("c345"),s=a.n(n);s.a},"9b76":function(t,e,a){},c345:function(t,e,a){},c3f5:function(t,e,a){}});
//# sourceMappingURL=app.a41b90f1.js.map