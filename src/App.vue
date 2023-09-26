<script>
import axios from 'axios'

export default {
  data() {
    return {
      archetypes: null,
      card: null
    }
  },
  created() {
    axios
      .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
      .then(response => {
        this.archetypes = response.data;
      }),
      axios
        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        .then(response => {
          this.cards = response.data.data;
          console.log(this.cards[0])
        })
  }
}

</script>

<template>
  <header>
    <div class="p-4 pb-1">
      <h1>
        Yu-Gi-Oh Api
      </h1>
    </div>
  </header>
  <main class="py-4">


    <div class="container">

      <div class="col-3 pb-3">
        <select class="form-select" aria-label="select example">
          <option selected>Open this select menu</option>
          <option v-for="archetype in archetypes" :value="archetype.archetype_name">
            {{ archetype.archetype_name }}
          </option>
        </select>
      </div>

      <div class="cards-container">
        ciao
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>
