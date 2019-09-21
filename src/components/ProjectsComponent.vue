<template>
    <div class="portfolio">
        <div class="row">
            <project-component :project="projects.adventurecord" :class="{'slide-left': loading}">

            </project-component>

            <project-component :project="projects.w3il" :class="{'slide-right': loading}">

            </project-component>
        </div>
        <div class="row">
            <project-component :project="projects.portfolio" :class="{'slide-left': loading}">

            </project-component>
        </div>
    </div>
</template>

<script>

import ProjectComponent from '../components/ProjectComponent'

export default {
    components: {ProjectComponent},
    data(){return{
        loading: true,
        projects: 
        {
            adventurecord: 
            {
                name: 'Adventure Cord',
                summary: "For this project I worked with things like Authentication with OAuth2, PayPal API, Database Design, UI & UX, and I used Vue and Vuex to make the project a Single Page Application. \n\n Victor from Adventure Cord approached me to develop a website for his Discord bot where users can log in with their Discord accounts and view their profile stats, view other users's stats, read news and updates for the bot directly from the team and purchase products to use within the bot. Since I had a lot of time to build the project and wanted to learn as much as possible, I decided to build everything from scratch.",
                img: 'adventurecord.png',
                demo: '#',
                code: '#',
                technologies: 
                [
                    {name: 'HTML & CSS'},
                    {name: 'JavaScript'},
                    {name: 'SASS'},
                    {name: 'Vue.JS'},
                    {name: 'PHP'},
                    {name: 'Laravel'},
                    {name: 'MySQL'},
                    {name: 'Responsive'},
                    {name: 'UI/UX'},
                ]
            },

            w3il: 
            {
                name: 'Warcraft 3 Info League',
                summary: "On this project I was responsible for the initial UI/UX Design, the frontend implementation and most of the backend implementation. The goal was to create a competitive platform from scratch for the computer game Warcraft 3, where teams and individual players can create their profiles, sign up for diferent tournaments and leagues, and compete. \n\n I bounced many hats during this project and worked a lot on things like MySQL Database Design, CRUD with Laravel and PHP, UI and UX Design, SASS, JavaScript and more.",
                img: 'w3il.jpg',
                demo: '#',
                code: '#',
                technologies: 
                [
                    {name: 'HTML & CSS'},
                    {name: 'JavaScript'},
                    {name: 'SASS'},
                    {name: 'Vue.JS'},
                    {name: 'PHP'},
                    {name: 'Laravel'},
                    {name: 'MySQL'},
                    {name: 'Responsive'},
                    {name: 'UI/UX'},
                ]
            },

            portfolio: 
            {
                name: 'Portfolio',
                summary: 'The idea behind this project was to create a showcase of all my big projects for the past year. I tried to keep the UI as simple as possible without any fluff. \n\n This is a Single Page Application and is built using Vue.js and SASS with the BEM methodology.',
                img: 'portfolio.png',
                demo: '#',
                code: '#',
                technologies: 
                [
                    {name: 'HTML & CSS'},
                    {name: 'JavaScript'},
                    {name: 'SASS'},
                    {name: 'Vue.JS'},
                    {name: 'Responsive'},
                    {name: 'UI/UX'},
                ]
            }
        }
    }},
    mounted()
    {
        setTimeout(() => 
        {
            this.loading = false
        }, 400)
    }
}
</script>

<style lang="scss">
    .portfolio {margin-top: 4rem}

    .slide-left
    {
        opacity: 0;
        visibility: hidden;
        transform: translateX(-5rem)
    }
    .slide-right
    {
        opacity: 0;
        visibility: hidden;
        transform: translateX(5rem)
    }
</style>