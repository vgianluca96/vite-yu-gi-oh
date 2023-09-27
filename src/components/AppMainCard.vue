<script>

export default {
    name: 'AppMainCard',
    props: ['card']
}

</script>

<template>
    <div class="col">
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
</template>

<style></style>