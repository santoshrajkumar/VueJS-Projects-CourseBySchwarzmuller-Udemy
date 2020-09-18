var vm1 = new Vue({
  el: '#app',
  data: {
  title: 'This is a title'
  },
  
  methods: {
    
    changeTitle: function(){
      this.title = 'Title has been changed'
    }
    
  }
  
  })
  
  
  
  setTimeout(function(){
    vm1.title = 'Changed by Timer outside of Vue modules';
  }, 3000)
  
  
  var vm2 = new Vue({
  el: '#app2',
  data: {
  title: 'This is a title App2'
  },
  
  methods: {
    
    changeTitle: function(){
      this.title = 'App2 Title has been changed'
    },
    
    changeVm1Title: function(){
     vm1.title = "Changed by App2"
    }
    
  }
  
  })