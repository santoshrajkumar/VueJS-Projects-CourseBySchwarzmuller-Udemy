<template>
    <div class="container">
        <heading></heading>
        <hr>
        <server-detail></server-detail>
        <hr>
        <footing></footing>
    </div>
</template>

<script>
import Heading from './Heading.vue'
import Footing from './Footing.vue'
export default {
    components: {
        'heading': Heading,
        'footing': Footing
    }
}
</script>

<style>

</style>
