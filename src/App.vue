<template>
  <div id="app" class="">
    
    <Navbar />
    
    <router-view/>

    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar, 
    Footer
  }
}
</script>

<style lang="scss">

#app {
  background-color: grey;
}
</style>
