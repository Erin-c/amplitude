(function(t){function e(e){for(var a,o,r=e[0],l=e[1],d=e[2],c=0,h=[];c<r.length;c++)o=r[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,d||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,r=1;r<i.length;r++){var l=i[r];0!==n[l]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},n={app:0},s=[];function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var u=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("85ec"),n=i.n(a);n.a},"1a39":function(t,e,i){t.exports=i.p+"img/sound-off.595cf036.png"},"1aa4":function(t,e,i){"use strict";var a=i("3e02"),n=i.n(a);n.a},"242f":function(t,e,i){t.exports=i.p+"img/infobutton.984943d3.png"},"2b3c":function(t,e,i){},"2e7a":function(t,e,i){"use strict";var a=i("9a67"),n=i.n(a);n.a},"3e02":function(t,e,i){},"3eec":function(t,e,i){t.exports=i.p+"img/soundicon-off.c0e3b9ea.png"},"4a86":function(t,e,i){"use strict";var a=i("98d3"),n=i.n(a);n.a},"562b":function(t,e,i){t.exports=i.p+"img/sound-on.13adb96a.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("d3b7"),i("ac1f"),i("3ca3"),i("841c"),i("ddb0"),i("2b3d"),i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",attrs:{id:"app"}},[i("h1",{staticClass:"title",attrs:{"aria-label":"A sinusoidal wave is smooth curve that goes up and down repeatedly; it has a series of high points and low points called crests and troughs. A horizontal line marked 0 crosses the center of the screen and the center of the wave. The vertical axis ranges from -10 to 10. Use the slider to adjust the amplitude of the wave. See how the resulting waveform changes. The wavelength and frequency remain the same as amplitude changes."}},[t._v(" "+t._s(this.$uiText.title[this.$language()])+" ")]),i("Buttons",{attrs:{localMute:t.mute},on:{sendModeToApp:t.onReceiveMode}}),i("div",{staticClass:"mute-container"},[i("input",{staticClass:"mute",attrs:{id:"mute-button",type:"image",src:t.muteSrc,"aria-label":"Mute Audio"},on:{click:function(e){return t.changeMute()}}})]),i("Ticks"),i("Graph",{attrs:{localAmplitude:t.amplitude,localMode:t.mode}}),i("VertSlider",{attrs:{localMode:t.mode,localMute:t.mute},on:{sendValToApp:t.onReceiveVal}}),i("div",{staticClass:"disclaimer"},[t._v(" *"+t._s(this.$uiText.disclaimer[this.$language()])+" ")]),i("Computations",{attrs:{localAmplitude:t.amplitude,localFrequency:t.frequency,localMode:t.mode}}),i("Hints",{attrs:{localMode:t.mode,localMute:t.mute}})],1)},s=[],o=(i("466d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"amp-types",attrs:{role:"radiogroup"}},[i("label",[i("input",{staticClass:"active",attrs:{id:"waveform",type:"radio",role:"radio",name:"mode","aria-label":"change mode to waveform","aria-pressed":"true",checked:""},on:{click:function(e){return t.changeMode(e.target.id)}}}),i("img",{staticClass:"mode",attrs:{id:"waveform-image",src:t.waveform,alt:"Change to waveform mode. The wavelength is fixed at 9 meters and frequency is fixed at 2 hertz. The slider ranges from 1 to 10."}})]),i("label",{staticClass:"button-label",attrs:{for:"waveform"}},[t._v(t._s(this.$uiText.buttons[this.$language()][0]))]),i("label",[i("input",{attrs:{id:"sound",type:"radio",role:"radio",name:"mode","aria-label":"change mode to sound","aria-pressed":"false"},on:{click:function(e){return t.changeMode(e.target.id)}}}),i("img",{staticClass:"mode",attrs:{id:"sound-image",src:t.sound,alt:"Change to sound mode."}})]),i("label",{staticClass:"button-label",attrs:{for:"sound"}},[t._v(t._s(this.$uiText.buttons[this.$language()][1]))]),i("label",[i("input",{attrs:{id:"light",type:"radio",role:"radio",name:"mode","aria-label":"change mode to light","aria-pressed":"false"},on:{click:function(e){return t.changeMode(e.target.id)}}}),i("img",{staticClass:"mode",attrs:{id:"light-image",src:t.light,alt:"Change to light mode. The wavelength is fixed at 577 nanometers and frequency is fixed at 520 trillion hertz. The slider ranges from zero (dimmer) to ten (brighter). On the left side of the screen, there is a display of the waveform. On the right side, there is a drawing of a dog sleeping on the floor of a room with one lamp."}})]),i("label",{staticClass:"button-label",attrs:{for:"light"}},[t._v(t._s(this.$uiText.buttons[this.$language()][2]))])])}),r=[],l=(i("caad"),i("96cf"),i("1da1")),d={props:{localMute:Boolean},watch:{localMute:function(t,e){this.isMuted=t}},name:"Buttons",data:function(){return{waveform:i("c90c"),sound:i("1a39"),light:i("865f"),isMuted:!1,gainNode:""}},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,n,s,o,r,l,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:("AudioContext"in window||"webkitAudioContext"in window)&&(a=function(t,e,i){var a=o.createBufferSource();a.buffer=t,i.connect(o.destination),a.connect(i),i.gain.value=e?0:2,a.start()},n=i("c3c2"),s=window.AudioContext||window.webkitAudioContext,o=new s,t.gainNode=o.createGain(),r=document.querySelector("#waveform"),l=document.querySelector("#sound"),d=document.querySelector("#light"),window.fetch(n).then((function(t){return t.arrayBuffer()})).then((function(t){return o.decodeAudioData(t,(function(t){u=t}),(function(t){return console.error(t)}))})),r.onclick=function(){return a(u,t.isMuted,t.gainNode)},l.onclick=function(){return a(u,t.isMuted,t.gainNode)},d.onclick=function(){return a(u,t.isMuted,t.gainNode)}),document.addEventListener("keydown",(function(t){var e;void 0!=e&&clearTimeout(e);var i=[9,37,38,39,40];e=setTimeout((function(){i.includes(t.keyCode)&&("waveform"===$(":focus").attr("id")||"sound"===$(":focus").attr("id")||"light"===$(":focus").attr("id"))?$(".amp-types").addClass("focused"):$(".amp-types").removeClass("focused")}),100)}));case 2:case"end":return e.stop()}}),e)})))()},methods:{changeMode:function(t){var e=$("#"+t);if(!e.hasClass("active")){var a=$(".active").attr("id");this[a]=i("a6a8")("./"+a+"-off.png"),$(".active").attr("aria-pressed","false").removeClass("active"),e.attr("aria-pressed","true").addClass("active");var n=$(".active").attr("id");this[n]=i("662c")("./"+n+"-on.png")}this.$emit("sendModeToApp",t)}}},u=d,c=(i("725c"),i("2877")),h=Object(c["a"])(u,o,r,!1,null,null,null),m=h.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ticks"},[i("div",[t._v(" 10 ")]),i("div",[t._v(" 5 ")]),i("div",[t._v(" 0 ")]),i("div",[t._v(" -5 ")]),i("div",[t._v(" -10 ")])])}],f={name:"Ticks",data:function(){return{}}},v=f,w=(i("4a86"),Object(c["a"])(v,g,p,!1,null,null,null)),b=w.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"canvas-container",attrs:{id:"canvas-container"}},[a("img",{staticClass:"overlay",staticStyle:{display:"none"},attrs:{id:"sound-playing",src:i("ee19"),alt:"sound is playing"}}),a("canvas",{attrs:{id:"canvas",width:"850",height:"500","aria-label":t.graphDescription,"aria-live":"polite"}}),a("img",{staticStyle:{display:"none"},attrs:{id:"dog",src:i("cd49")}})])},C=[],x=(i("a9e3"),{props:{localAmplitude:Number,localFrequency:Number,localMode:String},watch:{localAmplitude:function(t,e){this.amp=t,this.drawGraph(this.ctx,this.amp,this.freq,this.mode),"waveform"===this.mode?this.graphDescription=this.amplitudeDescriptions.waveform[t]:"light"===this.mode?this.graphDescription=this.amplitudeDescriptions.light[t]:this.graphDescription=""},localMode:function(t,e){this.mode=t,"sound"===this.mode&&this.amp>0?$("#sound-playing").show():$("#sound-playing").hide(),this.drawGraph(this.ctx,this.amp,this.freq,this.mode),"waveform"===this.mode?this.graphDescription=this.amplitudeDescriptions.waveform[this.amp]:"light"===this.mode?this.graphDescription=this.amplitudeDescriptions.light[this.amp]:this.graphDescription=""}},name:"Graph",data:function(){return{amp:this.localAmplitude,amplitudeDescriptions:{waveform:["Amplitude 0: A horizontal line with an energy of 0.","Amplitude 1: A sinusoidal wave with its crests located at 1, its troughs at -1, and an energy of 1.","Amplitude 2: A sinusoidal wave with its crests located at 2, its troughs at -2, and an energy of 4.","Amplitude 3: A sinusoidal wave with its crests located at 3, its troughs at -3, and an energy of 9.","Amplitude 4: A sinusoidal wave with its crests located at 4, its troughs at -4, and an energy of 16.","Amplitude 5: A sinusoidal wave with its crests located at 5, its troughs at -5, and an energy of 25.","Amplitude 6: A sinusoidal wave with its crests located at 6, its troughs at -6, and an energy of 36.","Amplitude 7: A sinusoidal wave with its crests located at 7, its troughs at -7, and an energy of 49.","Amplitude 8: A sinusoidal wave with its crests located at 8, its troughs at -8, and an energy of 64.","Amplitude 9: A sinusoidal wave with its crests located at 9, its troughs at -9, and an energy of 81.","Amplitude 10: A sinusoidal wave with its crests located at 10, its troughs at -10, and an energy of 100."],light:["Amplitude 0: A flat horizontal line with an energy of 0. The right side of the screen is black.","Amplitude 1: A sinusoidal wave with its crests located at 1, its troughs at -1, and an energy of 1. A lamp shines faintly and the outline of the dog is barely visible.","Amplitude 2: A sinusoidal wave with its crests located at 2, its troughs at -2, and an energy of 4. A lamp emits an extremely dim yellow light and the dog is slightly visible.","Amplitude 3: A sinusoidal wave with its crests located at 3, its troughs at -3, and an energy of 9. A lamp emits a very dim yellow light, illuminating the room and dog.","Amplitude 4: A sinusoidal wave with its crests located at 4, its troughs at -4, and an energy of 16. A lamp emits a fairly dim yellow light, illuminating the room and dog.","Amplitude 5: A sinusoidal wave with its crests located at 5, its troughs at -5, and an energy of 25. A lamp emits dim yellow light, illuminating the room and dog.","Amplitude 6: A sinusoidal wave with its crests located at 6, its troughs at -6, and an energy of 36. A lamp emits yellow light, illuminating the room and dog.","Amplitude 7: A sinusoidal wave with its crests located at 7, its troughs at -7, and an energy of 49. A lamp emits moderately bright yellow light, illuminating the room and dog.","Amplitude 8: A sinusoidal wave with its crests located at 8, its troughs at -8, and an energy of 64. A lamp emits bright yellow light, illuminating the room and dog.","Amplitude 9: A sinusoidal wave with its crests located at 9, its troughs at -9, and an energy of 81. A lamp emits very bright yellow light, illuminating the room and dog.","Amplitude 10: A sinusoidal wave with its crests located at 10, its troughs at -10, and an energy of 100. A lamp emits an extremely bright yellow light, illuminating the room and dog."]},graphDescription:"",freq:this.localFrequency,mode:this.localMode,c:"",ctx:"",numLines:5,startHeight:25,graphHeight:450,graphWidth:850}},mounted:function(){var t=this;this.c=document.getElementById("canvas"),this.ctx=this.c.getContext("2d"),this.graphDescription="The wavelength is fixed at 9 meters and frequency is fixed at 2 hertz. The slider ranges from 1 to 10. "+this.amplitudeDescriptions.waveform[0],this.generateBorder(this.ctx,this.mode),window.setInterval((function(){t.drawGraph(t.ctx,t.amp,t.freq,t.mode),"sound"===t.mode&&t.amp>0?$("#sound-playing").show():$("#sound-playing").hide()}),50)},methods:{generateBorder:function(t,e){t.beginPath(),t.lineWidth=2,t.strokeStyle="#FFFFFF","light"===e&&(t.moveTo(this.graphWidth/2,0),t.lineTo(this.graphWidth/2,this.graphHeight+50)),t.moveTo(0,0),t.lineTo(0,this.graphHeight+50),t.moveTo(0,0),t.lineTo(this.graphWidth,0),t.moveTo(this.graphWidth,0),t.lineTo(this.graphWidth,this.graphHeight+50),t.moveTo(0,this.graphHeight+50),t.lineTo(this.graphWidth,this.graphHeight+50),t.stroke()},drawGraph:function(t,e,i,a){t.clearRect(0,0,850,500),t.fillStyle="#0A000A",t.fillRect(0,0,850,500),this.generateBorder(t,a),this.generateGrid(t,a),this.plotSine(t,e,i,a),"light"===a&&this.addImage(t,e)},plotSine:function(t,e,i,a){var n=this.graphHeight/2/100,s=t.canvas.width,o=t.canvas.height;t.lineWidth=5,t.lineCap="round","waveform"===a&&(t.strokeStyle="#F34E17"),"sound"===a&&(t.strokeStyle="#06A7FE"),"light"===a&&(t.strokeStyle="#EAB727"),t.beginPath();var r=0,l=0,d=10*e,u=i;if("waveform"===a){u=67.5,t.moveTo(1,o/2+d*n*Math.sin(r/u));while(r<s)l=o/2+d*n*Math.sin(r/u),t.lineTo(r+1,l),r++;t.stroke()}else if("sound"===a){u=135/3.33,t.moveTo(1,o/2+d*n*Math.sin(r/u));while(r<s)l=o/2+d*n*Math.sin(r/u),t.lineTo(r+1,l),r++;t.stroke()}else{u=135/10.4,t.moveTo(1,o/2+d*n*Math.sin(r/u));while(r<s/2-3)l=o/2+d*n*Math.sin(r/u),t.lineTo(r+1,l),r++;t.stroke()}},generateGrid:function(t,e){var i;i="waveform"===e||"sound"===e?this.graphWidth-1:this.graphWidth/2-3;for(var a=0;a<this.numLines;a++){var n=this.startHeight+450*a/4;t.beginPath(),t.lineWidth=2.5,t.moveTo(0,n),t.lineTo(i,n),Math.floor(this.numLines/2)===a?(t.strokeStyle="#72639F",t.stroke()):(t.strokeStyle="#342958",t.stroke())}},addImage:function(t,e){var i=document.getElementById("dog");t.drawImage(i,this.graphWidth/2+1,0),this.addTint(t,e),this.generateBorder(t,"light")},addTint:function(t,e){var i=100-10*e,a=i/100;t.globalAlpha=a,t.beginPath(),t.fillStyle="#000000",t.fillRect(this.graphWidth/2+1,0,425,500),t.stroke(),t.globalAlpha=1}}}),A=x,T=(i("c22f"),Object(c["a"])(A,y,C,!1,null,"d239c524",null)),M=T.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"right-column"},[i("div",{staticClass:"label"},[t._v(" "+t._s(this.$uiText.title[this.$language()].toUpperCase())+" ")]),t._m(0),i("div",{staticClass:"slider-container"},[i("div",{staticClass:"fill"}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"slider",attrs:{id:"slider-vertical",type:"range",min:"0",max:"10",value:"0"},domProps:{value:t.value},on:{input:t.sendToParent,__r:function(e){t.value=e.target.value}}})])])},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"border"},[i("div",{staticClass:"label-container"},[i("div",{staticClass:"top-label"}),i("div",{staticClass:"bottom-label"})])])}],S=(i("d81d"),i("fb6a"),{props:{localMode:String,localMute:Boolean},watch:{localMode:function(t,e){this.mode=t,$(".slider-container").removeClass(e),$(".slider-container").addClass(this.mode),this.changeThumbColor(this.value,this.mode),this.labelMaxMin(),"sound"===this.mode?this.resumeSound():this.pauseSound()},localMute:function(t,e){this.isMuted=t,this.sendToParent()}},name:"VertSlider",data:function(){return{value:0,mode:this.localMode,volume:0,audioCtx:"",oscillator:"",gainNode:"",inFocus:!1,isMuted:!1}},mounted:function(){$(".slider-container").addClass(this.mode),$("head").append('<style data="test" type="text/css"></style>'),this.instantiateThumbColor(),this.drawTicks(),this.playSound()},methods:{sendToParent:function(t){var e=this.value;(e<10&&t>0||e>0&&t<0)&&(e=parseInt(e)+parseInt(t),this.value=e),this.isMuted?(this.volume=0,"sound"===this.mode&&(this.gainNode.gain.value=this.volume)):(this.volume=this.value/10,this.volume<.05&&(this.volume=0),"sound"===this.mode&&(this.gainNode.gain.value=this.volume)),document.querySelector("#slider-vertical").value=e,this.value=e,this.changeThumbColor(this.value,this.mode),this.$emit("sendValToApp",this.value)},playSound:function(){this.audioCtx=new(window.AudioContext||window.webkitAudioContext),this.oscillator=this.audioCtx.createOscillator(),this.gainNode=this.audioCtx.createGain(),this.oscillator.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination),this.oscillator.type="sine",this.oscillator.frequency.setValueAtTime(333,0),this.gainNode.gain.value=this.volume,this.oscillator.start()},pauseSound:function(){this.audioCtx.suspend()},resumeSound:function(){this.audioCtx.resume(),this.gainNode.gain.value=this.volume},drawTicks:function(){for(var t=(parseInt($(".border").css("height"))-parseInt($(".slider-container").css("height")))/2+15,e=0;e<11;e++){var i='<hr id="tick'+e+'" class="tick">',a='<div id="tick-num'+e+'" class="tick-num">'+(10-e)+"</div>",n=t+37*e;$(".border").append(i).append(a),$("#tick"+e).css("top",n),$("#tick-num"+e).css("top",n-12)}},labelMaxMin:function(){"sound"===this.mode?($(".top-label").html(this.$uiText.sliderLabels[this.$language()][0]),$(".bottom-label").html(this.$uiText.sliderLabels[this.$language()][1])):"light"===this.mode?($(".top-label").html(this.$uiText.sliderLabels[this.$language()][2]),$(".bottom-label").html(this.$uiText.sliderLabels[this.$language()][3])):($(".top-label").html(""),$(".bottom-label").html(""))},changeThumbColor:function(t,e){if("waveform"===e){var i=this.interpolateColors("rgb(27,26,69)","rgb(243,78,23)",11),a="rgb("+i[t][0]+", "+i[t][1]+", "+i[t][2]+")",n=document.querySelector('[data="test"]');n.innerHTML=".slider::-webkit-slider-thumb { background-color: "+a+";} .slider::-moz-range-thumb { background: "+a+";}"}if("sound"===e){var s=this.interpolateColors("rgb(27,26,69)","rgb(6,167,254)",11),o="rgb("+s[t][0]+", "+s[t][1]+", "+s[t][2]+")",r=document.querySelector('[data="test"]');r.innerHTML=".slider::-webkit-slider-thumb { background-color: "+o+";} .slider::-moz-range-thumb { background: "+o+";}"}if("light"===e){var l=this.interpolateColors("rgb(27,26,69)","rgb(234,183,39)",11),d="rgb("+l[t][0]+", "+l[t][1]+", "+l[t][2]+")",u=document.querySelector('[data="test"]');u.innerHTML=".slider::-webkit-slider-thumb { background-color: "+d+";} .slider::-moz-range-thumb { background: "+d+";}"}},interpolateColors:function(t,e,i){var a=1/(i-1),n=[];t=t.match(/\d+/g).map(Number),e=e.match(/\d+/g).map(Number);for(var s=0;s<i;s++)n.push(this.interpolateColor(t,e,a*s));return n},interpolateColor:function(t,e,i){arguments.length<3&&(i=.5);for(var a=t.slice(),n=0;n<3;n++)a[n]=Math.round(a[n]+i*(e[n]-t[n]));return a},instantiateThumbColor:function(t){var e=document.querySelector('[data="test"]');e.innerHTML=".slider::-webkit-slider-thumb { background-color: hsl(241, 45%, 19%); } .slider::-moz-range-thumb { background: hsl(241, 45%, 19%); }"}}}),q=S,O=(i("2e7a"),Object(c["a"])(q,k,_,!1,null,null,null)),j=O.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottom-row"},[i("div",{staticClass:"value-container"},[i("div",{staticClass:"computed-value"},[i("h2",{staticClass:"label"},[t._v(" "+t._s(this.$uiText.labels[this.$language()][0].toUpperCase())+" ")]),i("div",{staticClass:"wavelength value"},[t._v(" "+t._s(t.wavelength)+" "+t._s(t.units)+" ")])]),i("div",{staticClass:"divider"}),i("div",{staticClass:"computed-value"},[i("h2",{staticClass:"label"},[t._v(" "+t._s(this.$uiText.labels[this.$language()][1].toUpperCase())+" ")]),i("div",{staticClass:"frequency value"},[t._v(" "+t._s(t.frequency)+" "+t._s(t.freqUnits)+" ")])]),i("div",{staticClass:"divider"}),i("div",{staticClass:"computed-value"},[i("h2",{staticClass:"label"},[t._v(" "+t._s(this.$uiText.labels[this.$language()][2].toUpperCase())+" ")]),i("div",{staticClass:"energy value"},[t._v(" "+t._s(t.energy)+" ")])])])])},H=[],N={props:{localAmplitude:Number,localFrequency:Number,localMode:String},watch:{localAmplitude:function(t,e){this.amp=t,this.energy=Math.pow(this.amp,2)},localMode:function(t,e){switch(this.mode=t,this.mode){case"waveform":$(".frequency.value").css("font-size","250%"),this.frequency=2,this.freqUnits="Hz",this.wavelength=9,this.units="m";break;case"sound":$(".frequency.value").css("font-size","250%"),this.frequency=320,this.freqUnits="Hz",this.wavelength=1,this.units="m";break;case"light":$(".frequency.value").css("font-size","215%"),this.frequency=520,this.freqUnits=this.$uiText.units[this.$language()],this.wavelength=577,this.units="nm";break}$(".energy").removeClass(e),$(".energy").addClass(this.mode)}},name:"Computations",data:function(){return{amp:this.localAmplitude,mode:this.localMode,frequency:2,freqUnits:"Hz",wavelength:9,units:"m",energy:0}},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:$(".energy").addClass(t.mode);case 1:case"end":return e.stop()}}),e)})))()}},L=N,D=(i("e365"),Object(c["a"])(L,z,H,!1,null,null,null)),W=D.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hintsContainer"},[a("input",{staticClass:"hints",attrs:{id:"hints","aria-label":"more information",type:"image",src:i("242f")},on:{click:function(e){return t.showHints()}}}),a("div",{staticClass:"cover"},[a("input",{staticClass:"close",attrs:{id:"close","aria-label":"close more information",type:"image",src:i("cd5c")},on:{click:function(e){return t.hideHints()}}}),a("div",{staticClass:"hint left",attrs:{tabindex:"0"}}),a("div",{staticClass:"pointer left"}),a("div",{staticClass:"hint right",attrs:{tabindex:"0"}}),a("div",{staticClass:"pointer right"}),a("div",{staticClass:"hint bottom",attrs:{tabindex:"0"}}),a("div",{staticClass:"pointer bottom"})])])},U=[],B={props:{localMode:String,localMute:Boolean},watch:{localMode:function(t,e){this.mode=t},localMute:function(t,e){this.isMuted=t}},name:"Hints",data:function(){return{mode:this.localMode,calloutWaveform:this.$uiText.helperTextWaveform[this.$language()],calloutSound:this.$uiText.helperTextSound[this.$language()],calloutLight:this.$uiText.helperTextLight[this.$language()],isMuted:!1,gainNode:""}},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,n,s,o,r,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:$("body").on("click",(function(t){"hints"!==t.target.id&&($(".cover").hide(),$("#hints, .mode, .mute, .slider").attr("disabled",!1))})),window.addEventListener("keydown",(function(t){27===t.keyCode&&($(".cover").hide(),$("#hints, .mode, .mute, .slider").attr("disabled",!1))})),("AudioContext"in window||"webkitAudioContext"in window)&&(a=function(t,e,i){var a=o.createBufferSource();a.buffer=t,i.connect(o.destination),a.connect(i),i.gain.value=e?0:2,a.start()},n=i("7866"),s=window.AudioContext||window.webkitAudioContext,o=new s,t.gainNode=o.createGain(),r=document.querySelector("#hints"),window.fetch(n).then((function(t){return t.arrayBuffer()})).then((function(t){return o.decodeAudioData(t,(function(t){l=t}),(function(t){return console.error(t)}))})),r.onclick=function(){return a(l,t.isMuted,t.gainNode)});case 3:case"end":return e.stop()}}),e)})))()},methods:{showHints:function(){var t=$("#app").css("marginRight");$(".cover").is(":visible")||($("#hints, .mode, .mute, .slider").attr("disabled",!0),$(".cover").show().css("left",t)),"waveform"===this.mode?($(".pointer").show(),$(".hint.left").show().html(this.calloutWaveform[0]),$(".hint.right").show().html(this.calloutWaveform[1]),$(".hint.bottom").show().html(this.calloutWaveform[2])):"sound"===this.mode?($(".hint.left, .pointer.left").hide(),$(".hint.right").html(this.calloutSound),$(".hint.bottom, .pointer.bottom").hide()):($(".hint.left, .pointer.left").hide(),$(".hint.right").html(this.calloutLight),$(".hint.bottom, .pointer.bottom").hide())},hideHints:function(){$(".cover").hide(),$("#hints, .mode, .mute, .slider").attr("disabled",!1)}}},F=B,R=(i("1aa4"),Object(c["a"])(F,E,U,!1,null,null,null)),P=R.exports,G={name:"App",data:function(){return{amplitude:0,frequency:0,mode:"waveform",mute:!1,muteSrc:i("59d5")}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize)},methods:{onResize:function(){var t=window.innerWidth,e=window.innerHeight;navigator.userAgent.match(/Android/i)&&(t=window.outerWidth,e=window.outerHeight),$("body").css("width",t).css("height",e),e/t<.5622?$(".container").css("transform","translate(-50%, -50%) scale("+e/768+")"):$(".container").css("transform","translate(-50%, -50%) scale("+t/1366+")")},onReceiveVal:function(t){this.amplitude=parseInt(t)},onReceiveMode:function(t){this.mode=t},changeMute:function(){this.mute=!this.mute,this.mute?(this.muteSrc=i("3eec"),$("#mute-button").attr("aria-label","Unmute Audio")):(this.muteSrc=i("59d5"),$("#mute-button").attr("aria-label","Mute Audio"))}},components:{Buttons:m,Ticks:b,Graph:M,VertSlider:j,Computations:W,Hints:P}},I=G,V=(i("034f"),Object(c["a"])(I,n,s,!1,null,null,null)),J=V.exports,Q=i("bf32");a["a"].config.productionTip=!1,a["a"].prototype.$uiText=Q,a["a"].prototype.$language=function(){var t=window.location.search,e=new URLSearchParams(t);e.get("lang");return"english"},window.app=new a["a"]({render:function(t){return t(J)}}).$mount("#app")},"57ce":function(t,e,i){t.exports=i.p+"img/light-on.2e9ac106.png"},"59d5":function(t,e,i){t.exports=i.p+"img/soundicon-on.b0a3389f.png"},"662c":function(t,e,i){var a={"./light-on.png":"57ce","./sound-on.png":"562b","./soundicon-on.png":"59d5","./waveform-on.png":"c90c"};function n(t){var e=s(t);return i(e)}function s(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=s,t.exports=n,n.id="662c"},"725c":function(t,e,i){"use strict";var a=i("ab9b"),n=i.n(a);n.a},7866:function(t,e,i){t.exports=i.p+"media/info_button.a307b68a.mp3"},"7a98":function(t,e,i){t.exports=i.p+"img/waveform-off.2d232de3.png"},"85ec":function(t,e,i){},"865f":function(t,e,i){t.exports=i.p+"img/light-off.1b0b6f41.png"},9087:function(t,e,i){},"98d3":function(t,e,i){},"9a67":function(t,e,i){},a6a8:function(t,e,i){var a={"./light-off.png":"865f","./sound-off.png":"1a39","./soundicon-off.png":"3eec","./waveform-off.png":"7a98"};function n(t){var e=s(t);return i(e)}function s(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=s,t.exports=n,n.id="a6a8"},ab9b:function(t,e,i){},bf32:function(t){t.exports=JSON.parse('{"title":{"english":"Amplitude","spanish":"Amplitud"},"buttons":{"english":["Waveform","Sound","Light"],"spanish":["Onda","Sonido","Luz"]},"labels":{"english":["Wavelength","Frequency","Energy"],"spanish":["Longitud de onda","Frecuencia","Energía"]},"sliderLabels":{"english":["Louder","Softer","Brighter","Dimmer"],"spanish":["Más ruidoso","Más suave","Más brillante","Más oscuro"]},"units":{"english":"Trillion Hz","spanish":"Trillones de Hz"},"helperTextWaveform":{"english":["Choose to view a waveform, sound waves, or light waves","How does adjusting the amplitude change the energy of the wave?","Use the slider to adjust the amplitude of the wave. See how the resulting waveform changes."],"spanish":["Elige para ver una onda, ondas de sonido u ondas de luz","¿De qué manera cambia la energía de la onda al ajustar la amplitud?","Desliza el control para ajustar la amplitud de la onda. Observa los cambios que se producen en la onda."]},"helperTextSound":{"english":"Use the slider to adjust the amplitude of the wave. Make sure that your computer’s audio is turned on to hear sounds of different amplitude.","spanish":"Desliza el control para ajustar la amplitud de la onda. Asegúrate de que el audio de tu computadora esté activado para que puedas oír los sonidos a diferentes amplitudes."},"helperTextLight":{"english":"Use the slider to adjust the amplitude of the wave. What happens to the light as the amplitude changes?","spanish":"Desliza el control para ajustar la amplitud de la onda. ¿Qué le ocurre a la luz a medida que cambia la amplitud?"},"disclaimer":{"english":"wavelengths are not to scale","spanish":"Las longitudes de onda no están a escala."}}')},c22f:function(t,e,i){"use strict";var a=i("9087"),n=i.n(a);n.a},c3c2:function(t,e,i){t.exports=i.p+"media/navigation.f68e32ea.mp3"},c90c:function(t,e,i){t.exports=i.p+"img/waveform-on.449a74a4.png"},cd49:function(t,e,i){t.exports=i.p+"img/doggie2.b783c39d.png"},cd5c:function(t,e,i){t.exports=i.p+"img/close.19da6a10.png"},e365:function(t,e,i){"use strict";var a=i("2b3c"),n=i.n(a);n.a},ee19:function(t,e,i){t.exports=i.p+"img/sound.3ae1141d.gif"}});
//# sourceMappingURL=app-legacy.f4c57269.js.map