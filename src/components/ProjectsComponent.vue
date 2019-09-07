<template>
    <div class="row portfolio">
        <project-component img="portfolio.png" :class="{'slide-left': loading}"></project-component>
        <project-component img="w3il.jpg" :class="{'slide-right': loading}"></project-component>
    </div>
</template>

<script>

import ProjectComponent from '../components/ProjectComponent'

export default {
    components: {ProjectComponent},
    data(){return{
        loading: true
    }},
    mounted()
    {
        setTimeout(() => 
        {
            this.loading = false
        }, 400)
    }
}
</script>

<style lang="scss">
    .row.portfolio {margin-top: 4rem}

    .slide-left
    {
        opacity: 0;
        visibility: hidden;
        transform: translateX(-5rem)
    }
    .slide-right
    {
        opacity: 0;
        visibility: hidden;
        transform: translateX(5rem)
    }
</style>