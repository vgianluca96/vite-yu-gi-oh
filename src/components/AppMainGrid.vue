<script>
import { state } from '../state.js'

export default {
    name: 'AppMainFilter',
    data() {
        return {
            state,
        }
    },
    mounted() {
        this.state.getCard();
    },
}
</script>

<template>
    <div class="cards-container p-4">
        <div class="text-bg-dark p-3 fw-bold">
            Found 39 card
        </div>

        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-5" v-if="this.state.cards != null">
            <div class="col" v-for="card in this.state.cards">
                <div class="yugioh-bg">

                    <img :src="card.card_images[0].image_url" class="w-100 pb-3" alt="...">

                    <h5 class="text-center text-light text-uppercase pb-3">
                        {{ card.name }}
                    </h5>

                    <div class="text-center text-uppercase pb-3" v-if="card.archetype != null">
                        {{ card.archetype }}
                    </div>

                    <div class="text-center pb-3" v-else>
                        <em>No archetype found</em>
                    </div>

                </div>
            </div>

        </div>
        <div class="text-uppercase text-center fw-bold py-4" v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                <path
                    d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>
            loading
        </div>
    </div>
</template>

<style></style>