<template>
    <div class="contact">
        <ul class="contact__list">
            <li class="contact__item">
                <a href="" class="contact__link contact__link--linkedin">
                    <span class="contact__label">Linkedin</span> <font-awesome-icon :icon="['fab', 'linkedin']" />
                </a>
            </li>

            <li class="contact__item">
                <a href="" class="contact__link contact__link--github">
                    <span class="contact__label">Github</span> <font-awesome-icon :icon="['fab', 'github']" />
                </a>
            </li>

            <li class="contact__item">
                <a href="" class="contact__link contact__link--email">
                    <span class="contact__label">Email</span> <font-awesome-icon :icon="['far', 'envelope']" />
                </a>
            </li>

            <li class="contact__item">
                <a href="" class="contact__link contact__link--resume">
                    <span class="contact__label">Resume</span> <font-awesome-icon :icon="['fas', 'portrait']" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

    .contact 
    {
        position: absolute;
        top: 50%;
        left: -6.2rem;
        z-index: $layer-contact;

        &__list
        {
            list-style: none;
        }

        &__link 
        {
            &:visited, &:link
            {
                display: block;
                color: $color-white;
                font-size: 2.5rem;
                padding: 1.2rem;
                transition: all 400ms $cubic-bezier-primary;
                text-decoration: none;
            }

            &--linkedin {background-color: $color-linkedin}
            &--github {background-color: $color-github}
            &--email {background-color: $color-email}
            &--resume {background-color: $color-gray}

            &:hover, &:active, &:focus
            {
                transform: translateX(5.5rem)
            }
        }

        &__label 
        {
            display: inline-block;
            vertical-align: middle;
            font-size: 1.6rem;
            margin-right: 1.2rem;
            width: 5rem;
            text-align: right;
        }
    }

</style>