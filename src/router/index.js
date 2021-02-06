import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import LanguageInfo from '../components/LanguageInfoTabs/LanguageInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },

  {
    path: '/langues/Inzebi',
    component: LanguageInfo
  }
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
