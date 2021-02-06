<template>
  <div id="app" class="">
    <Navbar />
    <LanguageInfo />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import LanguageInfo from './components/LanguageInfo'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar, 
    LanguageInfo,
    Footer
  }
}
</script>

<style lang="scss">

#app {
  background-color: grey;
}
</style>
