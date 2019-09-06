<template>
    <router-link to="/about" class="brand">
        <picture class="brand__img">
            <source srcset="/img/brand_2x.png 1x, /img/brand_large_2x.png 2x" media="(min-width: 120em)">
            <img srcset="/img/brand_1x.png 1x, /img/brand_2x.png 2x" alt="Martin Zane Brand Image">
        </picture>
    
        
    </router-link>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

    .brand
    {
        width: 10rem;
        height: 6rem;
        display: block;

        @media only screen and (min-width: 100em)
        {
            width: 20rem;
            height: 12rem;
        }
        
        &__img
        {
            width: 100%;
            height: 100%;
        }
    }

</style>