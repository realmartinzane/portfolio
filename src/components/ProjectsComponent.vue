<template>
    <div class="row portfolio">
        <project-component img="portfolio.png"></project-component>
        <project-component img="w3il.jpg"></project-component>
    </div>
</template>

<script>

import ProjectComponent from '../components/ProjectComponent'

export default {
  components: {ProjectComponent}
}
</script>

<style lang="scss">
    .row.portfolio {margin-top: 4rem}
</style>