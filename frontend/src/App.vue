<template>
    <div id="app">
        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>
    export default {
        name: 'App',
        computed: {
            layout() {
                return this.$route.meta.layout ? `${this.$route.meta.layout}-layout` : 'default-layout'
            }
        }
    }
</script>

<style>

</style>

