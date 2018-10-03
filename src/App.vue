<template>
  <div id="app">
  
    <h1>Portfolio</h1>
    <Navigation></Navigation>  
    <router-view/>
     
    
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    'Navigation': Navigation
  },

}


</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


