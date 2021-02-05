<template>
  <div id="app" class="">
    <Navbar />
    <LanguageInfo />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import LanguageInfo from './components/LanguageInfo'

export default {
  name: 'App',
  components: {
    Navbar, 
    LanguageInfo
  }
}
</script>

<style lang="scss">

#app {
  background-color: grey;
}
</style>
