(window.webpackJsonp=window.webpackJsonp||[]).push([[3,11,12,13],{171:function(t,e,r){},172:function(t,e,r){},173:function(t,e,r){},174:function(t,e,r){},175:function(t,e,r){},178:function(t,e,r){"use strict";var n=r(171);r.n(n).a},179:function(t,e,r){"use strict";var n=r(172);r.n(n).a},180:function(t,e,r){"use strict";var n=r(173);r.n(n).a},181:function(t,e,r){"use strict";var n=r(174);r.n(n).a},185:function(t,e,r){"use strict";var n=r(175);r.n(n).a},186:function(t,e,r){},187:function(t,e,r){"use strict";r.r(e);r(14),r(22);var n={methods:{repaint:function(t,e){if(null!==t){var r=[t.topLeftFinderPattern,t.topRightFinderPattern,t.bottomLeftFinderPattern];e.fillStyle="#007bff",r.forEach(function(t){var r=t.x,n=t.y;e.fillRect(r-5,n-5,10,10)})}},logErrors:function(t){t.catch(console.error)}}},o=r(1),a=Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("qrcode-stream",{attrs:{track:this.repaint},on:{init:this.logErrors}})},[],!1,null,null,null);a.options.__file="CustomTracking.vue";e.default=a.exports},188:function(t,e,r){"use strict";r.r(e);r(51),r(169);var n=r(170),o={data:function(){return{result:"",error:""}},methods:{onDecode:function(t){this.result=t},onInit:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e;case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),"NotAllowedError"===t.t0.name?this.error="ERROR: you need to grant camera access permisson":"NotFoundError"===t.t0.name?this.error="ERROR: no camera on this device":"NotSupportedError"===t.t0.name?this.error="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===t.t0.name?this.error="ERROR: is the camera already in use?":"OverconstrainedError"===t.t0.name?this.error="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===t.t0.name&&(this.error="ERROR: Stream API is not supported in this browser");case 8:case"end":return t.stop()}},t,this,[[0,5]])}));return function(e){return t.apply(this,arguments)}}()}},a=(r(178),r(1)),i=Object(a.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",{staticClass:"error"},[t._v(t._s(t.error))]),t._v(" "),r("p",{staticClass:"decode-result"},[t._v("Last result: "),r("b",[t._v(t._s(t.result))])]),t._v(" "),r("qrcode-stream",{on:{decode:t.onDecode,init:t.onInit}})],1)},[],!1,null,"20bcfd2c",null);i.options.__file="DecodeAll.vue";e.default=i.exports},189:function(t,e,r){"use strict";r.r(e);r(51),r(169);var n=r(170),o={ideal:"environment"},a={exact:"user"},i={data:function(){return{facingMode:o,noFrontCamera:!1}},methods:{switchCamera:function(){this.facingMode===a?this.facingMode=o:this.facingMode=a},onInit:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e;case 3:t.next=9;break;case 5:t.prev=5,t.t0=t.catch(0),this.noFrontCamera=this.facingMode===a&&"OverconstrainedError"===t.t0.name,console.error(t.t0);case 9:case"end":return t.stop()}},t,this,[[0,5]])}));return function(e){return t.apply(this,arguments)}}()}},s=(r(179),r(1)),c=Object(s.a)(i,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.noFrontCamera?r("p",{staticClass:"error"},[t._v("\n    You don't seem to have a front camera on your device\n  ")]):t._e(),t._v(" "),r("qrcode-stream",{attrs:{camera:{facingMode:t.facingMode}},on:{init:t.onInit}},[r("button",{on:{click:t.switchCamera}},[t._v("Switch Camera")])])],1)},[],!1,null,"b84ae89e",null);c.options.__file="SwitchCamera.vue";e.default=c.exports},190:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{result:""}},methods:{onDecode:function(t){this.result=t},logErrors:function(t){t.catch(console.error)}}},o=r(1),a=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"decode-result"},[this._v("Last result: "),e("b",[this._v(this._s(this.result))])]),this._v(" "),e("qrcode-stream",{attrs:{track:!1},on:{decode:this.onDecode,init:this.logErrors}})],1)},[],!1,null,null,null);a.options.__file="NoTracking.vue";e.default=a.exports},191:function(t,e,r){"use strict";r.r(e);r(51),r(169);var n=r(170),o={data:function(){return{result:null,error:null,dragover:!1}},methods:{onDetect:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e;case 3:r=t.sent,n=r.content,this.result=n,this.error=null,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),"DropImageFetchError"===t.t0.name?this.error="Sorry, you can't load cross-origin images :/":"DropImageDecodeError"===t.t0.name?this.error="Ok, that's not an image. That can't be decoded.":this.error="Ups, what kind of error is this?! "+t.t0.message;case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e){return t.apply(this,arguments)}}(),logErrors:function(t){t.catch(console.error)},onDragOver:function(t){this.dragover=t}}},a=(r(180),r(1)),i=Object(a.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",{staticClass:"decode-result"},[t._v("Last result: "),r("b",[t._v(t._s(t.result))])]),t._v(" "),null!==t.error?r("p",{staticClass:"drop-error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):t._e(),t._v(" "),r("qrcode-drop-zone",{on:{detect:t.onDetect,dragover:t.onDragOver,init:t.logErrors}},[r("div",{staticClass:"drop-area",class:{dragover:t.dragover}},[t._v("\n      DROP SOME IMAGES HERE\n    ")])])],1)},[],!1,null,null,null);i.options.__file="DragDrop.vue";e.default=i.exports},192:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{result:""}},methods:{onDecode:function(t){this.result=t}}},o=r(1),a=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"decode-result"},[this._v("Last result: "),e("b",[this._v(this._s(this.result))])]),this._v(" "),e("qrcode-capture",{on:{decode:this.onDecode}})],1)},[],!1,null,null,null);a.options.__file="Upload.vue";e.default=a.exports},193:function(t,e,r){"use strict";r.r(e);r(51),r(169);var n=r(170),o={data:function(){return{result:"",noStreamApiSupport:!1}},methods:{onDecode:function(t){this.result=t},logErrors:function(t){t.catch(console.error)},onInit:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e;case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),"StreamApiNotSupportedError"===t.t0.name&&(this.noStreamApiSupport=!0);case 8:case"end":return t.stop()}},t,this,[[0,5]])}));return function(e){return t.apply(this,arguments)}}()}},a=r(1),i=Object(a.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",{staticClass:"decode-result"},[t._v("Last result: "),r("b",[t._v(t._s(t.result))])]),t._v(" "),r("qrcode-drop-zone",{on:{decode:t.onDecode,init:t.logErrors}},[r("qrcode-stream",{on:{decode:t.onDecode,init:t.onInit}})],1),t._v(" "),t.noStreamApiSupport?r("qrcode-capture",{on:{decode:t.onDecode}}):t._e()],1)},[],!1,null,null,null);i.options.__file="Fallback.vue";e.default=i.exports},194:function(t,e,r){"use strict";r.r(e);r(169);var n=r(170),o={data:function(){return{loading:!1,destroyed:!1}},methods:{onInit:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,e;case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.error(t.t0);case 9:return t.prev=9,this.loading=!1,t.finish(9);case 12:case"end":return t.stop()}},t,this,[[1,6,9,12]])}));return function(e){return t.apply(this,arguments)}}(),reload:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.destroyed=!0,t.next=3,this.$nextTick();case 3:this.destroyed=!1;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},a=(r(181),r(1)),i=Object(a.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("button",{on:{click:t.reload}},[t._v("reload")]),t._v(" "),t.destroyed?t._e():r("qrcode-stream",{on:{init:t.onInit}},[t.loading?r("div",{staticClass:"loading-indicator"},[t._v("\n      Loading...\n    ")]):t._e()])],1)},[],!1,null,"7b76ec88",null);i.options.__file="LoadingIndicator.vue";e.default=i.exports},195:function(t,e,r){"use strict";r.r(e);r(176),r(169);var n=r(170),o={data:function(){return{isValid:!1,validating:!1,paused:!1,result:null}},methods:{onDecode:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.result=e,this.pauseCamera(),this.validating=!0,t.next=5,this.validate(e);case 5:this.isValid=t.sent,this.validating=!1,window.setTimeout(function(){r.unPauseCamera()},2e3);case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),pauseCamera:function(){this.paused=!0},unPauseCamera:function(){this.paused=!1},validate:function(t){return new Promise(function(e){window.setTimeout(function(){t.startsWith("http")?e(!0):e(!1)},3e3)})},logErrors:function(t){t.catch(console.error)}}},a=(r(185),r(1)),i=Object(a.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",{staticClass:"decode-result"},[t._v("Last result: "),r("b",[t._v(t._s(t.result))])]),t._v(" "),r("qrcode-stream",{attrs:{paused:t.paused},on:{decode:t.onDecode,init:t.logErrors}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.paused,expression:"paused"}],staticClass:"validation-layer"},[r("div",{staticClass:"validation-notice"},[t.validating?r("div",[t._v("\n          Long validation in progress...\n        ")]):t.isValid?r("div",{staticClass:"valid"},[t._v("\n          This is a URL\n        ")]):r("div",{staticClass:"invalid"},[t._v("\n          This is NOT a URL!\n        ")])])])])],1)},[],!1,null,"2d7088fd",null);i.options.__file="ValidateSoft.vue";e.default=i.exports},198:function(t,e,r){"use strict";var n=r(186);r.n(n).a},202:function(t,e,r){"use strict";r.r(e);r(169);var n=r(170),o=r(0),a=r(187),i=r(188),s=r(189),c=r(190),u=r(191),l=r(192),d=r(193),f=r(194),p=r(199),v=r(195),h={props:{component:String},data:function(){return{currentDemo:null}},mounted:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(31).then(r.t.bind(null,201,7));case 2:e=t.sent,o.a.use(e),o.a.component("CustomTracking",a.default),o.a.component("DecodeAll",i.default),o.a.component("SwitchCamera",s.default),o.a.component("NoTracking",c.default),o.a.component("DragDrop",u.default),o.a.component("Upload",l.default),o.a.component("Fallback",d.default),o.a.component("LoadingIndicator",f.default),o.a.component("ValidateHard",p.default),o.a.component("ValidateSoft",v.default),this.currentDemo=this.component;case 15:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},m=(r(198),r(1)),_=Object(m.a)(h,function(){var t=this.$createElement;return(this._self._c||t)(this.currentDemo,{tag:"component"})},[],!1,null,null,null);_.options.__file="DemoWrapper.vue";e.default=_.exports}}]);