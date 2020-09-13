new Vue({
    el: '#exercise',
    data: {
        name: 'Santosh Rajkumar',
        age: '25',
        img_link: 'https://source.unsplash.com/random/800x600'
        
    },
    methods: {
        age_three: function(){
            return parseInt(this.age)*3
        },
        rand_no: function(){
            return Math.random()
        }
    }
})