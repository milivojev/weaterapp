<template>
    <div id="app" class="container column  is-offset-4 ">
        <div class="column is-8 ">
            <city-button city-code="Belgrade,RS"><h1>Beograd</h1></city-button>
            <city-button city-code="Rome,IT"><h1>Rim</h1></city-button>
            <city-button city-code="London,UK"><h1>London</h1></city-button>
        </div>


        <weather-display></weather-display>
    </div>
</template>

<script>

    import Buttons from './components/Buttons.vue'
    import WeatherDisplay from './components/WeaterDisplay.vue'
    export default {
        name: 'app',
        components: {
            'city-button': Buttons,
            'weather-display': WeatherDisplay
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
