import Vue from 'vue'
import App from './App.vue'
import ServerDetails from './ServerDetails.vue'

Vue.component('server-detail', ServerDetails)

new Vue({
  el: '#app',
  render: h => h(App)
})
