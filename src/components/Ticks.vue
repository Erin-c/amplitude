<template>
<div class="ticks">
  <div>
    10
  </div>
  <div>
    5
  </div>
  <div>
    0
  </div>
  <div>
    -5
  </div>
  <div>
    -10
  </div>
</div>
</template>


<script>

export default {
  name: 'Ticks',
  data() {
    return {
    }
  }
}
</script>


<style lang='css'>
  .ticks{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    font-size: 1.25em;
    grid-row: 2;
    grid-column: 2;
    place-self: center;
    height: 475px;
    width: 45px;
    color: white;
    padding: 25px 0;
  }
</style>
