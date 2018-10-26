<template>
    <div>
        <h2>Nav Bar</h2>
        <nav>
            <router-link class="button" v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`">{{routes.text}}</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            links: [

                {
                    id: 0,
                    text: 'Home',
                    page: '/Home'
                },

                {
                    id: 1,
                    text: 'About',
                    page: '/About'
                },

            ]
        }
    }
}
</script>

