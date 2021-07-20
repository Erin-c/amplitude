<template>
  <div class="hintsContainer">
    <input id="hints" aria-label="more information" class="hints" type="image" v-on:click="showHints()" :src="require('@/assets/infobutton.png')">
    <div class="cover">
			<input id="close" class="close" aria-label="close more information" type="image" v-on:click="hideHints()" :src="require('@/assets/close.png')">
      <div tabindex="0" class="hint left"></div>
      <div class="pointer left"></div>
      <div tabindex="0" class="hint right"></div>
      <div class="pointer right"></div>
      <div tabindex="0" class="hint bottom"></div>
      <div class="pointer bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: { localMode: String, localMute: Boolean },
  watch: {
    localMode: function(newVal, oldVal) {
      this.mode = newVal;
    },
		localMute: function(newVal, oldVal) {
			this.isMuted = newVal;
		}
  },
  name: 'Hints',
  data() {
    return {
      mode: this.localMode,
			calloutWaveform: this.$uiText.helperTextWaveform[this.$language()],
      calloutSound: this.$uiText.helperTextSound[this.$language()],
      calloutLight: this.$uiText.helperTextLight[this.$language()],
			isMuted: false,
			gainNode: ''
		}
  },
  async mounted() {

		$('body').on('click', (e) => {
			if(e.target.id !== 'hints'){
				$('.cover').hide();
				$('#hints, .mode, .mute, .slider').attr('disabled', false);
			}
		});

		window.addEventListener('keydown', function(e) {
			 // pressed esc
			 if(e.keyCode === 27){
				 $('.cover').hide();
				 $('#hints, .mode, .mute, .slider').attr('disabled', false);
			 }
		 });

		if('AudioContext' in window || 'webkitAudioContext' in window) {
    // Check for the web audio API. Safari requires the webkit prefix.

    const URL = require('@/assets/sfx/info_button.mp3');

    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var context = new AudioContext(); // Make it crossbrowser
		this.gainNode = context.createGain();

    const playButton = document.querySelector('#hints');

    let infoButtonBuffer;

    window.fetch(URL)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => context.decodeAudioData(arrayBuffer,
       audioBuffer => {
         infoButtonBuffer = audioBuffer;
        },
       error =>
       console.error(error)
      ))
      playButton.onclick = () => play(infoButtonBuffer, this.isMuted, this.gainNode);

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
  },
  methods:{
    showHints(){
      let margin = ($('#app').css('marginRight'));
      if(!$('.cover').is(':visible')){
				$('#hints, .mode, .mute, .slider').attr('disabled', true);
        $('.cover').show().css('left', margin);
      }
      if(this.mode === 'waveform'){
        $('.pointer').show();
        $('.hint.left').show().html(this.calloutWaveform[0])
        $('.hint.right').show().html(this.calloutWaveform[1]);
        $('.hint.bottom').show().html(this.calloutWaveform[2])
      }
      else if(this.mode === 'sound'){
        $('.hint.left, .pointer.left').hide()
        $('.hint.right').html(this.calloutSound);
        $('.hint.bottom, .pointer.bottom').hide()
      }
      else{
        $('.hint.left, .pointer.left').hide()
        $('.hint.right').html(this.calloutLight);
        $('.hint.bottom, .pointer.bottom').hide()
      }
    },
		hideHints(){
			$('.cover').hide();
			$('#hints, .mode, .mute, .slider').attr('disabled', false);
		}
  }
}
</script>

<style lang="css">
.hintsContainer{
  display: flex;
  place-self: center;
  grid-column: 4;
  grid-row: 3;
}
.cover{
  position: absolute;
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  width: 1366px;
  height: 780px;
  z-index: 5;
}
.close{
	position: absolute;
	transform: translate(-50%, -50%);
	left: 89.75%;
	top: 88.5%;
	width: 35px;
	height: 35px;
	padding: 10px;
	border-style: solid;
	border-radius: 50%;
	border-color: rgba(254, 255, 51, 1);
	background-color: rgba(0,0,0,0.9);
}
.hint{
  position: absolute;
  border-style: solid;
  border-width: 4px;
  background-color: rgba(0, 0, 0, 0.8);
  color: rgba(254, 255, 153, 1);
  border-color: rgba(254, 255, 51, 1);
  padding: 25px;
  width: 300px;
  z-index: 6;
}
.pointer{
  position: absolute;
  border-style: solid;
  width: 100px;
  height: 0px;
  border-color: rgba(254, 255, 51, 1);
}
.hint.left{
  left: 20%;
  top: 19%;
  transform: translate(0%, -50%);
}
.pointer.left{
  left: 20%;
  top: 19%;
  border-width: 4px 0 0 0;
  transform: translate(-100%, -50%);
}
.hint.right{
  left: 80%;
  top: 40%;
  transform: translate(-100%, -50%);
}
.pointer.right{
  left: 80%;
  top: 40%;
  border-width: 4px 0 0 0;
  transform: translate(0%, -50%);
}
.hint.bottom{
	left: 73%;
	top: 74%;
  transform: translate(-50%, -100%);
}
.pointer.bottom{
	left: 74%;
  top: 74%;
  height: 50px;
  width: 0px;
  border-width: 0 4px 0 0;
  transform: translate(-50%, 0%);
}
</style>
