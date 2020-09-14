

let hours = new Date().getHours()
let minutes = new Date().getMinutes()


new Vue({
    el: '#app',
    data: {
        greetings: `Hey ! It's ${hours}:${minutes}. Please type above to see this text changing.`
    },
    methods: {
        changeGreeting: function(event) {
            this.greetings = event.target.value;
        }
    }
})