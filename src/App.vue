<template>
  <div id="app" class="container">
    <h1 class="title" aria-label="A sinusoidal wave is smooth curve that goes up and down repeatedly; it has a series of high points and low points called crests and troughs. A horizontal line marked 0 crosses the center of the screen and the center of the wave. The vertical axis ranges from -10 to 10. Use the slider to adjust the amplitude of the wave. See how the resulting waveform changes. The wavelength and frequency remain the same as amplitude changes.">
      {{ this.$uiText.title[this.$language()] }}
    </h1>
    <Buttons v-on:sendModeToApp="onReceiveMode" :localMute="mute"/>
		<div class="mute-container">
			<input id="mute-button" class="mute" v-on:click="changeMute()" type="image" :src="muteSrc" aria-label="Mute Audio"/>
		</div>
    <Ticks />
    <Graph :localAmplitude="amplitude" :localMode="mode"/>
    <VertSlider v-on:sendValToApp="onReceiveVal" :localMode="mode" :localMute="mute"/>
		<div class='disclaimer'> *{{ this.$uiText.disclaimer[this.$language()] }}	</div>
    <Computations :localAmplitude="amplitude" :localFrequency="frequency" :localMode="mode"/>
		<Hints :localMode="mode" :localMute="mute"/>
  </div>
</template>


<script>
import Buttons from '@/components/Buttons'
import Ticks from '@/components/Ticks'
import Graph from '@/components/Graph'
import VertSlider from '@/components/VertSlider'
import Computations from '@/components/Computations'
import Hints from '@/components/Hints'
export default {
  name: 'App',
  data(){
    return {
      amplitude: 0,
      frequency: 0,
      mode: 'waveform',
			mute: false,
			muteSrc: require('@/assets/soundicon-on.png')
    }
  },
  mounted(){
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  methods:{
		onResize(){
			let w = window.innerWidth;
			let h = window.innerHeight;
			if(navigator.userAgent.match(/Android/i)){
				w = window.outerWidth;
				h = window.outerHeight;
			}
			$('body').css('width', w).css('height', h);
			if((h / w) < 0.5622){
				$('.container').css('transform', 'translate(-50%, -50%) scale(' + (h / 768) + ')')
			}
			else{
				$('.container').css('transform', 'translate(-50%, -50%) scale(' + (w / 1366) + ')');
			}
		},
    onReceiveVal(value){

      this.amplitude = parseInt(value);
    },
    onReceiveMode(mode){
      this.mode = mode;
    },
		changeMute(){
			this.mute = !this.mute;
			if(this.mute){
				this.muteSrc = require('@/assets/soundicon-off.png');
				$('#mute-button').attr('aria-label', 'Unmute Audio');
			}
			else{
				this.muteSrc = require('@/assets/soundicon-on.png');
				$('#mute-button').attr('aria-label', 'Mute Audio');
			}
		}
  },
  components: { Buttons, Ticks, Graph, VertSlider, Computations, Hints }
}
</script>


<style lang="css">
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  font-size: 1.25em;
  overflow: auto;
  margin: 0;
}
:focus {
  outline: 3px solid orange;
}
:-moz-focusring {
  outline: 3px solid orange;
}

*{
  font-family: 'Quicksand', sans-serif;
  color: white;
}
.title{
	display: flex;
  grid-row: 1;
  grid-column: 1;
  color: white;
  font-size: 150%;
	place-self: center;
	font-weight: normal;
}

.mute-container{
	display: flex;
  grid-row: 1;
  grid-column: 4;
	justify-content: center;
}

.mute{
	place-self: center;
}

.disclaimer{
	display: flex;
	grid-row: 3;
	grid-column-start: 1;
	grid-column-end: 4;
	justify-content: flex-start;
	margin-left: 25px;
	align-self: flex-end;
	font-size: 90%;
}

.container{
  height: 768px;
  width: 1366px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  display: grid;
  overflow: hidden;
  grid-template-columns: 186px 45px 850px 285px;
  grid-template-rows: 90px 520px 158px;
}
</style>
