import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLayerGroup, faFileAlt, faBook, faExchangeAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLayerGroup, faFileAlt, faBook, faExchangeAlt, faSearch)

Vue.config.productionTip = false

Vue.component('vue-fontawesome', FontAwesomeIcon)

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
