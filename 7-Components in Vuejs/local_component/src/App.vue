<template>
  <div>
    <app-server v-for="server in 6"></app-server>
  </div>
</template>

<script>
import ServerStatus from './ServerStatus.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'app-server': ServerStatus
  }
}
</script>

<style>

</style>
