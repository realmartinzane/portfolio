<template>
  <main class="about" :class="{'rotate': loading}">
      <primary-header-component> <span>Yo, it's </span> <span> Martin Zane</span> </primary-header-component>
      <primary-sub-component text="I'm a web designer &amp; developer currently based in Stockholm, Sweden"></primary-sub-component>
      <primary-sub-component text="Hit me up and let's create something special"></primary-sub-component>
      <button-component>View Projects</button-component>
  </main>
</template>

<script>
import PrimaryHeaderComponent from '../components/PrimaryHeaderComponent'
import PrimarySubComponent from '../components/PrimarySubComponent'
import ButtonComponent from '../components/ButtonComponent'

export default {
  components: {PrimaryHeaderComponent, PrimarySubComponent, ButtonComponent},
    data(){return{
        loading: true
    }},

    mounted()
    {
        setTimeout(() => 
        {
            this.loading = false
        }, 200)
    }
}
</script>

<style lang="scss">

    .about 
    {
        @include absoluteCenter;
        width: 86rem;
        text-align: center;
        opacity: 1;
        visibility: visible;
        transform-origin: 50% 100%;
        transition: all 300ms ease-out;
        
        @media only screen and (max-width: 62.5em)
        {
          width: 85%;
        }

        @media only screen and (max-width: 44.375em)
        {
          width: 75%;
        }
    }

    .rotate
    {
        opacity: 0;
        visibility: hidden;
        transform: translate(-50%, -50%) rotate(8deg);
    }

</style>
