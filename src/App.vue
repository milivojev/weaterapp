<template>
  <div id="app">


    <weather-display></weather-display>
  </div>
</template>

<script>
 import WeatherDisplay from './components/WeaterDisplay.vue'

  export default {
   name: 'app',
   components: {
     'weather-display' : WeatherDisplay
   }
  }


</script>

<style lang="scss">

</style>
