<template>
    <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="nav_toggle" v-model="navActive">
        <label for="nav_toggle" class="navigation__button">
            <div class="navigation__line"></div>
            <div class="navigation__line"></div>
            <div class="navigation__line"></div>
        </label>

        <nav class="navigation__nav">
            <ul class="navigation__list">
                <li class="navigation__item" @click="navActive = false">
                    <router-link to="/about" class="navigation__link">
                        <span>About</span>
                    </router-link>
                </li>

                <li class="navigation__item" @click="navActive = false">
                    <router-link to="/portfolio" class="navigation__link">
                        <span>Portfolio</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data(){return{
        navActive: false
    }}
}
</script>

<style lang="scss">
    .navigation
    {
        // Button
        &__checkbox
        {
            display: none;
        }

        &__button
        {
            position: fixed;
            top: 3rem;
            right: 4rem;
            z-index: $layer-burger;
            width: 4.2rem;
            cursor: pointer;

            @media only screen and (min-width: 120em)
            {
                width: 6.2rem;
            }
        }

        &__line
        {
            display: inline-block;
            width: 100%;
            height: 2px;
            background-color: $color-text;
            transition: all 300ms $cubic-bezier-primary, background-color 300ms ease-in;
            vertical-align: middle;
            margin: auto;

            &:nth-child(1), &:nth-child(3) 
            {
                transform-origin: 5.5% 50%;

                @media only screen and (min-width: 100em)
                {
                    transform-origin: 20.5% 50%;
                }
            }
        }

        // Button hover
        &__button:hover &__line:nth-child(1)
        {
            transform: translateY(-.4rem)
        }

        &__button:hover &__line:nth-child(3)
        {
            transform: translateY(.4rem)
        }

        // Button Functionality
        &__checkbox:checked + &__button
        {
            transform: scale(1.4);
            transition: all 300ms $cubic-bezier-primary;
        }

        &__checkbox:checked + &__button:hover
        {
            transform: scale(1.6);
        }

        &__checkbox:checked + &__button &__line
        {
            background-color: $color-white;
            transition: all 300ms $cubic-bezier-primary, background-color 300ms ease-out;
        }

        &__checkbox:checked + &__button &__line:nth-child(2)
        {
            transform: translateX(-100%);
            opacity: 0;
            visibility: hidden;
        }

        &__checkbox:checked + &__button &__line:nth-child(1)
        {
            transform: rotate(45deg);
        }

        &__checkbox:checked + &__button &__line:nth-child(3)
        {
            transform: rotate(-45deg);
        }

        // Nav
        &__nav 
        {
            position: fixed;
            z-index: $layer-navigation;
            top: 0;
            left: 0;
            background: $color-primary;
            width: 100%;
            height: 0;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 300ms ease-out;
        }

        &__checkbox:checked ~ &__nav
        {
            height: 100%;
        }

        &__list 
        {
            list-style: none;
            width: 60rem;
            margin: auto;

            @media only screen and (max-width: 31.25em)
            {
                width: 80%;
            }

            @media only screen and (min-width: 100em)
            {
                width: 80rem;
            }
        }

        &__item {width: 100%;}

        &__link 
        {
            &:visited, &:link
            {
                width: 100%;
                padding: 2.5rem 0;
                display: block;
                text-align: center;
                font-size: 3.5rem;
                text-decoration: none;
                color: $color-white;
                text-transform: uppercase;
                position: relative;
                background: $color-primary-dark;
            }

            span {position: relative;}

            &::before 
            {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: $color-primary-dark-2;
                transform: scaleX(0);
                transition: all 300ms ease-out;
            }

            &:hover, &:active, &:focus
            {
                text-decoration: none;

                &:before 
                {
                    transition: all 300ms $cubic-bezier-primary;
                    transform: scaleX(1);
                }
            }
        }
    }
</style>