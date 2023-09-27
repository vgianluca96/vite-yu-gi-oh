import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({
    url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    urlTemp: '',
    archetypes: null,
    cards: null,
    getArchetypes() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then(response => {
                this.archetypes = response.data;
            })
    },
    getCards() {
        this.urlTemp = this.url;
        this.urlTemp += ['?num=' + numbFilter.value + '&offset=0'];
        if (archetypeFilter.value != 'null') {
            this.urlTemp += ['&archetype=' + archetypeFilter.value];
        }
        console.log(this.urlTemp);
        axios
            .get(this.urlTemp)
            .then(response => {
                this.cards = response.data.data;
            })
    }
})
