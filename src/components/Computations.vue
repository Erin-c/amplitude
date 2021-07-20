<template>
  <div class="bottom-row">
    <div class="value-container">
      <div class="computed-value">
        <h2 class="label">
          {{ this.$uiText.labels[this.$language()][0].toUpperCase() }}
        </h2>
        <div class="wavelength value">
          {{ wavelength }} {{ units }}
        </div>
      </div>
      <div class="divider"></div>
      <div class="computed-value">
        <h2 class="label">
          {{ this.$uiText.labels[this.$language()][1].toUpperCase() }}
        </h2>
        <div class="frequency value">
          {{ frequency }} {{ freqUnits }}
        </div>
      </div>
      <div class="divider"></div>
      <div class="computed-value">
        <h2 class="label">
          {{ this.$uiText.labels[this.$language()][2].toUpperCase() }}
        </h2>
        <div class="energy value">
          {{ energy }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { localAmplitude: Number, localFrequency: Number, localMode: String },
  watch: {
    localAmplitude: function(newVal, oldVal) {
      this.amp = newVal;
      this.energy = (Math.pow((this.amp), 2));
    },
    localMode: function(newVal, oldVal) {
      this.mode = newVal;
			switch(this.mode){
				case 'waveform':
					$('.frequency.value').css('font-size', '250%');
					this.frequency = 2;
					this.freqUnits = 'Hz';
					this.wavelength = 9;
					this.units = 'm';
					break;
				case 'sound':
					$('.frequency.value').css('font-size', '250%');
					this.frequency = 320;
					this.freqUnits = 'Hz';
					this.wavelength = 1;
					this.units = 'm'
					break;
				case 'light':
					$('.frequency.value').css('font-size', '215%');
					this.frequency = 520;
					this.freqUnits = this.$uiText.units[this.$language()];
					this.wavelength = 577;
					this.units = 'nm'
					break;
			}
      $('.energy').removeClass(oldVal);
      $('.energy').addClass(this.mode);
    }
  },
  name: 'Computations',
  data() {
    return {
      amp: this.localAmplitude,
      mode: this.localMode,
      frequency: 2,
			freqUnits: 'Hz',
      wavelength: 9,
			units: 'm',
      energy: 0,
    }
  },
  async mounted() {
    $('.energy').addClass(this.mode);
  }
}
</script>

<style lang="css">
.bottom-row{
  display: flex;
  place-self: center;
	grid-column: 3;
  grid-row: 3;
}
.value-container{
  display: flex;
  justify-content: space-around;
  width: 900px;
}
.divider{
  height: 119px;
  border-left: 3px solid #292A4C;
}
.computed-value{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
}
.label{
	font-weight: normal;
  letter-spacing: 5px;
  text-align: center;
  font-size: 1.25em;
  margin: 0;
}
.value{
  font-size: 250%;
  padding: 10px;
  margin: 10px 0;
}
.energy{
  min-width: 80px;
  text-align: center;
  background-color: #141437;
  border-radius: 20px;
}
.energy.waveform{
  color: #F34E17;
}
.energy.sound{
  color: #06A7FE;
}
.energy.light{
  color: #EAB727;
}
</style>
