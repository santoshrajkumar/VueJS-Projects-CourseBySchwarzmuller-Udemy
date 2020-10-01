new Vue({
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
  
  new Vue({
  el: '#app2',
  data: {
  title: 'This is a title App2'
  },
  
  methods: {
    
    changeTitle: function(){
      this.title = 'App2 Title has been changed'
    }
    
  }
  
  })