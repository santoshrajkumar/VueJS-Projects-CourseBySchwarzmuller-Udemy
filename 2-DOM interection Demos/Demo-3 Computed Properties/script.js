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
    
    methods: {
   
        result: function(){
          console.log('Method')
          return this.counter > 5 ? 'Greater than 5' : 'Less Than 5';
      }
   
    }
    
  })