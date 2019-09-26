<template>
    <div class="col-1-of-2 project">
        <div class="project__item">
            <img class="project__img" :src="'/img/' + project.img" alt="Project Image">
            <div class="project__overlay">
                <div class="project__buttons">
                    <button href="#" class="project__button" @click="showProject = true">
                        <font-awesome-icon icon="eye" />
                        View Project
                    </button>
                </div>
            </div>
        </div>

        <div class="project__background" :class="{'project__background--show': showProject}">
            <div class="project__modal" :class="{'project__modal--show': showProject}">
                <button class="project__close" @click="showProject = false"><font-awesome-icon icon="times" /></button>

                <div class="project__left">
                    <img class="project__img--modal" :src="'/img/' + project.img" alt="Project Image">
                </div

                ><div class="project__right">
                    <div class="project__label">Project</div>
                    <h3 class="project__name">{{ project.name }}</h3>
                    <ul class="project__technologies">
                        <li class="project__technology" v-for="(technology, index) in project.technologies" :key="index">{{ technology.name }}</li>
                    </ul>
                    <div class="project__label">About</div>
                    <p class="project__summary">
                        {{ project.summary }}
                    </p>
                    <a :href="project.demo" class="project__button project__button--modal" target="_blank"><font-awesome-icon icon="eye" /> Demo</a>
                    <button href="#" class="project__button project__button--modal" v-if="project.code == 'private'" disabled><font-awesome-icon icon="code" /> Private</button>
                    <a :href="project.code" class="project__button project__button--modal" target="_blank" v-else><font-awesome-icon icon="code" /> Code</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ButtonComponent from './ButtonComponent'

export default {
    props: ['project'],
    components: {ButtonComponent},
    data(){return{
        showProject: false
    }}
}
</script>

<style lang="scss">

    .project
    {
        overflow: hidden;
        box-shadow: 0 0 10px $color-black;
        opacity: 1;
        transition: all 300ms ease-out;
        visibility: visible;
        
        &__item 
        {
            position: relative;
        }
        
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
            &--modal 
            {
                object-fit: cover;
                width: 100%;
                height: 100%;

                @media only screen and (max-width: 45em) 
                {
                    object-fit: contain;
                }
            }
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
            width: 100%;
            
            @media only screen and (max-width: 31.25em)
            {
                bottom: .5rem;
            }
        }

        &__button
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

            @media only screen and (max-width: 31.25em)
            {
                font-size: 1.6rem;
            }
            &:disabled, &:disabled:hover
            {
                background-color: rgba($color-white, .4);
                cursor: default;
                
            }

            svg 
            {
                margin-right: .5rem
            }

            &:hover, &:focus, &:active
            {
                background-color: rgba($color-white, 1);
            }

            &--modal 
            {
                margin: 2rem .5rem 0 .5rem;
                font-size: 1.4rem;
                padding: .5rem 1.5rem;
            }
        }

        &__background 
        {
            position: fixed;
            top: 0;
            left: 0;
            z-index: $layer-modal;
            width: 100%;
            height: 100%;
            background-color: rgba($color-black, .3);
            opacity: 0;
            visibility: hidden;
            transition: all 400ms $cubic-bezier-primary;

            &--show 
            {
                opacity: 1;
                visibility: visible;
            }
        }

        &__modal
        {
            @include absoluteCenter;
            width: 100rem;
            height: 50rem;
            background-color: $color-primary;
            user-select: text;
            box-shadow: 0 0 5px $color-black;
            opacity: 0;
            transition: all 400ms 200ms $cubic-bezier-primary;
            transform: translate(-50%, -50%) scale(.25);

            &--show 
            {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            
            @media only screen and (max-width: 56.25em) 
            {
                width: 95%;
                min-height: 50rem;
            }

            @media only screen and (max-width: 45em) 
            {
                width: 43rem;
                height: auto;
            }

            @media only screen and (max-width: 25em) 
            {
                width: 38rem;
            }
        }

        &__close 
        {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            background-color: transparent;
            border: none;
            color: $color-text;
            font-size: 3rem;
            cursor: pointer;
            transition: all 200ms $cubic-bezier-primary;

            &:hover 
            {
                transform: scale(1.2)
            }
        }

        &__left 
        {
            width: 60rem;
            height: 100%;
            display: inline-block;
            @media only screen and (max-width: 56.25em) 
            {
                width: 55%;
            }

            @media only screen and (max-width: 45em) 
            {
                width: 100%;
                height: auto;
            }
            
        }

        &__right 
        {
            width: calc(100% - 60.5rem);
            display: inline-block;
            vertical-align: top;
            padding: 1.5rem;
            color: $color-white;

            @media only screen and (max-width: 56.25em) 
            {
                width: 45%;
            }

            @media only screen and (max-width: 45em) 
            {
                width: 100%;
            }
        }

        &__label 
        {
            font-size: 1.6rem;
            color: $color-text;
            letter-spacing: 1px;
        }

        &__name 
        {
            font-size: 3rem;
            letter-spacing: 1px;
            font-weight: lighter;
        }

        &__technologies 
        {
            list-style: none;
            margin-bottom: 2rem;
        }

        &__technology 
        {
            display: inline-block;
            margin: .5rem;
            border: 1px solid $color-secondary;
            padding: .5rem;
            color: $color-text;
            font-weight: lighter;
            letter-spacing: 1px;
            font-size: 1.3rem;
        }
        &__summary 
        {
            margin-top: 1rem;
            font-family: $font-secondary;
            font-size: 1.4rem;
            line-height: 1.5;
            color: $color-text;
            overflow-y: scroll;
            height: 22rem;
            white-space: pre-line;
            
            &::-webkit-scrollbar-track
            {
                background-color: $color-primary-dark-2;
            }
        }
    }

</style>