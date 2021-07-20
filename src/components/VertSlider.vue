<template>
  <div class="right-column">
    <div class="label">
      {{ this.$uiText.title[this.$language()].toUpperCase() }}
    </div>
    <div class="border">
      <div class="label-container">
        <div class="top-label"></div>
        <div class="bottom-label"></div>
      </div>
    </div>
    <div class="slider-container">
      <div class="fill"></div>
			<input v-model="value" v-on:input="sendToParent" id="slider-vertical" class="slider" type="range" min="0" max="10" value="0"/>
    </div>
  </div>
</template>


<script>
export default {
  props: { localMode: String, localMute: Boolean },
  watch: {
    localMode: function(newVal, oldVal) {
      this.mode = newVal;
      $('.slider-container').removeClass(oldVal);
      $('.slider-container').addClass(this.mode);
      this.changeThumbColor(this.value, this.mode);
      this.labelMaxMin();
      if(this.mode === 'sound'){
        this.resumeSound();
      }
      else{
        this.pauseSound();
      }
    },
		localMute: function(newVal, oldVal) {
			this.isMuted = newVal;
			this.sendToParent();
		}
  },
  name: 'VertSlider',
  data() {
    return {
      value: 0,
      mode: this.localMode,
      volume: 0,
      audioCtx: '',
      oscillator: '',
      gainNode: '',
			inFocus: false,
			isMuted: false
    }
  },
  mounted() {
    let thisApp = this;
		// checks if input element is in focus for keyboard accessibility
		// const slider = document.querySelector('input[type="range"]');
		// slider.addEventListener('focus', (event) => {
		// 	this.inFocus = true;
		// });
		// slider.addEventListener('blur', (event) => {
		// 	this.inFocus = false;
		// });
    // window.addEventListener('keydown', function(e) {
		// 		if(!thisApp.inFocus){
	  //      // pressed up arrow
	  //      if(e.keyCode === 38){
	  //        // thisApp.sendToParent(10);
		// 			 thisApp.sendToParent(1);
	  //      }
	  //      // pressed down arrow
	  //      else if (e.keyCode === 40) {
	  //        // thisApp.sendToParent(-10);
		// 			 thisApp.sendToParent(-1);
	  //      }
		// 	 }
    //  });
    $('.slider-container').addClass(this.mode);
    $('head').append('<style data="test" type="text/css"></style>');
    this.instantiateThumbColor();
    this.drawTicks();
    this.playSound();
  },
  methods:{
    sendToParent(addedValue) {
      // let roundedValue = (Math.round((this.value)/ 10)) * 10;
			let roundedValue = this.value;
      // make sure up and down arrow adjustments stay in range from 0-100

      // if((roundedValue < 91 && addedValue > 0) || roundedValue > 9 && addedValue < 0){
			if((roundedValue < 10 && addedValue > 0) || roundedValue > 0 && addedValue < 0){
        roundedValue = parseInt(roundedValue) + parseInt(addedValue);
        this.value = roundedValue;
      }

			if(this.isMuted){
				this.volume = 0;
				if(this.mode === 'sound'){
					this.gainNode.gain.value = this.volume;
				}
			}
			else{
				// set volume
				// this.volume = (this.value / 100);
				this.volume = this.value / 10;
				if (this.volume < 0.05){
					this.volume = 0;
				}
				if(this.mode === 'sound'){
					this.gainNode.gain.value = this.volume;
				}
			}

      document.querySelector('#slider-vertical').value = roundedValue;
      this.value = roundedValue;
      this.changeThumbColor(this.value, this.mode);
      this.$emit('sendValToApp', this.value);
    },

    playSound(){
      // create web audio api context
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      this.oscillator = this.audioCtx.createOscillator();
      this.gainNode = this.audioCtx.createGain();
      this.oscillator.connect(this.gainNode)
      this.gainNode.connect(this.audioCtx.destination);
      this.oscillator.type = 'sine';
      this.oscillator.frequency.setValueAtTime(333, 0); // value in hertz
      this.gainNode.gain.value = this.volume;
      this.oscillator.start();
    },

    pauseSound(){
      this.audioCtx.suspend();
    },

    resumeSound(){
      this.audioCtx.resume();
      this.gainNode.gain.value = this.volume;
    },

    drawTicks(){
      let yOffset = (parseInt($('.border').css('height')) - parseInt($('.slider-container').css('height'))) / 2 + 15;
      for(let i = 0; i < 11; i++){
        let div = '<hr id="tick' + i + '" class="tick">'
        let div1 = '<div id="tick-num' + i + '" class="tick-num">' + (10 - i ) + '</div>'
        let top = yOffset + (i * 37);
        $('.border').append(div).append(div1);
        $('#tick' + i).css('top', top);
        $('#tick-num' + i).css('top', (top - 12));
      }
    },

    labelMaxMin(){
      if (this.mode === 'sound'){
        $('.top-label').html(this.$uiText.sliderLabels[this.$language()][0]);
        $('.bottom-label').html(this.$uiText.sliderLabels[this.$language()][1]);
      }
      else if(this.mode === 'light'){
        $('.top-label').html(this.$uiText.sliderLabels[this.$language()][2]);
        $('.bottom-label').html(this.$uiText.sliderLabels[this.$language()][3]);
      }
      else{
        $('.top-label').html('');
        $('.bottom-label').html('');
      }
    },

    changeThumbColor(value, mode){
      if(mode === 'waveform'){
        // let gradientArray = this.interpolateColors('rgb(27,26,69)', 'rgb(243,78,23)', 101)
				let gradientArray = this.interpolateColors('rgb(27,26,69)', 'rgb(243,78,23)', 11)
        let rgb = 'rgb(' + gradientArray[value][0] + ', ' + gradientArray[value][1] + ', ' + gradientArray[value][2] + ')';

        let style = document.querySelector('[data="test"]');
				style.innerHTML = '.slider::-webkit-slider-thumb { background-color: ' + rgb + ';} .slider::-moz-range-thumb { background: ' + rgb + ';}';
      }
      if(mode === 'sound'){
        // let gradientArray = this.interpolateColors('rgb(27,26,69)', 'rgb(6,167,254)', 101)
				let gradientArray = this.interpolateColors('rgb(27,26,69)', 'rgb(6,167,254)', 11)
        let rgb = 'rgb(' + gradientArray[value][0] + ', ' + gradientArray[value][1] + ', ' + gradientArray[value][2] + ')';

        let style = document.querySelector('[data="test"]');
        style.innerHTML = '.slider::-webkit-slider-thumb { background-color: ' + rgb + ';} .slider::-moz-range-thumb { background: ' + rgb + ';}';
      }
      if(mode === 'light'){
        // let gradientArray = this.interpolateColors('rgb(27,26,69)', 'rgb(234,183,39)', 101)
				let gradientArray = this.interpolateColors('rgb(27,26,69)', 'rgb(234,183,39)', 11)
        let rgb = 'rgb(' + gradientArray[value][0] + ', ' + gradientArray[value][1] + ', ' + gradientArray[value][2] + ')';

        let style = document.querySelector('[data="test"]');
        style.innerHTML = '.slider::-webkit-slider-thumb { background-color: ' + rgb + ';} .slider::-moz-range-thumb { background: ' + rgb + ';}';
      }
    },

    interpolateColors(color1, color2, steps){
      let stepFactor = 1 / (steps - 1),
          interpolatedColorArray = [];

      color1 = color1.match(/\d+/g).map(Number);
      color2 = color2.match(/\d+/g).map(Number);

      for(let i = 0; i < steps; i++) {
          interpolatedColorArray.push(this.interpolateColor(color1, color2, stepFactor * i));
      }
      return interpolatedColorArray;
    },

    interpolateColor(color1, color2, factor) {
      if (arguments.length < 3) {
          factor = 0.5;
      }
      var result = color1.slice();
      for (var i = 0; i < 3; i++) {
          result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
      }
      return result;
    },

    instantiateThumbColor(mode){
      let style = document.querySelector('[data="test"]');
      style.innerHTML = '.slider::-webkit-slider-thumb { background-color: hsl(241, 45%, 19%); } .slider::-moz-range-thumb { background: hsl(241, 45%, 19%); }';
    }
  }
}
</script>


<style lang="css">
.right-column{
  display: flex;
  justify-content: center;
  align-items: flex-end;
  grid-column: 4;
  grid-row: 2;
}
.right-column .label{
  position: absolute;
  letter-spacing: 5px;
  text-align: center;
  top: 80px;
}
.border{
  position: absolute;
  display: flex;
  width: 140px;
  height: 480px;
  border-style: solid;
  border-width: 2px;
  border-color: #483F61;
  border-radius: 35px;
  justify-content: center;
}
.label-container{
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 460px;
  text-align: center;
	place-self: center;
}
hr.tick{
  position: absolute;
  left: 133px;
  border: 1px solid #483F61;
  width: 10%;
  margin: 0;
}
.tick-num{
  position: absolute;
  width: 20px;
  text-align: center;
  left: 160px;
}
.slider-container{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 400px;
	bottom: 40px;
}
.slider{
  position: absolute;
  z-index: 3;
  -webkit-appearance: none;
  transform: rotate(-90deg);
  height: 15px;
  width: 400px;
  background-color: rgba(0, 0, 0, 0);
  margin: 0;
}
.slider:focus{
	outline: 3px solid orange !important;
}
input[type="range"]:webkit-direct-focus{
	outline: 3px solid orange !important;
}
.slider::-webkit-slider-thumb{
  -webkit-appearance: none;
  width: 30px;
  height: 40px;
  border-style: solid;
  border-color: white;
  border-width: 3px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0);
}
.slider::-moz-range-thumb{
	width: 30px;
  height: 40px;
  border-style: solid;
  border-color: white;
  border-width: 3px;
  border-radius: 25px;
  background: rgba(0, 0, 0, 0);
}
.slider-container .fill{
  position: absolute;
  left: 0px;
  right: 0px;
  border-radius: 16px;
  height: 100%;
  overflow: hidden;
  z-index: 2;
}
.waveform .fill{
  background-image: linear-gradient(0deg, #1B1A45 0%, #F34E17 100%);
}
.sound .fill{
  background-image: linear-gradient(0deg, #1B1A45 0%, #06A7FE 100%);
}
.light .fill{
  background-image: linear-gradient(0deg, #1B1A45 0%, #EAB727 100%);
}
</style>
