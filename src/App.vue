<template>
    <div id="app" class="container column  is-offset-4 " :style="backgroundImage">
        <div class="column is-8 ">
            <city-button city-code="Belgrade,RS" image="0"><h1>Beograd</h1></city-button>
            <city-button city-code="Rome,IT" image="1"><h1>Rim</h1></city-button>
            <city-button city-code="London,UK" image="2"><h1>London</h1></city-button>
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
        },
        data: function () {
            return {
                slike: [
                    'http://lorempixel.com/800/600/nature/2',
                    'http://lorempixel.com/800/600/nature/3',
                    'http://lorempixel.com/800/600/nature/4',
                ],
                backgroundImage: ""
            }
        },
        mounted(){
            Event.$on('load-city', (data) => {
                this.backgroundImage = "background-image: url(" + this.slike[data.image] + ")"
            })
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
