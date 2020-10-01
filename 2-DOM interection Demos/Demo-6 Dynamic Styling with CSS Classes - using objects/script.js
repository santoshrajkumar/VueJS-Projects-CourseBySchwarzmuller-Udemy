new Vue({
  el: "#app",
  data: {
    attachRed: false,
    attachGreen: false,
    attachBlue: false
  },
  computed: {
    divClass1: function(){
      return {
        red : this.attachRed
      };
    },
    divClass2: function(){
      return {
        green : this.attachGreen
      };
    },
    divClass3: function(){
      return {
        blue : this.attachBlue
      };
    },


    value1: function(){
      if (this.attachRed){
        return 'Click : Gray'
      } else {
        return 'Click : Red'
      }
    },
    value2: function(){
      if (this.attachGreen){
        return 'Click : Gray'
      } else {
        return 'Click : Green'
      }
    },
    value3: function(){
      if (this.attachBlue){
        return 'Click : Gray'
      } else {
        return 'Click : Blue'
      }
    }
  }
});