<template>
  <div id="dictionary-div" class="container">

      <!-- *************** -->
      <!-- FRENCH - INZEBI -->
      <!-- *************** -->
      <div id="french-inzebi" v-bind:class="{ hidden: isDisplayed }">
        <div class="lang-switch">
          <nav class="level">
            <p class="level-item has-text-centered lang-titles">
              Français
            </p>
            <button @click="languageSwitch" class="button is-rounded is-medium">
              <vue-fontawesome class=" arrows-icon lang-titles" icon="exchange-alt" />
            </button>
            <p class="level-item has-text-centered lang-titles">
              Inzebi
            </p>
          </nav>
        </div>

        <div class="dictionary-section">
          <div class="dictionary-form">
            <b-field grouped group-multiline>
              <b-autocomplete
                  placeholder="Entrer un mot français"
                  icon="search"
                  clearable
                  highlight="true"
                  :data="fetchFrenchToInzebi"
                  field="frenchword"
                  v-model="frenchToInzebiField"
                  @input="searchFrenchWord"
                  @select="option => selected1 = option">
                  <template #empty>No results found</template>
              </b-autocomplete>
              <button class="button" @click="getFrenchToInzebiWord">Rechercher</button>
            </b-field>
          </div>

          <div v-if="$store.state.frenchToLanguage.originalWord!=''" class="form-response">
            <h2 class="Response_word level-item"> 
              {{$store.state.frenchToLanguage.originalWord}} 
              <span class="arrow">
                <b-icon icon="long-arrow-alt-right" size="is-medium"></b-icon>
              </span> 
              {{$store.state.frenchToLanguage.translation}} 
            </h2>
            <ul>
              <li v-for="item in $store.state.frenchToLanguage.examples" :key="item.original">
                <h4 class="Response_example"> {{item.original}} </h4>
                <h4 class="Response_translation"> {{item.translation}} </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- *************** -->
      <!-- INZEBI - FRENCH -->
      <!-- *************** -->
      <div id="inzebi-french" v-bind:class="{ hidden: isHidden }">
          <div class="lang-switch">
          <nav class="level">
            <p class="level-item has-text-centered lang-titles">
              Inzebi
            </p>
            <button @click="languageSwitch" class="button is-rounded is-medium">
              <vue-fontawesome class="arrows-icon lang-titles" icon="exchange-alt" />
            </button>
            <p class="level-item has-text-centered lang-titles">
              Français
            </p>
          </nav>
        </div>

        <div class="dictionary-section">
          <div class="dictionary-form">
            <b-field grouped group-multiline>
              <b-autocomplete
                  placeholder="Entrer un mot inzebi"
                  icon="search"
                  clearable
                  highlight="true"
                  v-model="inzebiToFrenchField"
                  field="nzebi_word"
                  :data="fetchInzebiToFrench"
                  @input="searchInzebiWord"
                  @select="option => selected2 = option">
                  <template #empty>No results found</template>
              </b-autocomplete>
              <button class="button" @click="getInzebiToFrenchWord">Rechercher</button>
          </b-field>
          </div>

          <div v-if="$store.state.languageToFrench.originalWord!=''" class="form-response">
            <h2 class="Response_word level-item"> 
              {{$store.state.languageToFrench.originalWord}}
                <span class="arrow">
                  <b-icon icon="long-arrow-alt-right" size="is-medium"></b-icon>
                </span>
              {{$store.state.languageToFrench.translation}} </h2>
            <ul>
              <li v-for="item in $store.state.languageToFrench.examples" :key="item.original">
                <h4 class="Response_example"> {{item.original}} </h4>
                <h4 class="Response_translation"> {{item.translation}} </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import axios from 'axios'
import uris from '../../mongoURI/mongoClient'

export default {
  name: 'Dictionary',
  data: () => {
    return {
      isHidden: true,
      isDisplayed: false,

      //FRENCH TO INZEBI
      frenchToInzebiField: '',
      frenchToInzebiWords: [],
      frenchToNzebiWord: null,

      //INZEBI TO FRENCH
      inzebiToFrenchField: '',
      inzebiToFrenchWords: [],
      inzebiToFrenchWord: null,

      selected1: null,
      selected2: null
    }
  },
  methods: {
    languageSwitch: function () {
        if(this.isHidden==true){
          this.isHidden = false;
          this.isDisplayed = true;
        } else {
          this.isHidden = true;
          this.isDisplayed = false;
        }
    },
    // **************************
    // FRENCH TO INZEBI FUNCTIONS
    // **************************
    searchFrenchWord: function () {
      if(this.frenchToInzebiField!=''){

        axios.get(uris.getFrenchToInzebi+""+this.frenchToInzebiField)
          .then(response => {
            this.frenchToInzebiWords = response.data
          })
          .catch(error => {
            console.log(error)
          })

      } else {
        this.frenchToInzebiWords = [];
      }
    },
    getFrenchToInzebiWord: function () {
      if(this.frenchToInzebiField!=""){
        this.$store.dispatch("getLanguageWords",{
          word: this.frenchToInzebiField,
          translation: "french - inzebi"
        });
        this.frenchToInzebiField="";
      }
    },

    // **************************
    // INZEBI TO FRENCH FUNCTIONS
    // **************************
    searchInzebiWord: function () {
      if(this.inzebiToFrenchField!=''){

        axios.get(uris.getInzebiToFrench+""+this.inzebiToFrenchField)
          .then(response => {
            this.inzebiToFrenchWords = response.data
          })
          .catch(error => {
            console.log(error)
          })

      } else {
        this.inzebiToFrenchWords = [];
      }
    },
    getInzebiToFrenchWord: function () {
      if(this.inzebiToFrenchField!=""){
        this.$store.dispatch("getFrenchWords",{
          word: this.inzebiToFrenchField,
          translation: "inzebi - french"
        });
        this.inzebiToFrenchField="";
      }
    }
  },
  computed: {
    fetchFrenchToInzebi() {
      return this.frenchToInzebiWords.filter((option) => {
        return option
      })
    },

    fetchInzebiToFrench() {
      return this.inzebiToFrenchWords.filter((option) => {
        return option
      })
    }
  }
}
</script>

<style lang="scss">

.hidden {
  display: none;
}

.lang-switch {
  border-style: solid;
  border-color: black;
  border-radius: 5px;
  margin-right: 20%;
  margin-left: 20%;
  margin-top: 2.5%;
  margin-bottom: 5%;
}

.arrow {
  padding-top: 2.5%;
  margin-left: 2%;
  margin-right: 2%;
}

.dictionary-section {
  margin-right: 8%;
  margin-left: 8%;
  margin-bottom: 5%;
  display: flex;
}

.dictionary-form {
  display: flex;
  flex: 1;
  justify-content: center;
}

.form-response {
  border-style: solid;
  border-color: black;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
}

.arrows-icon:hover {
  animation: arrow_spin 1s;
}

@keyframes arrow_spin {
  100% {transform: rotate(180deg);}
}

.lang-titles {
  font-size: 150%;
}

.Response_word {
  margin-bottom: 1.5%;
  margin-left: 1%;
  font-size: 170%;
  text-align: center;
}

.Response_example {
  margin-left: 1%;
  font-size: 150%;
}

.Response_translation {
  margin-left: 1%;
  font-size: 150%;
}

</style>