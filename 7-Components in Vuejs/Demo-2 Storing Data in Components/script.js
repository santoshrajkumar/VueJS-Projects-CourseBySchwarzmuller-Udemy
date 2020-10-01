

//Change applied to all components
var data = {
 name: 'Anonymous'
}

Vue.component('hello', {

  data: function(){
    return data;
  },

  template: '<h4>Hello: {{ name }} <button @click="changeName">Change</button></h4>',

  methods: {
    changeName: function(){
      this.name = 'Santosh'
    }
  }
  
});



new Vue({
el: '#app'
})



//Change where required

Vue.component('hello2', {

  data: function(){
    return {
      name2: 'Anonymous'
    }
  },

  template: '<h4>Hello: {{ name2 }} <button @click="changeName">Change</button></h4>',

  methods: {
    changeName: function(){
      this.name2 = 'Santosh'
    }
  }
  
});



new Vue({
el: '#app2'
})