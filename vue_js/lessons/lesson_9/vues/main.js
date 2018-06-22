var VueRouter = require('vue-router')

var Brands = require('./')
Vue.use(VueRouter)

var router = new VueRouter({
   routes: [
     /// about => About.Vue
     {path: '/about', component: About}
   ]
})

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
