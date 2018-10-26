<template>
  <div class="hero-body" id="app">
  
    <h1 class="title">Portfolio</h1>
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

<style lang="sass">
  @import "../node_modules/bulma/bulma.sass"
</style>




