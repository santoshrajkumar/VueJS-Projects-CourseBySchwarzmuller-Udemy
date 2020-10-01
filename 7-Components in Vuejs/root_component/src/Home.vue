<template>

<div>
    <p>Hello {{ name }}</p>
    <button @click="changeName">Change</button>
</div>
    
</template>


<script>
export default {
    data: function(){
        return {
            name: 'Santosh'
        }
    },
    methods: {
        changeName(){
            this.name = 'NameChanged'
        }
    }
}
</script>


<style>

</style>