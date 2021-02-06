import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import LanguageInfo from '../components/LanguageInfoTabs/LanguageInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },

  {
    path: '/about',
    component: About
  },

  {
    path: '/langues/Inzebi',
    component: LanguageInfo
  }
  
]

const router = new VueRouter({
  routes
})

export default router
