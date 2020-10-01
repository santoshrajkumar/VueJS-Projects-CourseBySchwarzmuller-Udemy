<template>
  <div>
    <app-server v-for="server in 6"></app-server>
  </div>
</template>

<script>
import ServerStatus from './ServerStatus.vue'
export default {
  components: {
    'app-server': ServerStatus
  }
}
</script>

<style>

</style>
