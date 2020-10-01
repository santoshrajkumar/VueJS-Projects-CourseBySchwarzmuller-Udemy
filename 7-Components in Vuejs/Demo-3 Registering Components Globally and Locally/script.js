

//Change applied to all components
var data = {
 name: 'Anonymous'
}

var cmp1 = {

  data: function(){
    return data;
  },

  template: '<h4>Hello: {{ name }} <button @click="changeName">Change</button></h4>',

  methods: {
    changeName: function(){
      this.name = 'Santosh'
    }
  }
  
};



new Vue({
el: '#app',
components: {
  'hello': cmp1
}
})



//Change where required

var cmp2 = {

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
  
};



new Vue({
el: '#app2',
components: {
  'hello2':cmp2
}
})