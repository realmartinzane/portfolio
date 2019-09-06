<template>
  <main class="about">
      <primary-header-component> <span>Yo, it's </span> <span> Martin Zane</span> </primary-header-component>
      <primary-sub-component :text="'I\'m a web designer &amp; developer currently based in Stockholm, Sweden'"></primary-sub-component>
      <primary-sub-component :text="'Let\'s create something special'"></primary-sub-component>
      <button-component>View Projects</button-component>
  </main>
</template>

<script>
import PrimaryHeaderComponent from '../components/PrimaryHeaderComponent'
import PrimarySubComponent from '../components/PrimarySubComponent'
import ButtonComponent from '../components/ButtonComponent'

export default {
  components: {PrimaryHeaderComponent, PrimarySubComponent, ButtonComponent}
}
</script>

<style lang="scss">

    main.about 
    {
        @include absoluteCenter;
        width: 86rem;
        text-align: center;
        
        @media only screen and (max-width: 62.5em)
        {
          width: 85%;
        }

        @media only screen and (max-width: 44.375em)
        {
          width: 75%;
        }
    }

</style>
