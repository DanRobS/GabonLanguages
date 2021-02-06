<template>
  <div id="dictionary-div" class="container">

      <!-- *************** -->
      <!-- FRENCH - INZEBI -->
      <!-- *************** -->
      <div id="lang-switch">
        <nav class="level">
          <p class="level-item has-text-centered lang-titles">
            Français
          </p>
          <p id="arrows-icon" class="lang-titles">
            <vue-fontawesome icon="exchange-alt" />
          </p>
          <p class="level-item has-text-centered lang-titles">
            Inzebi
          </p>
        </nav>
      </div>

      <div id="dictionary-section">
        <div id="dictionary-form">
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

        <div id="form-response">
          <h2 class="Response_word"> Response word </h2>
          <h4 class="Response_example"> this is an example (inzebi) </h4>
          <h4 class="Response_translation"> this is an example translation in french </h4>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Dictionary',
    data: () => {

    }
}
</script>

<style lang="scss">

#lang-switch {
  border-style: solid;
  border-color: black;
  border-radius: 5px;
  margin-right: 20%;
  margin-left: 20%;
  margin-top: 2.5%;
  margin-bottom: 5%;
}

#dictionary-section {
  margin-right: 8%;
  margin-left: 8%;
  margin-bottom: 5%;
  display: flex;
}

#dictionary-form {
  display: flex;
  flex: 1;
  justify-content: center;
}

#form-response {
  border-style: solid;
  border-color: black;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  padding-left: 3%;
  border-radius: 10px;
}

.lang-titles {
  font-size: 170%;
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