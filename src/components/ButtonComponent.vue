<template>
    <router-link to="/portfolio" class="button">
        <button class="button__top"><slot></slot></button>
        <button class="button_bottom"><slot></slot></button>
    </router-link>
</template>

<script>
export default {
}
</script>

<style lang="scss">

    .button 
    {
        display: block;
        margin: auto;
        margin-top: 8rem;
        height: 5rem;
        width: 16rem;
        overflow: hidden;
        text-decoration: none;

        * 
        {
            transition: all 150ms;
            display: block;
            width: 100%;
            height: 4.5rem;
            line-height: 1;
            font-size: 2rem;
            border: 2px solid $color-white;
            background-color: $color-secondary;
            color: $color-white;
            font-family: $font-primary;
        }

        &_bottom 
        {
            margin-top: 1rem;
            background-color: $color-white;
            color: $color-secondary;
        }

        &:hover * 
        {
            transform: translateY(-5.5rem);
            cursor: pointer;
        }
    }

</style>
