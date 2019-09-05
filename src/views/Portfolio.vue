<template>
  <main>
      <secondary-header-component>Portfolio</secondary-header-component>
      <sub-header-component>Have a look at my latest work. These are not all of my projects, but the ones that I am most proud of. If you're intersted in more, don't be shy to hit me up!</sub-header-component>
      <projects-component></projects-component>
  </main>
</template>

<script>

import SecondaryHeaderComponent from '../components/SecondaryHeaderComponent'
import SubHeaderComponent from '../components/SubHeaderComponent'
import ProjectsComponent from '../components/ProjectsComponent'

export default {
  components: {SecondaryHeaderComponent, SubHeaderComponent, ProjectsComponent}
}
</script>
