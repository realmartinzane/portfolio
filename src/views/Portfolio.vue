<template>
    <main>
        <secondary-header-component :class="{'slide-top': loading}">Portfolio</secondary-header-component>
        <secondary-sub-component :class="{'slide-top': loading}">Have a look at my latest work. These are not all of my projects, but the ones that I am most proud of. If you're intersted in more, don't be shy to hit me up!</secondary-sub-component>
        <projects-component></projects-component>
    </main>
</template>

<script>

import SecondaryHeaderComponent from '../components/SecondaryHeaderComponent'
import SecondarySubComponent from '../components/SecondarySubComponent'
import ProjectsComponent from '../components/ProjectsComponent'

export default {
  components: {SecondaryHeaderComponent, SecondarySubComponent, ProjectsComponent},
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

    .slide-top
    {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-5rem)
    }

</style>
