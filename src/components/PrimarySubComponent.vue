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

        @media only screen and (max-width: 44.375em)
        {
          font-size: 2rem;
        }

        &__word 
        {
            display: inline-block;
            vertical-align: top;
            margin: 0 .5rem;
            height: 4rem;
            overflow: hidden;

            @media only screen and (max-width: 44.375em)
            {
                height: 2.5rem;
                margin: 0 0.3rem;
            }

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
                transform: translateY(-4rem);

                @media only screen and (max-width: 44.375em)
                {
                    transform: translateY(-3rem);
                }
            }

            &--active &__bottom
            {
                visibility: visible;
            }
        }

        &__top 
        {
            margin-bottom: 1rem;
        }

        &__bottom 
        {
            color: $color-text-dark;
        }
    }
</style>