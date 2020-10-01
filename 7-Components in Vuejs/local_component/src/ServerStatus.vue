<template>
    <div>
        <h4>Server Status: {{ status }} </h4>
        <button @click="changeStatus">Change</button>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            status: 'Normal'
        }
    },
    methods: {
        changeStatus(){
            this.status = 'Critical'
        }
    }
}
</script>

<style>

</style>