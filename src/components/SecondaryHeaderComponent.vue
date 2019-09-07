<template>
  <h2 class="secondary-header"> 
      <slot></slot>
    </h2>
</template>

<script>

export default {
  
}
</script>

<style lang="scss">
    .secondary-header
    {
        font-size: 4.0rem;
        color: $color-white;
        letter-spacing: 2px;
        user-select: text;
        
        opacity: 1;
        visibility: visible;
        transition: all 300ms ease-out;
    }
</style>