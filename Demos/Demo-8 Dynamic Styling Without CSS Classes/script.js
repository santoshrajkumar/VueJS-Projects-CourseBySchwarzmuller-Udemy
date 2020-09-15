new Vue({
  el: "#app",
  data: {
    color: '',
    width: 100
  },
  computed: {
    styleEl: function(){
      return {
        'background-color': this.color,
         width: this.width + 'px'
      };
    }
  }

});