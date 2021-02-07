import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import uris from '../mongoURI/mongoClient'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frenchToLanguage: {
      originalWord: '',
      translation: '',
      examples: []
    },

    languageToFrench: {
      originalWord: '',
      translation: '',
      examples: []
    }


  },
  
  mutations: {
    getLanguageWords_mutation (state, payload) {
      console.log(payload);
      state.frenchToLanguage.originalWord = payload.frenchword;
      state.frenchToLanguage.translation = payload.translation;
      state.frenchToLanguage.examples = payload.example;
    }
  },
  
  actions: {
    getLanguageWords (context, payload) {
      axios.get(uris.getFrenchToInzebi+""+payload)
        .then(response => {
          context.commit("getLanguageWords_mutation", response.data[0])
        })
        .catch(error => {
          console.log(error);
        })
    }
  },


  modules: {
  }
})
