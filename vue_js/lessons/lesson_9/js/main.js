var Vue = require('vue')
var VueResource = require('vue-resource')
var Browser = require('./components/Browser.vue')

Vue.use(VueResource)

Vue.component('message', {
  template: '<input v-model = "message" @keyup.enter="saveMessage">',
  data: function() {
    return{
    message: ''
  }
},
methods: {
  saveMessage: function() {
    this.$emit('message-saved', this.message)

    this.message = ''
  }
}
})

new Vue({
    el: '#app',
    components: {
      Browser
    },
    data: {
      endpoint: 'https://jsonplaceholder.typicode.com/posts'
    },
    methods: {
      handleMessage: function(message) {
      this.messages.push(message)
    },
    getAllPosts: function() {
      this.$http.get(this.endpoint).then(function(response){
        console.log(response)
      },
      function(error) {

      }
    },
    created: function() {
      this.getAllPosts()
    }
    }

})
