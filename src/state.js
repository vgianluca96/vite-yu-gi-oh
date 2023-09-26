import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({

    archetypes: null,
    cards: null,
    getArch() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then(response => {
                this.archetypes = response.data;
            })
    },
    getCard() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0')
            .then(response => {
                this.cards = response.data.data;
            })
    }
})
