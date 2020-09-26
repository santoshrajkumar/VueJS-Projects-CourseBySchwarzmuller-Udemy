Vue.component('hello', {

  data: function(){
    return {
      greetings: 'Hello There !'
    }
  },

	template: '<h4>This is from Component : {{ greetings }}</h4>'
});



new Vue({
el: '#app'
})
