<template>
  <div id="home">
  
    <h1>Portfolio</h1>

    <router-view></router-view>
    <Layout/>

  </div>
</template>

<script>

import Layout from './Layout.vue'
//import Button from './Button.vue'

export default {
  name: 'Home',
  components: {
    Layout,
  //  Button,
  },

}


</script>

<style scoped>
#home {
  background-color: rgba(255, 115, 0, 0.514);
}
</style>
