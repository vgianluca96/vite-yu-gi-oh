<script>

export default {
    name: 'AppMainFilter',
    props: ['archetypes']
}
</script>

<template>
    <div class="col-3 pb-3">
        <select class="form-select" aria-label="select example">
            <option selected>Filter by Card Archetype</option>
            <option v-for="archetype in archetypes" :value="archetype.archetype_name">
                {{ archetype.archetype_name }}
            </option>
        </select>
    </div>
</template>

<style></style>