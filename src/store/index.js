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
      state.frenchToLanguage.originalWord = payload.frenchword;
      state.frenchToLanguage.translation = payload.translation;
      state.frenchToLanguage.examples = payload.example;
    },

    getFrenchWords_mutation (state, payload) {
      state.languageToFrench.originalWord = payload.nzebi_word;
      state.languageToFrench.translation = payload.translation;
      state.languageToFrench.examples = payload.example;
    }
  },
  
  actions: {
    getLanguageWords (context, payload) {
      switch (payload.translation) {
        case "french - inzebi":
          axios.get(uris.getFrenchToInzebi+""+payload.word)
          .then(response => {
            context.commit("getLanguageWords_mutation", response.data[0])
          })
          .catch(error => {
            console.log(error);
          })
      }
    },

    getFrenchWords (context, payload) {
      switch (payload.translation){
        case "inzebi - french":
          axios.get(uris.getInzebiToFrench+""+payload.word)
            .then(response => {
              context.commit("getFrenchWords_mutation", response.data[0])
            })
            .catch(error => {
              console.log(error);
            })
      }
    }
  },

  modules: {

  }
})
