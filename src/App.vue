<script>
import axios from 'axios'

export default {
  data() {
    return {
      archetypes: null,
      cards: null
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
          //console.log(this.cards[0])
          //console.log(this.cards[0].name)
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

  <main class="yugioh-bg py-4">

    <div class="container">

      <div class="col-3 pb-3">
        <select class="form-select" aria-label="select example">
          <option selected>Open this select menu</option>
          <option v-for="archetype in archetypes" :value="archetype.archetype_name">
            {{ archetype.archetype_name }}
          </option>
        </select>
      </div>

      <div class="cards-container container py-2">
        <div class="text-bg-dark p-3 fw-bold">
          Found 39 card
        </div>

        <div class="row row-cols-4 g-5">
          <div class="col" v-for="card in cards">
            <div class="yugioh-bg">

              <img :src="card.card_images[0].image_url" class="w-100 pb-3" alt="...">

              <h5 class="text-center text-light pb-3">
                {{ card.name }}
              </h5>

              <div class="text-center pb-3 text-uppercase" v-if="card.archetype != null">
                {{ card.archetype }}
              </div>

              <div class="text-center pb-3" v-else>
                <em>No archetype found</em>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>
