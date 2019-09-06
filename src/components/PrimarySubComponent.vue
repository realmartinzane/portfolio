<template>
    <sub class="primary-sub">
        <div class="primary-sub__word" v-for="(word, index) in textArray" :key="index" @mouseover="wordActive($event.target)">
            <div class="primary-sub__top">{{ word }}</div>
            <div class="primary-sub__bottom">{{ word }}</div>
        </div>
    </sub>
</template>

<script>

export default {
    props: ['text'],
    data(){return{
        textArray: []
    }},
    created()
    {
        this.textArray = this.text.split(' ');
    },
    methods: 
    {
        wordActive(e)
        {
            if(e.classList.contains('primary-sub__top') ||
               e.classList.contains('primary-sub__bottom'))
            {
                e.parentNode.classList.add('primary-sub__word--active');
                setTimeout(() => 
                {
                e.parentNode.classList.remove('primary-sub__word--active');
                }, 2000);
            }
        },
    }
}
</script>

<style lang="scss">
    .primary-sub
    {
        color: $color-text;
        line-height: 1;
        font-size: 3rem;
        display: block;

        &__word 
        {
            display: inline-block;
            vertical-align: top;
            margin: 0 .5rem;
            height: 4rem;
            overflow: hidden;

            * 
            {
                transition: all 250ms;
            }

            &__bottom 
            {
                visibility: hidden;
            }

            &--active *
            {
                transform: translateY(-3.6rem);
            }

            &--active &__bottom
            {
                visibility: visible;
            }
        }

        &__top 
        {
            margin-bottom: .6rem;
        }

        &__bottom 
        {
            color: $color-text-dark;
        }
    }
</style>