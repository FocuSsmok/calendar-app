(function(e){function t(t){for(var a,s,i=t[0],d=t[1],c=t[2],u=0,v=[];u<i.length;u++)s=i[u],r[s]&&v.push(r[s][0]),r[s]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);l&&l(t);while(v.length)v.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var d=n[i];0!==r[d]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/calendar-app/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0110":function(e,t,n){},"1de3":function(e,t,n){"use strict";var a=n("ee07"),r=n.n(a);r.a},2881:function(e,t,n){"use strict";var a=n("0110"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Calendar")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"calendar"},e._l(e.data,function(t){return n("Day",{key:t.id,attrs:{dayName:t.day,id:t.id,events:t.events},on:{deleteEvent:function(t){e.deleteEvent(t)}}})}),1),n("AddEvent",{on:{saveEvent:function(t){e.saveEvent(t)}}})],1)},i=[],d=(n("ac6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"day"},[n("header",[n("h3",[e._v(e._s(e.dayName))])]),n("div",{staticClass:"body"},[n("p",[e._v(e._s(e.id))]),e._l(e.events,function(t,a){return n("Event",{key:a,attrs:{text:t,index:a},on:{deleteEvent:function(t){e.deleteEvent(t)}}})})],2)])}),c=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"event"},[n("p",[e._v(e._s(e.text))]),n("span",{staticClass:"event__remove",on:{click:e.removeEvent}},[n("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)])},u=[],v={props:["text","index"],methods:{removeEvent:function(e){this.$emit("deleteEvent",{index:this.index})}}},f=v,p=(n("1de3"),n("2877")),m=Object(p["a"])(f,l,u,!1,null,null,null),y=m.exports,h={props:["id","dayName","events"],data:function(){return{counter:0}},methods:{deleteEvent:function(e){var t=e.index;console.log(t),this.$emit("deleteEvent",{index:t,dayName:this.dayName})}},components:{Event:y}},_=h,b=(n("2881"),Object(p["a"])(_,d,c,!1,null,null,null)),E=b.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"new-event"},[n("form",{staticClass:"form",attrs:{action:""}},[n("div",{staticClass:"form__field"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.event,expression:"event"}],attrs:{type:"text",placeholder:"New Event"},domProps:{value:e.event},on:{input:function(t){t.target.composing||(e.event=t.target.value)}}})]),n("div",{staticClass:"form__field"},[n("label",{attrs:{for:"days"}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{name:"days",id:"days"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selected=t.target.multiple?n:n[0]}}},e._l(e.compData,function(t){return n("option",{key:t.id,domProps:{value:t.day}},[e._v(e._s(t.day))])}),0)]),n("div",{staticClass:"form__field"},[n("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.addEvent(t)}}},[e._v("Save")])]),n("p",{staticClass:"form__error",class:{active:e.hasError}},[e._v("Pola nie mogą być puste!")])])])},g=[],w=[{id:1,day:"Monday",events:[]},{id:2,day:"Tuesday",events:[]},{id:3,day:"Wednesday",events:[]},{id:4,day:"Thursday",events:[]},{id:5,day:"Friday",events:[]},{id:6,day:"Saturday",events:[]},{id:7,day:"Sunday",events:[]}],C={data:function(){return{compData:w,selected:"",event:"",hasError:!1}},created:function(){this.selected=w[0].day},methods:{addEvent:function(e){""!==this.event&&""!==this.selected?(this.$emit("saveEvent",{event:this.event,day:this.selected}),this.event="",this.selected=w[0].day,this.hasError=!1):this.hasError=!0}}},O=C,j=(n("d124"),Object(p["a"])(O,x,g,!1,null,null,null)),N=j.exports,P={data:function(){return{data:w}},methods:{saveEvent:function(e){w.forEach(function(t){t.day===e.day&&t.events.push(e.event)})},deleteEvent:function(e){w.forEach(function(t){t.day===e.dayName&&t.events.splice(e.index,1)})}},components:{Day:E,AddEvent:N}},$=P,k=(n("e611"),Object(p["a"])($,s,i,!1,null,null,null)),S=k.exports,D={name:"app",data:function(){return{data:w}},components:{Calendar:S}},M=D,T=(n("5c0b"),Object(p["a"])(M,r,o,!1,null,null,null)),A=T.exports,J=n("ecee"),F=n("c074"),W=n("ad3d");J["c"].add(F["a"]),a["a"].component("font-awesome-icon",W["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(A)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(e,t,n){},b523:function(e,t,n){},d124:function(e,t,n){"use strict";var a=n("b523"),r=n.n(a);r.a},dbc7:function(e,t,n){},e611:function(e,t,n){"use strict";var a=n("dbc7"),r=n.n(a);r.a},ee07:function(e,t,n){}});
//# sourceMappingURL=app.488324e8.js.map