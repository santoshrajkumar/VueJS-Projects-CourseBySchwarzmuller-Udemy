var vm1 = new Vue({
  data: {
  title: 'This is a title'
  },
  
  methods: {
    
    changeTitle: function(){
      this.title = 'Title has been changed'
    }
    
  }
  
  })
  
  vm1.$mount('#app')
  
  
  var vm2 = new Vue({
    template: '<h4>This is from template</h4>'
  });
  
  vm2.$mount('#app2')
  
  
  // Or a not so recommendded way with Vanilla JavaScript
  /* vm2.$mount();
  document.getElementById('app2').appendChild(vm2.$el) */
  