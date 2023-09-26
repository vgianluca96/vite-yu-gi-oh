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
          console.log(this.cards[0])
          console.log(this.cards[0].card_images[0].image_url)
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

      <div class="cards-container">
        <div class="container py-2">
          <div class="text-bg-dark p-2 fw-bold">
            Found 39 card
          </div>
          <div class="row row-cols-4">
            <div class="col card" v-for="card in cards">
              <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">
                  ciao
                </h5>
                <p class="card-text">

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>
