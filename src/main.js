import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

window.axios=axios

window.Event=new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
