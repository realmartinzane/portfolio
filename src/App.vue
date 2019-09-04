<template>
  <div id="app">
      <brand-component></brand-component>
  </div>
</template>

<script>
import BrandComponent from './components/BrandComponent'

export default {
  components: {BrandComponent}
}
</script>

<style lang="scss">

  #app
  {
    min-height: 100%;
    padding: 1.5rem;
    background-color: $color-secondary;
  }

</style>
