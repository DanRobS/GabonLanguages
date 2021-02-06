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
            <b-field>
              <b-autocomplete
                  placeholder="Entrer un mot français"
                  icon="search"
                  clearable
                  @select="option => selected = option">
                  <template #empty>No results found</template>
              </b-autocomplete>
          </b-field>
          </div>

          <div class="form-response">
            <h2 class="Response_word"> Response word </h2>
            <h4 class="Response_example"> this is an example (inzebi) </h4>
            <h4 class="Response_translation"> this is an example translation in french </h4>
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
            <b-field>
              <b-autocomplete
                  placeholder="Entrer un mot inzebi"
                  icon="search"
                  clearable
                  @select="option => selected = option">
                  <template #empty>No results found</template>
              </b-autocomplete>
          </b-field>
          </div>

          <div class="form-response">
            <h2 class="Response_word"> Response word </h2>
            <h4 class="Response_example"> this is an example (french) </h4>
            <h4 class="Response_translation"> this is an example translation in inzebi </h4>
          </div>
        </div>
      </div>

      
  </div>
</template>

<script>
export default {
    name: 'Dictionary',
    data: () => {
      return {
        isHidden: true,
        isDisplayed: false
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
  padding-left: 3%;
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