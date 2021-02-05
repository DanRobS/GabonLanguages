<template>
  <div id="app" class="">
    <Navbar />
    <LanguageInfoTabs />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import LanguageInfoTabs from './components/LanguageInfoTabs'

export default {
  name: 'App',
  components: {
    Navbar, 
    LanguageInfoTabs
  }
}
</script>

<style lang="scss">

#app {
  background-color: grey;
}
</style>
