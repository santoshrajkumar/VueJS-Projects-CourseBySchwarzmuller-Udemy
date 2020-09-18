Vue.component('hello', {
	template: '<h4>This is from Component</h4>'
});




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
