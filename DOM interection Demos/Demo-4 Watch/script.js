new Vue({
	
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    
    computed: {
        output: function(){
          console.log('Computed')
          return this.counter > 5 ? 'Greater than 5' : 'Less Than 5';
      }
    },

    // Looks for change in value, if that happens, after 2 sec it'll make the counter 0
    watch: {
      counter: function(value){
        var vm = this;
        setTimeout(function() {
          vm.counter = 0;
        }, 2000)
      }
    },
    
    methods: {
   
        result: function(){
          console.log('Method')
          return this.counter > 5 ? 'Greater than 5' : 'Less Than 5';
      }
   
    }
    
  })