import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  data() {
    return {
      message: "Hello World"
    }
  },
  components: {
    'my-component': {
      template: '<div>Local</div>'
    }
  }
})

