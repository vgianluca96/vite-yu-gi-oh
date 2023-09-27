<script>

import AppMainFilter from './AppMainFilter.vue'
import AppMainGrid from './AppMainGrid.vue'
import { state } from '../state.js'

export default {
    name: 'AppMain',
    components: {
        AppMainFilter,
        AppMainGrid
    },
    data() {
        return {
            state,
        }
    },
    mounted() {
        this.state.getArch();
        this.state.getCard();
    },

}

</script>

<template>
    <main class="yugioh-bg py-4">

        <div class="container">

            <AppMainFilter :archetypes="this.state.archetypes" />

            <AppMainGrid :cards="this.state.cards" />

        </div>

    </main>
</template>

<style></style>