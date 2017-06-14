<template>
    <div>
        <div class="icon">
            <img src="" alt="">
        </div>
        <h1>{{temperatura}}</h1>
        <h3>{{opis}}</h3>
        <h4>{{detalji}}</h4>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                temperatura: "",
                opis: "",
                detalji: ""
            }
        },

        mounted(){
            Event.$on('load-city', (data) => {
                axios.get('http://api.openweathermap.org/data/2.5/weather', {
                    params: {
                        q: data.city,
                        appid: "e5d177488180d320bc53c289c6d28de9",
                        units: "metric"
                    }
                }).then((response) => {
                        console.log(response.data);
                })
            });
        }

    }
    
    
</script>

<style>
    body {
        font-family: Arial;
        text-align: center;
        background-image: url("https://www.kreativphoto.com/wp-content/uploads/2016/11/bcvpkkf276cnbqefxlmynjx39r8zqvrq7qbjs5aytuxx4gmluqgj7dqua3wujhzk-o.jpg");
        color: white;
    }

    
</style>