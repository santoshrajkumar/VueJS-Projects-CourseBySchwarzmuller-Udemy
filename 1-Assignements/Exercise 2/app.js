new Vue({
        el: '#exercise',
        data: {
            value: '',
            value2: ''
        },
        methods: {
            showAlert: function(){
                alert('This is the alert !')
            },
            storeVal1: function(event){
                this.value = event.target.value;
            },
            storeVal2: function(event){
                this.value2 = event.target.value;
            }
        },
    });