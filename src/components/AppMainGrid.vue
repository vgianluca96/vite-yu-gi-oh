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

        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-5">
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
    </div>
</template>

<style></style>