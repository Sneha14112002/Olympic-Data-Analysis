(this["webpackJsonpstreamlit-browser"]=this["webpackJsonpstreamlit-browser"]||[]).push([[13],{3892:function(n,t,e){var a=e(3893)();n.exports=a},3893:function(n,t,e){var a=e(3894),r=e(1042),i=e(3895);n.exports=function(n){return function(t,e,o){return o&&"number"!=typeof o&&r(t,e,o)&&(e=o=void 0),t=i(t),void 0===e?(e=t,t=0):e=i(e),o=void 0===o?t<e?1:-1:i(o),a(t,e,o,n)}}},3894:function(n,t){var e=Math.ceil,a=Math.max;n.exports=function(n,t,r,i){for(var o=-1,c=a(e((t-n)/(r||1)),0),s=Array(c);c--;)s[i?c:++o]=n,n+=r;return s}},3895:function(n,t,e){var a=e(1045),r=1/0;n.exports=function(n){return n?(n=a(n))===r||n===-1/0?17976931348623157e292*(n<0?-1:1):n===n?n:0:0===n?n:0}},3985:function(n,t,e){"use strict";e.d(t,"a",(function(){return m}));var a=e(0),r=e(3892),i=e.n(r),o=e(241),c=e.n(o),s=e(5),u=function(n){var t=n.className,e=n.scriptRunId,a=n.numParticles,r=n.numParticleTypes,o=n.ParticleComponent;return Object(s.jsx)("div",{className:c()(t,"stHidden"),children:i()(a).map((function(n){var t=Math.floor(Math.random()*r);return Object(s.jsx)(o,{particleType:t},e+n)}))})},m=Object(a.memo)(u)},6710:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return y})),e.d(t,"NUM_FLAKES",(function(){return h}));var a,r=e(0),i=e.p+"static/media/flake-0.beded754.png",o=e.p+"static/media/flake-1.8077dc15.png",c=e.p+"static/media/flake-2.e3f07d06.png",s=e(3985),u=e(230),m=e(11),p=e.n(m),f=e(37),d=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.random()*(n-t)+t},l=p()("img",{target:"e1hbdfkw0"})((function(n){var t=n.theme;return{position:"fixed",top:"".concat(-150,"px"),marginLeft:"".concat(-75,"px"),zIndex:t.zIndices.balloons,left:"".concat(d(90,10),"vw"),animationDelay:"".concat(d(4e3),"ms"),height:"".concat(150,"px"),width:"".concat(150,"px"),animationDuration:"3000ms",animationName:Object(f.keyframes)(a||(a=Object(u.a)(["\n  from {\n    transform:\n      translateY(0)\n      rotateX(","deg)\n      rotateY(","deg)\n      rotateZ(","deg);\n  }\n\n  to {\n    transform:\n      translateY(calc(100vh + ","px))\n      rotateX(0)\n      rotateY(0)\n      rotateZ(0);\n  }\n"])),d(360),d(360),d(360),150),animationTimingFunction:"ease-in",animationDirection:"normal",animationIterationCount:1,opacity:1}}),""),v=e(5),h=100,b=[i,o,c],x=b.length,g=function(n){var t=n.particleType;return Object(v.jsx)(l,{src:b[t]})},j=function(n){var t=n.scriptRunId;return Object(v.jsx)(s.a,{className:"snow",scriptRunId:t,numParticleTypes:x,numParticles:h,ParticleComponent:g})},y=Object(r.memo)(j)}}]);