<template>
    <div class="col-1-of-2 project">
        <img class="project__img" :src="'/img/' + img" alt="Project Image">
        <div class="project__overlay">
            <div class="project__buttons">
                <a href="#" class="project__button">
                    <font-awesome-icon icon="eye" />
                    Demo
                </a>
                <a href="#" class="project__button">
                    <font-awesome-icon icon="code" />
                    Code
                </a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['img']
  
}
</script>

<style lang="scss">
    .project
    {
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 10px $color-black;
        
        &:hover &__overlay
        {
            opacity: 1;
            visibility: visible;
        }

        &:hover &__img
        {
            transform: scale(1.1)
        }

        &__img 
        {
            width: 100%;
            transition: all 200ms;
        }

        &__overlay 
        {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: radial-gradient(transparent, rgba($color-black, .5));
            transition: all 200ms;
            opacity: 0;
            visibility: hidden;
            text-align: center;
        }

        &__buttons
        {
            position: absolute;
            bottom: 1.5rem;
            left: 50%;
            transform: translateX(-50%);
        }

        &__button
        {
            &:link, &:visited
            {
                display: inline-block;
                text-decoration: none;
                color: $color-secondary;
                font-family: $font-primary;
                font-size: 1.8rem;
                letter-spacing: 1px;
                margin: 0 1rem;
                background-color: rgba($color-white, .8);
                border: none;
                border-radius: 3px;
                padding: .5rem 2rem;
                cursor: pointer;
                transition: all 200ms;

                svg 
                {
                    margin-right: .5rem
                }
            }

            &:hover, &:focus, &:active
            {
                background-color: rgba($color-white, 1);
            }
        }
    }

</style>