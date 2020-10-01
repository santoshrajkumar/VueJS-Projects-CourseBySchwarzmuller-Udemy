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
  
  // See the use of $ref & $data below
  vm1.$refs.myButton.innerText = "Ref Changed";
  console.log(vm1.$data.title);
  