import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({
    url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0',
    archetypes: null,
    cards: null,
    formValue: null,
    getArch() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then(response => {
                this.archetypes = response.data;
            })
    },
    getCard() {
        if (formfilter.value != 'null') {
            this.formValue = ['&archetype=' + formfilter.value];
            this.url += this.formValue;
        }
        console.log(this.url);
        axios
            .get(this.url)
            .then(response => {
                this.cards = response.data.data;
            })
    }
})
