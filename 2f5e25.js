(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{497:function(t,e,i){"use strict";function s(t,e,i,s){i&&Object.defineProperty(t,e,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(s):void 0})}function n(t,e,i,s,n){var a={};return Object.keys(s).forEach(function(t){a[t]=s[t]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=i.slice().reverse().reduce(function(i,s){return s(t,e,i)||i},a),n&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(n):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(t,e,a),a=null),a}function a(t,e){for(var i,s=0;s<e.length;s++)(i=e[s]).enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}function o(t,e){for(var i,s=0;s<e.length;s++)(i=e[s]).enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}function r(t,e){for(var i,s=0;s<e.length;s++)(i=e[s]).enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var i,s=0;s<e.length;s++)(i=e[s]).enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}function g(t,e,i){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var s=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(s){var n=Object.getOwnPropertyDescriptor(s,e);return n.get?n.get.call(i):n.value}})(t,e,i||t)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var p=Math.cos,d=Math.sin,y=Math.PI;i.r(e);var m,w,v,b,I,O,C=i(3),R=i(498),x=i(38),j=i(0),E=i(5),S=i(500),T=i.n(S),z=i(499),D=i.n(z),k=new(w=n((m=function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),s(this,"mood",w,this),s(this,"isListening",v,this),s(this,"listenTls",b,this),s(this,"listenTl2",I,this),s(this,"willReward",O,this)}).prototype,"mood",[x.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=n(m.prototype,"isListening",[x.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),b=n(m.prototype,"listenTls",[x.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),I=n(m.prototype,"listenTl2",[x.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=n(m.prototype,"willReward",[x.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m),M={ANGER:"anger",APATHY:"apathy",CONTENT:"content",HEY:"hey",IDLE:"idle",INIT:"init",JOY:"joy",LOVE:"love",NO:"no",PINCH:"pinch",RESET:"reset",SADNESS:"sadness",SHAKE:"shake",SNOOZE:"snooze",SURPRISE:"surprise",SWIPE:"swipe",TAP:"tap",UPSET:"upset",LISTENING:"listening",LISTENING_END:"listening_end",QUESTION:"question"};j.l.ticker.useRAF(!0);var _={init:function(){for(var t=0;t<this.rings.length;t++){this.rings[t].theta=3*this.rings[t].seed.z;var e=1-.1*(t+2);j.l.fromTo(this.rings[t].scale,2.3,{x:e,y:e},{x:1,y:1,ease:j.b.easeOut.config(1,.3),delay:t/this.rings.length/2}),j.l.fromTo(this.rings[t],.2,{opacity:0},{opacity:1,delay:t/this.rings.length/2}),j.l.fromTo(this.rings[t],2,{theta:this.rings[t].theta},{theta:.01*t,delay:.8,ease:j.b.easeOut.config(1,.6)}),j.l.fromTo(this.rings[t],2,{gaussIt:this.rings[t].gaussIt,weightIn:this.rings[t].weightIn,intensity:this.rings[t].intensity,osc:this.rings[t].osc},{gaussIt:.98,weightIn:1,intensity:.21,osc:.06,delay:.8,ease:j.g.easeOut}),new j.j({onComplete:function(){k.mood=M.IDLE}}).to(this.rings[t].hsl,.1,{x:this.rings[t].originalColor.x,y:this.rings[t].originalColor.y,z:this.rings[t].originalColor.z,delay:2,ease:j.f.easeOut})}},idle:function(){var t={JOY:0,HAPPY:0,SAD:0,ANGER:0},e={},i={JOY:{timeInc:.15},HAPPY:{timeInc:.15,modifierTimestep:.003},ANGER:{timeInc:.1,modifierTimestep:.03},SAD:{timeStep:-.004}};for(var s in t)if(i[s])for(var n in i[s])e[n]||(e[n]=0),e[n]+=i[s][n]*t[s];for(var a=0;a<this.rings.length;a++){var o={},r=this.simplex.noise2D(a/8*10,this.modifierTime),h=this.simplex.noise2D(this.modifierTime,a/8*10),l={JOY:{gaussIt:-.98,weightIn:-.9,theta:a/8,intensity:2,osc:.04},HAPPY:{gaussIt:-.98,weightIn:-.9,theta:a/8,intensity:1,osc:.04,scaleInc:0,positionX:.2+.01*a*d(2*y*this.modifierTime),positionY:.2+.01*a*p(2*y*this.modifierTime)},ANGER:{gaussIt:-.98,weightIn:-.9,rotation:a/8,intensity:.8,osc:.1,scaleInc:(8-a)/16*.1,positionX:.1*r,positionY:.1*h},SAD:{gaussIt:-.8,weightIn:-.2,osc:.04}};for(var g in t)if(l[g])for(var u in l[g])o[u]||(o[u]=0),o[u]+=l[g][u]*t[g];this.rings[a].gaussIt=.98+o.gaussIt,this.rings[a].weightIn=1+o.weightIn,this.rings[a].intensity=.21+o.intensity,this.rings[a].theta=.01*a+o.theta,this.rings[a].osc=.06+o.osc,this.rings[a].scaleInc=new R.i(o.scaleInc,o.scaleInc,0),this.rings[a].position.x=o.positionX,this.rings[a].position.y=o.positionY}this.timeInc=.005+e.timeInc,this.modifierTimestep=e.modifierTimestep},hey:function(){for(var t=0;t<this.rings.length;t++)(new j.j).to(this.rings[t],.5,{gaussIt:.83,weightIn:.03,intensity:.45,osc:.34,theta:Math.random()/2,ease:j.f.easeOut}).to(this.rings[t],.6,{gaussIt:.98,weightIn:1,intensity:.21,osc:.06,theta:.01*t,ease:j.f.easeOut});(new j.j).eventCallback("onComplete",function(){k.mood=M.RESET}).to(this,1,{timeInc:.1,ease:j.f.easeOut}).to(this,1,{timeInc:.01,delay:.5,ease:j.f.easeOut})},anxiety:function(){for(var t=[null,null,null,D.a.hsv(58,.48,1),D.a.hsv(43,.61,1),D.a.hsv(350,.64,.98),D.a.hsv(289,.45,.38),D.a.hsv(277,.46,.32)],e=0;e<this.rings.length;e++){if(t[e]){var i=t[e].hsl();(new j.j).to(this.rings[e].hsl,.6,{x:i[0],y:i[1],z:i[2],ease:j.f.easeOut}).to(this.rings[e].hsl,.3,{x:this.rings[e].originalColor.x,y:this.rings[e].originalColor.y,z:this.rings[e].originalColor.z,delay:.3,ease:j.f.easeOut})}(new j.j).to(this.rings[e],.6,{gaussIt:0,weightIn:.1,intensity:3,osc:.1,theta:Math.random()/2,ease:j.f.easeOut}).to(this.rings[e],.3,{gaussIt:.98,weightIn:1,intensity:.05,osc:.06,theta:.01*e,delay:.3,ease:j.f.easeOut})}(new j.j).eventCallback("onComplete",function(){k.mood=M.RESET}).to(this,1,{timeInc:.5,ease:j.f.easeOut}).to(this,1,{timeInc:.01,delay:0,ease:j.f.easeOut})},joy:function(){for(var t=0;t<this.rings.length;t++){this.rings[t];var e=0<Math.sign(this.rings[t].seed.z)?2+.01*t:.01*t-2;(new j.j).to(this.rings[t].position,.5,{x:.2,y:.2,ease:j.e.easeOut}).to(this.rings[t].position,.5,{x:0,y:0,delay:.4+(this.rings.length-t)/this.rings.length/2,ease:j.e.easeOut}),(new j.j).fromTo(this.rings[t].scale,.5,{x:this.rings[t].scale.x,y:this.rings[t].scale.y},{x:.9,y:.9,ease:j.a.easeOut.config(1.7)}).to(this.rings[t].scale,.5,{x:1,y:1,delay:.4+(this.rings.length-t)/this.rings.length/2,ease:j.a.easeOut.config(1.7)}),(new j.j).to(this.rings[t],2,{theta:e,ease:j.g.easeOut,delay:(this.rings.length-t)/this.rings.length/2}).to(this.rings[t],0,{theta:.01*t}),(new j.j).eventCallback("onComplete",function(){k.mood=M.RESET}).to(this.rings[t],.6,{gaussIt:.5,weightIn:.2,intensity:.6,osc:.36,ease:j.g.easeOut}).to(this.rings[t],.6,{gaussIt:.98,weightIn:1,intensity:.21,osc:.06,ease:j.g.easeOut})}},surprise:function(){for(var t=0;t<this.rings.length;t++){(new j.j).to(this.rings[t],2,{gaussIt:0,weightIn:.3,osc:.2,ease:j.h.ease.config({template:j.c.easeNone,strength:.3,points:3,taper:"none",randomize:!0,clamp:!1})}).to(this.rings[t],2,{gaussIt:.98,weightIn:1,osc:.06,ease:j.g.easeOut}),(new j.j).to(this.rings[t].scale,.3,{x:1.1+(this.rings.length-t)/500,y:1.1+(this.rings.length-t)/500,delay:t/this.rings.length/2/2,ease:j.a.easeOut.config(1.7)}).to(this.rings[t].scale,.3,{x:1,y:1,delay:1.6+(this.rings.length-t)/this.rings.length/2/2,ease:j.a.easeOut.config(1.7)})}(new j.j).eventCallback("onComplete",function(){k.mood=M.RESET}).fromTo(this,.3,{timeInc:this.timeInc},{timeInc:.3,ease:j.f.easeOut}).to(this,.2,{timeInc:.01,delay:1.65,ease:j.f.easeIn})},anger:function(){for(var t=[null,null,null,D.a.hsv(3,.76,.94),D.a.hsv(352,.8,.79),D.a.hsv(337,.98,.51),D.a.hsv(325,1,.33),D.a.hsv(302,.62,.18)],e=0;e<this.rings.length;e++){if(t[e]){var i=t[e].hsl();(new j.j).to(this.rings[e].hsl,.3,{x:i[0],y:i[1],z:i[2],ease:j.f.easeOut}).to(this.rings[e].hsl,.2,{x:this.rings[e].originalColor.x,y:this.rings[e].originalColor.y,z:this.rings[e].originalColor.z,delay:2,ease:j.f.easeOut})}(new j.j).to(this.rings[e],2,{gaussIt:0,weightIn:.3,osc:.2,ease:j.h.ease.config({template:j.c.easeNone,strength:.3,points:3,taper:"none",randomize:!0,clamp:!1})}).to(this.rings[e],2,{gaussIt:.98,weightIn:1,osc:.06,ease:j.g.easeOut}),(new j.j).to(this.rings[e].scale,.3,{x:1.1+(this.rings.length-e)/500,y:1.1+(this.rings.length-e)/500,delay:e/this.rings.length/2/2,ease:j.a.easeOut.config(1.7)}).to(this.rings[e].scale,.3,{x:1,y:1,delay:1.6+(this.rings.length-e)/this.rings.length/2/2,ease:j.a.easeOut.config(1.7)})}(new j.j).eventCallback("onComplete",function(){k.mood=M.RESET}).fromTo(this,.3,{timeInc:this.timeInc},{timeInc:.3,ease:j.f.easeOut}).to(this,.2,{timeInc:.01,delay:1.65,ease:j.f.easeIn})},reset:function(){this.setOriginalRingChroma();for(var t=0;t<this.rings.length;t++)(new j.j).to(this.rings[t].hsl,.3,{x:this.rings[t].originalColor.x,y:this.rings[t].originalColor.y,z:this.rings[t].originalColor.z,ease:j.f.easeOut})},snooze:function(){for(var t=[null,null,null,D.a.hsv(165,.98,1),D.a.hsv(179,.95,.91),D.a.hsv(192,1,1),D.a.hsv(205,.95,.91),D.a.hsv(218,.95,1)],e=0;e<this.rings.length;e++){if(t[e]){var i=t[e].hsl();(new j.j).to(this.rings[e].hsl,.4,{x:i[0],y:i[1],z:i[2],ease:j.f.easeOut})}new j.j({repeat:3}).to(this.rings[e],2,{gaussIt:0,weightIn:.3,osc:.2,ease:j.h.ease.config({template:j.c.easeNone,strength:.3,points:3,taper:"none",randomize:!0,clamp:!1})}).to(this.rings[e],2,{gaussIt:.98,weightIn:1,osc:.06,ease:j.g.easeOut}),(new j.j).to(this.rings[e].scale,.3,{x:1.1+(this.rings.length-e)/500,y:1.1+(this.rings.length-e)/500,delay:e/this.rings.length/2/2,ease:j.a.easeOut.config(1.7)}).to(this.rings[e].scale,.3,{x:1,y:1,delay:1.6+(this.rings.length-e)/this.rings.length/2/2,ease:j.a.easeOut.config(1.7)})}(new j.j).eventCallback("onComplete",function(){k.mood=M.RESET}).repeat(3).fromTo(this,.3,{timeInc:this.timeInc},{timeInc:.3,ease:j.f.easeOut}).to(this,.2,{timeInc:.01,delay:1.65,ease:j.f.easeIn})},sadness:function(){for(var t=1.5,e=0;e<this.rings.length;e++){var i=new j.j,s=D.a.hsl(this.rings[e].originalColor.x,this.rings[e].originalColor.y,this.rings[e].originalColor.z).desaturate(1).hsl();i.to(this.rings[e].hsl,.3,{x:s[0],y:s[1],z:s[2],ease:j.f.easeOut}).to(this.rings[e].hsl,.2,{x:this.rings[e].originalColor.x,y:this.rings[e].originalColor.y,z:this.rings[e].originalColor.z,delay:2.5,ease:j.f.easeOut}),(i=new j.j).to(this.rings[e].scale,t,{x:.8+.03*-e,y:.8+.03*-e,ease:j.b.easeOut.config(1,.3),delay:(1-e/this.rings.length)/2}).to(this.rings[e].scale,1,{x:1,y:1,delay:1,ease:j.g.easeOut}),(new j.j).to(this.rings[e],t,{gaussIt:.2,theta:0,ease:j.b.easeOut.config(1,.3)}).to(this.rings[e],1,{gaussIt:.98,theta:.01*e,delay:1,ease:j.b.easeOut.config(1,.3)})}new j.j({onComplete:function(){this.stateRotation=0}.bind(this)}).to(this,t,{stateRotation:1.5+Math.random(),ease:j.f.easeOut}).to(this,1,{stateRotation:3,delay:1,ease:j.f.easeOut}),(new j.j).eventCallback("onComplete",function(){k.mood=M.RESET}).to(this,t,{timeInc:.002,ease:j.f.easeOut}).to(this,1,{timeInc:.01,ease:j.f.easeOut})},love:function(){for(var t=0;t<this.rings.length;t++){(new j.j).to(this.rings[t].scale,.2,{x:1.1,y:1.1,ease:j.f.easeOut}).to(this.rings[t].scale,1.2,{x:1,y:1,delay:1.57,ease:j.b.easeOut.config(1,.4)}),(new j.j).to(this.rings[t].position,.2,{x:.05*p(2*Math.random()*y),y:.05*d(2*Math.random()*y),ease:j.f.easeOut}).to(this.rings[t].position,1.2,{x:0,y:0,delay:1.57,ease:j.b.easeOut.config(1,.4)}),(new j.j).to(this.rings[t],.1,{gaussIt:.1,weightIn:.5,intensity:1,osc:.1,theta:Math.random()*this.rings[t].seed.z,ease:j.f.easeOut}).to(this.rings[t],1.2,{gaussIt:.98,weightIn:1,intensity:.21,osc:.06,theta:.01*t,ease:j.f.easeOut,delay:1.55})}var e=new j.j({onComplete:function(){this.stateRotation=0}.bind(this)});e.to(this,1.2,{stateRotation:-1,ease:j.f.easeOut}),e.to(this,2,{stateRotation:0,ease:j.f.easeInOut}),(new j.j).eventCallback("onComplete",function(){k.mood=M.RESET}).to(this,.2,{timeInc:.1,ease:j.f.easeOut}).to(this,1,{timeInc:.01,delay:3,ease:j.f.easeOut})},content:function(){for(var t=[null,null,null,D.a.hsv(165,.98,1),D.a.hsv(179,.95,.91),D.a.hsv(192,1,1),D.a.hsv(205,.95,.91),D.a.hsv(218,.95,1)],e=0;e<this.rings.length;e++){if(t[e]){var i=t[e].hsl();(new j.j).to(this.rings[e].hsl,.4,{x:i[0],y:i[1],z:i[2],ease:j.f.easeOut}).to(this.rings[e].hsl,.4,{x:this.rings[e].originalColor.x,y:this.rings[e].originalColor.y,z:this.rings[e].originalColor.z,delay:2.5,ease:j.f.easeOut})}(new j.j).to(this.rings[e].scale,.2,{x:1.1,y:1.1,ease:j.f.easeOut}).to(this.rings[e].scale,1.2,{x:1,y:1,delay:1.57,ease:j.b.easeOut.config(1,.4)}),(new j.j).to(this.rings[e].position,.2,{x:.05*p(2*Math.random()*y),y:.05*d(2*Math.random()*y),ease:j.f.easeOut}).to(this.rings[e].position,1.2,{x:0,y:0,delay:1.57,ease:j.b.easeOut.config(1,.4)}),(new j.j).to(this.rings[e],.1,{gaussIt:.1,weightIn:.5,intensity:1,osc:.1,theta:Math.random()*this.rings[e].seed.z,ease:j.f.easeOut}).to(this.rings[e],1.2,{gaussIt:.98,weightIn:1,intensity:.21,osc:.06,theta:.01*e,ease:j.f.easeOut,delay:1.55})}var s=new j.j({onComplete:function(){this.stateRotation=0}.bind(this)});s.to(this,2.4,{stateRotation:-1,ease:j.f.easeOut}),s.to(this,.8,{stateRotation:0,ease:j.f.easeOut}),(new j.j).eventCallback("onComplete",function(){k.mood=M.RESET}).to(this,.2,{timeInc:.1,ease:j.f.easeOut}).to(this,1,{timeInc:.01,delay:3,ease:j.f.easeOut})},apathy:function(){for(var t=0;t<this.rings.length;t++){var e=new j.j,i=D.a.hsl(this.rings[t].originalColor.x,this.rings[t].originalColor.y,this.rings[t].originalColor.z).desaturate(3).hsl();e.to(this.rings[t].hsl,.3,{x:i[0],y:i[1],z:i[2],ease:j.f.easeOut}).to(this.rings[t].hsl,.2,{x:this.rings[t].originalColor.x,y:this.rings[t].originalColor.y,z:this.rings[t].originalColor.z,delay:3,ease:j.f.easeOut}),(new j.j).to(this.rings[t],2,{gaussIt:.1,weightIn:.8,shadowSpread:.03,theta:Math.random()*this.rings[t].seed.z,ease:j.f.easeOut}).to(this.rings[t],2,{gaussIt:.98,weightIn:1,shadowSpread:.01,theta:.01*t,ease:j.f.easeOut,delay:1})}(new j.j).eventCallback("onComplete",function(){k.mood=M.RESET}).to(this,.5,{timeInc:0,ease:j.f.easeOut}).to(this,2,{timeInc:.01,delay:1.5,ease:j.f.easeOut})},tap:function(){for(var t=0;t<this.rings.length;t++)(new j.j).eventCallback("onComplete",function(){k.mood=M.RESET}).to(this.rings[t].scale,.1,{x:.9,y:.9,ease:j.b.easeOut.config(1,.3),delay:(this.rings.length-t)/this.rings.length/20}).to(this.rings[t].scale,.1,{x:.8,y:.8,ease:j.b.easeOut.config(1,.3),delay:(this.rings.length-t)/this.rings.length/20}).to(this.rings[t].scale,.15,{x:.75,y:.75}).to(this.rings[t].scale,1.1,{x:1,y:1,ease:j.b.easeOut.config(1,.3),delay:t/this.rings.length/5})},pinch:function(){j.l.to(this.scale,1.9,{x:1,y:1,ease:j.b.easeOut.config(1,.4)})},listening:function(){k.isListening=!0,k.listenTls=[];for(var t=0;t<this.rings.length;t++){this.rings[t];var e=-y/12-.001*t;k.listenTls[t]=new j.j,k.listenTls[t].to(this.rings[t],1,{theta:e,gaussIt:.8,weightIn:.6,intensity:.3,osc:.14,ease:j.g.easeOut,delay:(this.rings.length-t)/this.rings.length/2})}k.listenTl2=new j.j({onComplete:function(){k.isListening=!1}}),k.listenTl2.to(this,1,{timeInc:.05,ease:j.f.easeOut})},listeningEnd:function(){if(k.isListening){for(var t=0;t<this.rings.length;t++)this.listenTls[t].stop();k.listenTl2.stop(),k.isListening=!1}for(var e=0;e<this.rings.length;e++){(new j.j).eventCallback("onComplete",function(){k.mood=M.RESET}).to(this.rings[e],.4,{gaussIt:.98,weightIn:1,intensity:.21,osc:.06,delay:(this.rings.length-e)/this.rings.length/20}),(new j.j).to(this.rings[e],1,{theta:.01*e,delay:(this.rings.length-e)/this.rings.length/20,ease:j.b.easeOut.config(1,.8)})}(new j.j).to(this,.4,{timeInc:.01,ease:j.f.easeOut})},question:function(){for(var t=0;t<this.rings.length;t++){new j.j({onComplete:function(){k.mood=M.RESET}}).to(this.rings[t].scale,.4,{x:1+.01*(t-this.rings.length),y:1+.01*(t-this.rings.length),ease:j.f.easeOut}).to(this.rings[t].scale,.6,{x:1,y:1,delay:.4,ease:j.b.easeOut.config(1,.4)}),(new j.j).to(this.rings[t].position,.4,{x:0*p(2*Math.random()*y),y:.1*d(2*Math.random()*y),ease:j.f.easeOut}).to(this.rings[t].position,.6,{x:0,y:0,delay:.4,ease:j.b.easeOut.config(1,.4)}),(new j.j).to(this.rings[t],.4,{gaussIt:.1,weightIn:.5,intensity:1,osc:.1,ease:j.f.easeOut}).to(this.rings[t],.6,{gaussIt:.98,weightIn:1,intensity:.21,osc:.06,ease:j.f.easeOut,delay:.4}),(new j.j).to(this.rings[t],.4,{theta:Math.random(),ease:j.f.easeOut}).to(this.rings[t],.6,{theta:.01*t,delay:.4,ease:j.f.easeOut})}(new j.j).to(this,.4,{timeInc:.1,ease:j.f.easeOut}).to(this,.6,{timeInc:.01,delay:.4,ease:j.f.easeOut})},shake:function(){for(var t=0;t<this.rings.length;t++)(new j.j).to(this.rings[t],.6,{gaussIt:0,weightIn:.1,intensity:3,osc:.1,theta:Math.random()/2,ease:j.f.easeOut}).to(this.rings[t],.3,{gaussIt:.98,weightIn:1,intensity:.05,osc:.06,theta:.01*t,delay:.3,ease:j.f.easeOut});(new j.j).eventCallback("onComplete",function(){k.mood=M.RESET}).to(this,1,{timeInc:.5,ease:j.f.easeOut}).to(this,1,{timeInc:.01,delay:0,ease:j.f.easeOut})},upset:function(){for(var t=1.5,e=0;e<this.rings.length;e++){(new j.j).to(this.rings[e].scale,t,{x:.8+.03*-e,y:.8+.03*-e,ease:j.b.easeOut.config(1,.3),delay:(1-e/this.rings.length)/2}).to(this.rings[e].scale,1,{x:1,y:1,delay:1,ease:j.g.easeOut}),(new j.j).to(this.rings[e],t,{gaussIt:.2,theta:0,ease:j.b.easeOut.config(1,.3)}).to(this.rings[e],1,{gaussIt:.98,theta:.01*e,delay:1,ease:j.b.easeOut.config(1,.3)}),(new j.j).to(this.rings[e].hsl,.3,{y:.2,ease:j.f.easeOut}).to(this.rings[e].hsl,.2,{y:this.rings[e].originalColor.y,delay:2,ease:j.f.easeOut})}(new j.j).to(this,t,{rotation:1.5+Math.random(),ease:j.f.easeOut}).to(this,1,{rotation:3,delay:1,ease:j.f.easeOut}),(new j.j).eventCallback("onComplete",function(){k.mood=M.RESET}).to(this,t,{timeInc:.002,ease:j.f.easeOut}).to(this,1,{timeInc:.01,ease:j.f.easeOut})},no:function(){for(var t=0;t<this.rings.length;t++){(new j.j).to(this.rings[t],2,{gaussIt:.1,weightIn:.8,shadowSpread:.03,theta:Math.random()*this.rings[t].seed.z,ease:j.f.easeOut}).to(this.rings[t],2,{gaussIt:.98,weightIn:1,shadowSpread:.01,theta:.01*t,ease:j.f.easeOut,delay:1}),(new j.j).to(this.rings[t].hsl,.3,{y:.2,ease:j.f.easeOut}).to(this.rings[t].hsl,.2,{y:this.rings[t].originalColor.y,delay:2,ease:j.f.easeOut})}(new j.j).eventCallback("onComplete",function(){k.mood=M.RESET}).to(this,.5,{timeInc:0,ease:j.f.easeOut}).to(this,2,{timeInc:.01,delay:1.5,ease:j.f.easeOut})}},A=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.parent=e,this.geoData=new R.b,this.gauss=[];for(var i=[],s=0;s<3*this.parent.parent.ringRes+1;s++)i.push(0,0,10*this.parent.id);this.geoData.addAttribute("position",new R.a(new Float32Array(i),3));for(var n=[],a=0;a<this.parent.parent.ringRes;a++)n.push(0,a,a+1);for(var o=0;o<this.parent.parent.ringRes-1;o++)n.push(this.parent.parent.ringRes+1+o,2*this.parent.parent.ringRes+1+o,this.parent.parent.ringRes+2+o,this.parent.parent.ringRes+2+o,2*this.parent.parent.ringRes+1+o,2*this.parent.parent.ringRes+2+o);n.push(0,this.parent.parent.ringRes,1,2*this.parent.parent.ringRes,3*this.parent.parent.ringRes,this.parent.parent.ringRes+1,this.parent.parent.ringRes+1,3*this.parent.parent.ringRes,2*this.parent.parent.ringRes+1),this.geoData.setIndex(n);for(var r=[],h=0;h<this.parent.parent.ringRes+1;h++)r.push(0,0,0,1);for(var l=this.parent.parent.ringRes+1;l<2*this.parent.parent.ringRes+1;l++)r.push(this.parent.shadowColor,this.parent.shadowColor,this.parent.shadowColor,this.parent.shadowIntensity);for(var g=2*this.parent.parent.ringRes+1;g<3*this.parent.parent.ringRes+1;g++)r.push(this.parent.shadowColor,this.parent.shadowColor,this.parent.shadowColor,0);this.geoData.addAttribute("color",new R.a(new Float32Array(r),4));for(var u=[],c=0;c<3*this.parent.parent.ringRes+1;c++)u.push(0,0);this.geoData.addAttribute("uv",new R.a(new Float32Array(u),2));for(var f=[],p=0;p<this.parent.parent.ringRes+1;p++)f.push(0);for(var d=this.parent.parent.ringRes+1;d<3*this.parent.parent.ringRes+1;d++)f.push(1);this.geoData.addAttribute("mat",new R.a(new Float32Array(f),1)),this.setGauss()}return function(t,e,i){e&&a(t.prototype,e),i&&a(t,i)}(t,[{key:"setGauss",value:function(){for(var t=Math.round,e=t(this.parent.parent.ringRes*this.parent.gaussAmplitude),i=0;i<=e;i++)this.gauss[i]=(d(2*y*(i/e-.25))+1)/2+.1;for(var s=0;s<t(this.parent.parent.ringRes-e)/2;s++)this.gauss.unshift(.1);for(var n=this.gauss.length;n<this.parent.parent.ringRes;n++)this.gauss.push(.1)}},{key:"step",value:function(t){this.points=[],0<this.parent.id&&(this.oldPoints=this.parent.parent.rings[this.parent.id-1].ringGeometry.points);var e=this.parent.color.gl(),i=this.parent.color.darken(.5).gl();this.geoData.attributes.color.setXYZ(0,i[0],i[1],i[2]);for(var s=0;s<this.parent.parent.ringRes;s++){var n=new R.h(p(2*y*s/this.parent.parent.ringRes),d(2*y*s/this.parent.parent.ringRes)),a=(n.x+this.parent.id/10)/(1/this.parent.intensity),o=(n.y+t)/(1/this.parent.frequency),r=(this.parent.parent.simplex.noise2D(a,o)+1)/2*this.parent.osc;r*=1-(1-this.gauss[s])*this.parent.gaussIt;var h=new R.h(n.x*(1-r),n.y*(1-r));0===this.parent.id?this.points.push(h):this.points.push(this.oldPoints[s].sub(n.clone().multiplyScalar(r))),this.points[s]=h.clone().add(this.points[s].clone().sub(h.clone()).multiplyScalar(this.parent.weightIn)),this.geoData.attributes.color.setXYZ(s+1,e[0],e[1],e[2]),this.geoData.attributes.uv.setXY(s+1,this.points[s].x,this.points[s].y),this.geoData.attributes.uv.setXY(this.parent.parent.ringRes+s+1,this.points[s].x,this.points[s].y),this.geoData.attributes.uv.setXY(2*this.parent.parent.ringRes+s+1,this.points[s].x+.1*n.x,this.points[s].y+.1*n.y),this.geoData.attributes.position.setXY(s+1,this.points[s].x,this.points[s].y),this.geoData.attributes.position.setXY(this.parent.parent.ringRes+s+1,this.points[s].x,this.points[s].y),this.geoData.attributes.position.setXY(2*this.parent.parent.ringRes+s+1,this.points[s].x+n.x*this.parent.shadowSpread,this.points[s].y+n.y*this.parent.shadowSpread)}for(var l=this.parent.parent.ringRes+1;l<2*this.parent.parent.ringRes+1;l++)this.geoData.attributes.color.setXYZW(l,this.parent.shadowColor,this.parent.shadowColor,this.parent.shadowColor,this.parent.shadowIntensity);for(var g=2*this.parent.parent.ringRes+1;g<3*this.parent.parent.ringRes+1;g++)this.geoData.attributes.color.setXYZW(g,this.parent.shadowColor,this.parent.shadowColor,this.parent.shadowColor,0);this.geoData.attributes.color.needsUpdate=!0,this.geoData.attributes.position.needsUpdate=!0}}]),t}(),P=function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.parent=e,this.matData=new R.g({uniforms:{tx:{value:this.parent.parent.texture},id:{value:this.parent.id},opacity:{value:1}},vertexShader:"attribute vec4 color;\nattribute float mat;\nvarying vec4 vColor;\nvarying vec2 vUv;\nvarying float vMat;\n\nvoid main() {\n  vUv = uv;\n  vMat = mat;\n  vColor = color;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:"varying vec4 vColor;\nvarying vec2 vUv;\nvarying float vMat;\n\nuniform sampler2D tx;\nuniform float id;\nuniform float opacity;\n\nvoid main() {\n  vec4 nt1 = texture2D( tx, ( vUv + vec2( 1.0, 1.0 ) ) * 0.2 );\n  vec4 nt = texture2D( tx, ( vUv + vec2( 1.2, 1.2 ) ) * 0.2 );\n  vec4 color = vColor;\n  if( vMat == 0.0 ) color.rgb -=  nt1.r * 0.05;\n  color.a = vColor.a * opacity;\n  if( vMat == 1.0 ) color.a *= 0.5 + nt.r * 0.5;\n  gl_FragColor = color;\n}",transparent:!0})},N=function(){function t(e,i){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.parent=e,this.id=i,this.seed=new R.i(2*(Math.random()-.5),2*(Math.random()-.5),2*(Math.random()-.5)),this.osc=.2,this.intensity=1,this.frequency=.2,this.gaussIt=0,this.weightIn=0,this.shadowSpread=.01,this.shadowIntensity=.15,this.shadowColor=0,this.theta=Math.random(),this.gaussAmplitude=.3,this.opacity=0,this.color=D.a.hsl(0,0,0),this.hsl=new R.i(0,0,0),this.scaleInc=new R.i(0,0,0),this.scale=new R.i(1,1,1),this.position=new R.i(0,0,0),this.easingFactor=0,this.ringGeometry=new A(this),this.ringMaterial=new P(this),this.mesh=new R.c(this.ringGeometry.geoData,this.ringMaterial.matData),this.translationGroup=new R.d,this.rotationGroup=new R.d,this.rotationGroup.add(this.translationGroup),this.translationGroup.add(this.mesh),this.parent.stateRotationGroup.add(this.rotationGroup)}return function(t,e,i){e&&o(t.prototype,e),i&&o(t,i)}(t,[{key:"step",value:function(t){this.ringGeometry.step(t),this.color=D.a.hsl(this.hsl.x,this.hsl.y,this.hsl.z),this.rotationGroup.rotation.z=this.theta*y*2,this.rotationGroup.scale.set(this.scale.x+this.scaleInc.x,this.scale.y+this.scaleInc.y,1),this.translationGroup.position.set(this.position.x,this.position.y,this.position.z),this.ringMaterial.matData.uniforms.opacity.value=this.opacity}}]),t}(),G=function(){function t(e,i,s){var n=this;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),Object.assign(this,_),this.settings=i||{},this.texture=s,this.ringCount=this.settings.ringCount||8,this.ringRes=this.settings.ringRes||256,this.position=this.settings.position||new R.i(0,0,0),this.rotation=this.settings.rotation||0,this.stateRotation=this.settings.stateRotation||0,this.scale=this.settings.scale||new R.i(1,1,1),this.timeInc=this.settings.timeInc||.005,this.radius=this.settings.radius||300,this.modifierTime=0,this.modifierTimestep=0,this.colorScheme=0,this.time=0,this.rotationSpeed=0,this.simplex=new T.a(Math.random),this.stateRotationGroup=new R.d,this.group=new R.d,this.group.add(this.stateRotationGroup),e.add(this.group),this.rings=[];for(var a=0;a<this.ringCount;a++)this.rings.push(new N(this,a));this.autoRunDisposer=Object(x.a)(function(){n.setOriginalRingChroma()})}return function(t,e,i){e&&r(t.prototype,e),i&&r(t,i)}(t,[{key:"componentWillUnmount",value:function(){this.autoRunDisposer()}},{key:"setOriginalRingChroma",value:function(){for(var t,e=function(){var t=D.a.scale(["#4000b2","7d28e7"]).mode("lch"),e=D.a.scale(["#ff0000","#009ade"]).mode("lch"),i=[t(.5),e(.5)];return["".concat(i[0]),"".concat(i[1])]}(),i=D.a.blend(e[0],e[1],"overlay"),s=0;s<this.ringCount;s++)t=i.darken(s-3.5),this.rings[s].originalColor=new R.i(t.hsl()[0],t.hsl()[1],t.hsl()[2]),this.rings[s].hsl=this.rings[s].originalColor;if(this.settings.glow){for(var n,a=["#C3C3C3","#DADADA","#FDFDFD","#9E9EFF","#A9A9FF","#B9B9FF","#DCDCFF","#DCFFFF"],o=0;o<a.length;o++)n=D()(a[o]).hsl(),this.rings[o].originalColor=new R.i(n[0]||0,n[1],n[2]),this.rings[o].hsl=this.rings[o].originalColor;this.rings[0].shadowColor=1,this.rings[0].shadowSpread=.1,this.rings[0].shadowIntensity=.3}}},{key:"step",value:function(){this.group.rotation.z=this.rotation*y*2,this.stateRotationGroup.rotation.z=this.stateRotation*y*2,this.group.position.set(this.position.x,this.position.y,this.position.z),this.group.scale.set(this.radius*this.scale.x,this.radius*this.scale.y,this.scale.z),this.time+=this.timeInc,this.modifierTime+=this.modifierTimestep;for(var t=0;t<this.rings.length;t++)this.rings[t].step(this.time)}}]),t}();i.d(e,"default",function(){return X});var Y,F,L=Object(C.a)("[PERSONA]"),X=(Y=function(t){function e(){var t,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var s=arguments.length,n=Array(s),a=0;a<s;a++)n[a]=arguments[a];return function(t,e,i,s){i&&Object.defineProperty(t,e,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(s):void 0})}(i=function(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?f(t):e}(this,(t=u(e)).call.apply(t,[this].concat(n))),"oldState",F,f(f(i))),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(e,E.a),function(t,e,i){e&&l(t.prototype,e),i&&l(t,i)}(e,[{key:"_setup",value:function(t){g(u(e.prototype),"_setup",this).call(this,t);var i=t.radius||200,s=2.5*i,n=2.5*i;this._scene=new R.f,this._camera=new R.e(-s/2,s/2,n/2,-n/2,-1,1e3),this._camera.position.z=100,this._renderer=new R.j({alpha:!0,antialias:!0}),this._renderer.setSize(s,n,!1),this._el.appendChild(this._renderer.domElement),this._persona=new G(this._scene,{ringRes:80,radius:i,glow:!1},null),Object(x.a)(this._switchMood.bind(this)),this.step=this.step.bind(this),this.step(),k.mood=M.INIT}},{key:"setSize",value:function(t,e){var i=Math.min(t,e),s=this._renderer.domElement;e>i?j.k.set(s,{width:i,height:i,x:0,y:(e-i)/2}):j.k.set(s,{width:i,height:i,x:(t-i)/2,y:0})}},{key:"step",value:function(t){requestAnimationFrame(this.step),this._stepPersona(t),this._renderer.render(this._scene,this._camera)}},{key:"_switchMood",value:function(){if(k.mood!==this.oldState)if(L.log("_switchMood: state changed",this.oldState," ===> ",k.mood),this.oldState=k.mood,k.mood===M.LISTENING_END)this._persona.listeningEnd();else{var t=k.mood.toLowerCase(),e=this._persona[t];e||(e=this._persona[M.IDLE]),(e=e.bind(this._persona))()}}},{key:"_stepPersona",value:function(t){try{this._persona.step(t)}catch(t){console.error(t)}}},{key:"hey",value:function(){k.mood=M.HEY}},{key:"joy",value:function(){k.mood=M.JOY}},{key:"love",value:function(){k.mood=M.LOVE}},{key:"listening",value:function(){k.mood=M.LISTENING}},{key:"random",value:function(){var t=Object.keys(M),e=Math.floor(Math.random()*t.length);k.mood=t[e]||M.IDLE}},{key:"sadness",value:function(){k.mood=M.SADNESS}},{key:"surprise",value:function(){k.mood=M.SURPRISE}}]),e}(),F=function(t,e,i,s,n){var a={};return Object.keys(s).forEach(function(t){a[t]=s[t]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=i.slice().reverse().reduce(function(i,s){return s(t,e,i)||i},a),n&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(n):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(t,e,a),a=null),a}(Y.prototype,"oldState",[x.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return k.mood}}),Y)}}]);