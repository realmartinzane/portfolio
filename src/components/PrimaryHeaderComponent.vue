<template>
    <h1 class="primary-header"> 
        <slot></slot>
    </h1>
</template>

<script>

export default {
  
}
</script>

<style lang="scss">
    .primary-header
    {
        margin: 0;
        font-size: 10.5rem;
        color: $color-white;
        letter-spacing: 4px;
    }
</style>