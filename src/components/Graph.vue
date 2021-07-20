<template>
  <div id="canvas-container" class="canvas-container">
		<img id="sound-playing" class="overlay" :src="require('@/assets/sound.gif')" style="display:none;" alt="sound is playing"/>
    <canvas id="canvas" width="850" height="500" :aria-label="graphDescription" aria-live="polite"></canvas>
    <img id="dog" :src="require('@/assets/doggie2.png')" style="display:none;"/>
  </div>
</template>

<script>
export default {
  props: { localAmplitude: Number, localFrequency: Number, localMode: String},
  watch: {
  	localAmplitude: function(newVal, oldVal) {
      this.amp = newVal;
			// this.amp = newVal;
      this.drawGraph(this.ctx, this.amp, this.freq, this.mode);
			if(this.mode === 'waveform'){
				this.graphDescription = this.amplitudeDescriptions.waveform[newVal];
			}
			else if(this.mode === 'light'){
				this.graphDescription = this.amplitudeDescriptions.light[newVal];
			}
			else{
				this.graphDescription = ''
			}
    },
    localMode: function(newVal, oldVal){
      this.mode = newVal;
			if(this.mode ==='sound' && this.amp > 0){
				$('#sound-playing').show();
			}
			else{
				$('#sound-playing').hide();
			}
      this.drawGraph(this.ctx, this.amp, this.freq, this.mode);
			if(this.mode === 'waveform'){
				this.graphDescription = this.amplitudeDescriptions.waveform[this.amp];
			}
			else if(this.mode === 'light'){
				this.graphDescription = this.amplitudeDescriptions.light[this.amp];
			}
			else{
				this.graphDescription = ''
			}
    }
  },
  name: 'Graph',
  data() {
    return {
      amp: this.localAmplitude,
			amplitudeDescriptions: {
				'waveform':[
					'Amplitude 0: A horizontal line with an energy of 0.',
					'Amplitude 1: A sinusoidal wave with its crests located at 1, its troughs at -1, and an energy of 1.',
					'Amplitude 2: A sinusoidal wave with its crests located at 2, its troughs at -2, and an energy of 4.',
					'Amplitude 3: A sinusoidal wave with its crests located at 3, its troughs at -3, and an energy of 9.',
					'Amplitude 4: A sinusoidal wave with its crests located at 4, its troughs at -4, and an energy of 16.',
					'Amplitude 5: A sinusoidal wave with its crests located at 5, its troughs at -5, and an energy of 25.',
					'Amplitude 6: A sinusoidal wave with its crests located at 6, its troughs at -6, and an energy of 36.',
					'Amplitude 7: A sinusoidal wave with its crests located at 7, its troughs at -7, and an energy of 49.',
					'Amplitude 8: A sinusoidal wave with its crests located at 8, its troughs at -8, and an energy of 64.',
					'Amplitude 9: A sinusoidal wave with its crests located at 9, its troughs at -9, and an energy of 81.',
					'Amplitude 10: A sinusoidal wave with its crests located at 10, its troughs at -10, and an energy of 100.'

				],
				'light':[
					'Amplitude 0: A flat horizontal line with an energy of 0. The right side of the screen is black.',
					'Amplitude 1: A sinusoidal wave with its crests located at 1, its troughs at -1, and an energy of 1. A lamp shines faintly and the outline of the dog is barely visible.',
					'Amplitude 2: A sinusoidal wave with its crests located at 2, its troughs at -2, and an energy of 4. A lamp emits an extremely dim yellow light and the dog is slightly visible.',
					'Amplitude 3: A sinusoidal wave with its crests located at 3, its troughs at -3, and an energy of 9. A lamp emits a very dim yellow light, illuminating the room and dog.',
					'Amplitude 4: A sinusoidal wave with its crests located at 4, its troughs at -4, and an energy of 16. A lamp emits a fairly dim yellow light, illuminating the room and dog.',
					'Amplitude 5: A sinusoidal wave with its crests located at 5, its troughs at -5, and an energy of 25. A lamp emits dim yellow light, illuminating the room and dog.',
					'Amplitude 6: A sinusoidal wave with its crests located at 6, its troughs at -6, and an energy of 36. A lamp emits yellow light, illuminating the room and dog.',
					'Amplitude 7: A sinusoidal wave with its crests located at 7, its troughs at -7, and an energy of 49. A lamp emits moderately bright yellow light, illuminating the room and dog.',
					'Amplitude 8: A sinusoidal wave with its crests located at 8, its troughs at -8, and an energy of 64. A lamp emits bright yellow light, illuminating the room and dog.',
					'Amplitude 9: A sinusoidal wave with its crests located at 9, its troughs at -9, and an energy of 81. A lamp emits very bright yellow light, illuminating the room and dog.',
					'Amplitude 10: A sinusoidal wave with its crests located at 10, its troughs at -10, and an energy of 100. A lamp emits an extremely bright yellow light, illuminating the room and dog.'
				]
			},
			graphDescription: '',
      freq: this.localFrequency,
      mode: this.localMode,
      c: '',
      ctx: '',
      numLines: 5,
      startHeight: 25,
      graphHeight: 450,
      graphWidth: 850,
    }
  },

  mounted() {
    this.c = document.getElementById("canvas");
    this.ctx = this.c.getContext("2d");
		this.graphDescription = 'The wavelength is fixed at 9 meters and frequency is fixed at 2 hertz. The slider ranges from 1 to 10. ' + this.amplitudeDescriptions.waveform[0];

    this.generateBorder(this.ctx, this.mode);

    window.setInterval(() => {
      this.drawGraph(this.ctx, this.amp, this.freq, this.mode);
			if(this.mode ==='sound' && this.amp > 0){
				$('#sound-playing').show();
			}
			else{
				$('#sound-playing').hide();
			}
    },50);
  },
  methods: {
     generateBorder(ctx, mode) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#FFFFFF";

      // middle line
      if(mode === 'light'){
        ctx.moveTo(this.graphWidth/2, 0);
        ctx.lineTo(this.graphWidth/2, this.graphHeight + 50);
      }

      // Y-Axis
      ctx.moveTo(0, 0);
      ctx.lineTo(0, this.graphHeight + 50);

      // Top border
      ctx.moveTo(0, 0);
      ctx.lineTo(this.graphWidth, 0);

      // Right border
      ctx.moveTo(this.graphWidth, 0);
      ctx.lineTo(this.graphWidth, this.graphHeight + 50);

      // Bottom border
      ctx.moveTo(0, this.graphHeight + 50);
      ctx.lineTo(this.graphWidth, this.graphHeight + 50);


      ctx.stroke();
    },

    drawGraph(ctx, amp, freq, mode) {
      ctx.clearRect(0 , 0, 850, 500);
      ctx.fillStyle = "#0A000A";
      ctx.fillRect(0, 0, 850, 500);
      this.generateBorder(ctx, mode);
      this.generateGrid(ctx, mode);
      this.plotSine(ctx, amp, freq, mode);
      if(mode === 'light'){
        this.addImage(ctx, amp);
      }
    },

    plotSine(ctx, newAmp, newFreq, mode) {
      let stepMultiplier = (this.graphHeight / 2) / 100;
      let width = ctx.canvas.width;
      let height = ctx.canvas.height;
      let scale = 20;

      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      if(mode === 'waveform'){
        ctx.strokeStyle = '#F34E17';
      }
      if(mode === 'sound'){
        ctx.strokeStyle = '#06A7FE';
      }
      if(mode === 'light'){
        ctx.strokeStyle = '#EAB727';
      }

      ctx.beginPath();

      let x = 0;
      let y = 0;
      let amplitude = newAmp * 10;
      let frequency = newFreq;

      if (mode === 'waveform'){
				frequency = 135 / 2;
        ctx.moveTo(1, height / 2 + (amplitude * stepMultiplier) * Math.sin(x / frequency));
        while (x < width) {
           y = height / 2 + (amplitude * stepMultiplier) * Math.sin(x / frequency);
           ctx.lineTo(x + 1, y);
           x++;
        }
        ctx.stroke();
      }
      else if( mode === 'sound'){
				frequency = 135 / 3.33;
        ctx.moveTo(1, height / 2 + (amplitude * stepMultiplier) * Math.sin(x / frequency));
        while (x < width) {
           y = height / 2 + (amplitude * stepMultiplier) * Math.sin(x / frequency);
           ctx.lineTo(x + 1, y);
           x++;
        }
        ctx.stroke();
      }
      else{
				frequency = 135 / 10.4;
        ctx.moveTo(1, height/2 + (amplitude * stepMultiplier) * Math.sin(x / frequency));
        while (x < (width / 2) - 3) {
           y = height/2 + (amplitude * stepMultiplier) * Math.sin(x / frequency);
           ctx.lineTo(x + 1, y);
           x++;
        }
        ctx.stroke();
      }
    },

    generateGrid(ctx, mode){
      let width;
      if(mode === 'waveform' || mode === 'sound'){
        width = this.graphWidth - 1;
      }
      else {
        width = (this.graphWidth / 2) - 3;
      }
      for(let i = 0; i < this.numLines; i++){
        let lineHeight = this.startHeight + (i * 450 / 4);
        ctx.beginPath();
        ctx.lineWidth = 2.5;
        ctx.moveTo(0, lineHeight);
        ctx.lineTo(width, lineHeight);

        if(Math.floor(this.numLines / 2) === i){
          ctx.strokeStyle = "#72639F";
          ctx.stroke();
        }
        else{
          ctx.strokeStyle = "#342958";
          ctx.stroke();
        }
      }
    },

    addImage(ctx, amp){
      let img = document.getElementById("dog");
      ctx.drawImage(img, this.graphWidth / 2 + 1, 0);
      this.addTint(ctx, amp);
      this.generateBorder(ctx, 'light');
    },

    addTint(ctx, amp){
      let inverseAmp = 100 - (amp * 10);
      let alpha = (inverseAmp / 100);
      ctx.globalAlpha = alpha;
      ctx.beginPath();
			ctx.fillStyle = '#000000';
      ctx.fillRect(this.graphWidth / 2 + 1, 0, 425, 500);
      ctx.stroke();
      ctx.globalAlpha = 1.0;
    }
  }
}
</script>

<style lang='css' scoped>
  .canvas-container{
    grid-row: 2;
    grid-column: 3;
    place-self:center;
  }
	.overlay{
		position: absolute;
		left: 71.5%;
		top: 15.5%;
	}
</style>
