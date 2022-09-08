<template>
  <div class="v-range-slider__wrapper">
    <div class="v-range-slider">
      <input 
        type="range" 
        min="0" 
        max="1000" 
        step="10" 
        v-model.number="minPrice"
        @change="setRange"
      >
      <input 
        type="range" 
        min="0" 
        max="1000" 
        step="10" 
        v-model.number="maxPrice"
        @change="setRange"
      >   
    </div>
    <div class="range-values">
        <p>Min.price: {{minPrice}} </p>
        <p>Max.price: {{maxPrice}}</p>  
    </div>
  </div>
  
</template>

<script>
export default {
 name: 'v-range-slider',
 data () {
  return {
    minPrice: 0,
    maxPrice: 1000
  }
 },
 methods: {
  setRange () {
    this.$emit('setPrice', this.minPrice, this.maxPrice)
  }
 }
}
</script>

<style>
  .v-range-slider {
    width: 200px;
    margin: auto 16px;
    position: relative;
  }
  .v-range-slider svg, .v-range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
  .range-values {
    margin-bottom: 10px;
  }
  .v-range-slider__wrapper {
    display: flex;
    justify-content: space-between;
  }
</style>