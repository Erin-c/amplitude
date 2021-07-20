<template>
  <div class="amp-types" role="radiogroup">
		<label>
			<input id="waveform" type="radio" role="radio" class="active" v-on:click="changeMode($event.target.id)" name="mode" aria-label="change mode to waveform" aria-pressed="true" checked>
		  <img id="waveform-image" class="mode" :src="waveform" alt="Change to waveform mode. The wavelength is fixed at 9 meters and frequency is fixed at 2 hertz. The slider ranges from 1 to 10.">
		</label>
    <label for="waveform" class="button-label">{{ this.$uiText.buttons[this.$language()][0] }}</label>
		<label>
			<input id="sound" type="radio" role="radio" v-on:click="changeMode($event.target.id)" name="mode" aria-label="change mode to sound" aria-pressed="false">
			<img id="sound-image" class="mode" :src="sound" alt="Change to sound mode.">
		</label>
		<label for="sound" class="button-label">{{ this.$uiText.buttons[this.$language()][1] }}</label>
		<label>
			<input id="light" type="radio" role="radio" v-on:click="changeMode($event.target.id)" name="mode" aria-label="change mode to light" aria-pressed="false">
			<img id="light-image" class="mode" :src="light" alt="Change to light mode. The wavelength is fixed at 577 nanometers and frequency is fixed at 520 trillion hertz. The slider ranges from zero (dimmer) to ten (brighter). On the left side of the screen, there is a display of the waveform. On the right side, there is a drawing of a dog sleeping on the floor of a room with one lamp.">
		</label>
		<label for="light" class="button-label">{{ this.$uiText.buttons[this.$language()][2] }}</label>
  </div>
</template>

<script>
export default {
	props: { localMute: Boolean },
  watch: {
		localMute: function(newVal, oldVal) {
			this.isMuted = newVal;
		}
  },
  name: 'Buttons',
  data() {
    return {
      waveform: require('@/assets/waveform-on.png'),
      sound: require('@/assets/sound-off.png'),
      light: require('@/assets/light-off.png'),
			isMuted: false,
			gainNode: ''
    }
  },
  async mounted() {
		if('AudioContext' in window || 'webkitAudioContext' in window) {
		// Check for the web audio API. Safari requires the webkit prefix.

		const URL = require('@/assets/sfx/navigation.mp3');

		let AudioContext = window.AudioContext || window.webkitAudioContext;
		let context = new AudioContext(); // Make it crossbrowser
		this.gainNode = context.createGain();

		const waveformButton = document.querySelector('#waveform');
		const soundButton = document.querySelector('#sound');
		const lightButton = document.querySelector('#light');

		let navigationBuffer;

		window.fetch(URL)
			.then(response => response.arrayBuffer())
			.then(arrayBuffer => context.decodeAudioData(arrayBuffer,
			 audioBuffer => {
				 navigationBuffer = audioBuffer;
				},
			 error =>
			 console.error(error)
			))

			waveformButton.onclick = () => play(navigationBuffer, this.isMuted, this.gainNode);
			soundButton.onclick = () => play(navigationBuffer, this.isMuted, this.gainNode);
			lightButton.onclick = () => play(navigationBuffer, this.isMuted, this.gainNode);

			function play(audioBuffer, mute, volume) {
				const source = context.createBufferSource();
				source.buffer = audioBuffer;
				volume.connect(context.destination);
				source.connect(volume);
				if(!mute){
					volume.gain.value = 2;
				}
				else{
					volume.gain.value = 0;
				}
				source.start();
			}
		}

		document.addEventListener('keydown', function(event) {
			let timeout;
			if(timeout != undefined){
				clearTimeout(timeout);
			}
			// if the user presses tab or arrow keys
			let keycodes = [9, 37, 38, 39, 40];
			timeout = setTimeout(function(){
				if(keycodes.includes(event.keyCode)){
				 if($(':focus').attr('id') === "waveform" || $(':focus').attr('id') === "sound" || $(':focus').attr('id') === "light"){
					 $('.amp-types').addClass('focused');
				 }
				 else{
					 $('.amp-types').removeClass('focused');
				 }
			 }
			 else{
				 $('.amp-types').removeClass('focused');
			 }
		 }, 100);
		});
  },
  methods:{
    changeMode(mode){
      let btn = $('#' + mode);

      if(!(btn.hasClass('active'))) {
        // change old button to off
				let offButtonIndex = ($('.active').attr('id'));
				this[offButtonIndex] = require('@/assets/' + offButtonIndex + '-off.png');
        $('.active').attr('aria-pressed', 'false').removeClass('active');
        // change new button to on
				btn.attr('aria-pressed', 'true').addClass('active');
      	let onButtonIndex = $('.active').attr('id');
				this[onButtonIndex] = require('@/assets/' + onButtonIndex + '-on.png');
			}
      this.$emit('sendModeToApp', mode);
    }
  }
}
</script>

<style lang="css">
.mode{
  width: 80px;
}
label{
  color: white;
}
.amp-types.focused{
	outline-style: solid;
	outline-width: 3px;
	outline-color: orange;
}
.amp-types{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  grid-column: 1;
  grid-row: 2;
  height: 525px;
	width: 80%;
	justify-self: center;
}
input[type=radio] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
input[type=radio] + img {
  cursor: pointer;
}
input[type=radio]:checked + img {
	outline-style: solid;
	outline-width: 3px;
	outline-color: orange;
}
</style>
