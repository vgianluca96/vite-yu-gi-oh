<script>

import AppMainFilter from './components/AppMainFilter.vue'
import AppMainGrid from './components/AppMainGrid.vue'

export default {

  components: {
    AppMainFilter,
    AppMainGrid
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

      <AppMainFilter />

      <AppMainGrid />

    </div>
  </main>
</template>

<style lang="scss"></style>
