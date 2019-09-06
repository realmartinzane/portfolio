<template>
    <router-link to="/about" class="brand">
        <img class="brand__img" srcset="/img/brand_1x.png 1x, /img/brand_2x.png 2x" 
             alt="Martin Zane Brand Image">
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
        
        &__img
        {
            width: 100%;
            height: 100%;
        }
    }

</style>