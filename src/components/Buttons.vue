<template>
    <div >
        <a class="button dugme  is-primary is-active"  @click="loadCity"><slot></slot></a>
    </div>


</template>


<script>
    export default{
        props:['cityCode', 'image'],
        methods:{
            loadCity(){
                Event.$emit('load-city', { city: this.cityCode, image: this.image })
            }
        }
    }


</script>


<style>

.dugme{
    width:200px;
    margin-left: 10px;
    float: left;
}


</style>