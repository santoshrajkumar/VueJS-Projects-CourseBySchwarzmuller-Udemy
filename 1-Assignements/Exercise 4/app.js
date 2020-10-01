new Vue({
  el: '#exercise',
  data: {
    effectClass: {
      highlight: false,
      shrink: true
    },
    float: 'float',
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
        height: '150px',
        backgroundColor: 'gray'
      },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    },

    value: 0

  
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.effectClass.highlight = !vm.effectClass.highlight;
        vm.effectClass.shrink = !vm.effectClass.shrink;
      }, 2000);
    },

    startBar: function(){
      var vm = this;
      var width = 0;
      setInterval(function(){
        width = width + 1;
        if (width < 100){
          vm.progressBar.width = width*5 + 'px';
          vm.value = width;
        } else {
          vm.progressBar.width = 500 + 'px';
          vm.value = 100;
        }
        
      }, 100);
    }
  }
});
