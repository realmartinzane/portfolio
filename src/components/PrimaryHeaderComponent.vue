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

        @media only screen and (max-width: 62.5em)
        {
            font-size: 8rem
        }

        @media only screen and (max-width: 44.375em)
        {
            font-size: 5rem;
            margin-bottom: 1rem;
        }

        @media only screen and (max-width: 31.25em)
        {
            span {display: block;}
        }
    }
</style>