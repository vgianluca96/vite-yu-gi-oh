<script>

export default {
    name: 'AppMainFilter',
    props: ['archetypes'],
}

</script>

<template>
    <div class="d-flex align-items-center pb-3">
        <div class="input-group">
            <div class="input-group-text">
                Filter by Archetype
            </div>
            <div>
                <select class="form-select" aria-label="select example" id="archetypeFilter" @change="$emit('filter')">
                    <option selected value="null">
                        No filter
                    </option>
                    <option option v-for=" archetype in archetypes" :value="archetype.archetype_name">
                        {{ archetype.archetype_name }}
                    </option>
                </select>
            </div>
        </div>

        <div class="input-group ms-2">
            <div class="input-group-text">
                Number of cards
            </div>
            <div>
                <select class="form-select" aria-label="select example" id="numbFilter" @change="$emit('filter')">
                    <option selected value=5>5</option>
                    <option value=10>10</option>
                    <option value=20>20</option>
                    <option value=50>50</option>
                    <option value=100>100</option>
                    <option value=200>200</option>
                </select>
            </div>
        </div>
    </div>
</template>

<style></style>