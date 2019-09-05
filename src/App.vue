<template>
  <div id="app">
      <brand-component></brand-component>
      <navigation-component></navigation-component>
      <router-view></router-view>
  </div>
</template>

<script>
import BrandComponent from './components/BrandComponent'
import NavigationComponent from './components/NavigationComponent'

export default {
  components: {BrandComponent, NavigationComponent}
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
