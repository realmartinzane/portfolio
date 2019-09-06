<template>
  <div id="app">
      <brand-component></brand-component>
      <navigation-component></navigation-component>
      <contact-component></contact-component>
      <router-view></router-view>
  </div>
</template>

<script>
import BrandComponent from './components/BrandComponent'
import NavigationComponent from './components/NavigationComponent'
import ContactComponent from './components/ContactComponent'

export default {
  components: {BrandComponent, NavigationComponent, ContactComponent}
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
