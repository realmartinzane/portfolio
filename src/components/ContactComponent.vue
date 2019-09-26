<template>
    <div class="contact">
        <ul class="contact__list">
            <li class="contact__item">
                <a href="https://www.linkedin.com/in/realmartinzane/" target="_blank" class="contact__link contact__link--linkedin">
                    <span class="contact__label">Linkedin</span> <font-awesome-icon :icon="['fab', 'linkedin']" />
                </a>
            </li>

            <li class="contact__item">
                <a href="https://github.com/realmartinzane" target="_blank" class="contact__link contact__link--github">
                    <span class="contact__label">Github</span> <font-awesome-icon :icon="['fab', 'github']" />
                </a>
            </li>

            <li class="contact__item">
                <a href="mailto:realmartinzane@gmail.com" target="_blank" class="contact__link contact__link--email">
                    <span class="contact__label">Email</span> <font-awesome-icon :icon="['far', 'envelope']" />
                </a>
            </li>

            <li class="contact__item">
                <a href="https://drive.google.com/file/d/1bt7OCMO7gF36BJgi2X5AzscXx4zuW_7k/view?usp=sharing" target="_blank" class="contact__link contact__link--resume">
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
        left: -7rem;
        transform: translateY(-50%);
        z-index: $layer-contact;

        @media only screen and (min-width: 100em)
        {
            left: -12.5rem
        }

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
                transition: all 450ms $cubic-bezier-primary;
                text-decoration: none;

                @media only screen and (max-width: 31.25em)
                {
                    padding: 1rem;
                }

                @media only screen and (min-width: 100em)
                {
                    padding: 1.5rem;
                    font-size: 2.8rem;
                }
            }

            &--linkedin {background-color: $color-linkedin}
            &--github {background-color: $color-github}
            &--email {background-color: $color-email}
            &--resume {background-color: $color-gray}

            &:hover, &:active, &:focus
            {
                transform: translateX(6.4rem)
            }
        }

        &__label 
        {
            display: inline-block;
            vertical-align: middle;
            font-size: 1.6rem;
            margin-right: 1.2rem;
            width: 5.8rem;
            letter-spacing: 1px;
            text-align: right;

            @media only screen and (min-width: 100em)
            {
                width: 10.8rem;
            }
        }
    }

</style>