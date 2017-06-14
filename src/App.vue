<template>
  <div id="app" class="container column  is-offset-4 ">
    <div class="column is-8 ">
    <city-button city-code="Belgrade,RS" ><h1>Beograd</h1></city-button>
  <city-button city-code="Rome,IT" ><h1>Rim</h1></city-button>
  <city-button city-code="London,UK" ><h1>London</h1></city-button>
   </div>

  </div>
</template>

<script>

  import Buttons from './components/Buttons.vue'
  export default {
  name: 'app',
  components:{
    'city-button': Buttons,
  }
}
</script>

<style>


</style>
