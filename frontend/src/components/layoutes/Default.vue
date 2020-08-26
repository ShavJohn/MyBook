<template>
    <div>
        <customHeader/>
        <slot></slot>
    </div>
</template>

<script>
    import CustomHeader from './includes/CustomHeader';
    export default {
        components: {CustomHeader},
        methods: {

        },
    }
</script>

<style scoped>

</style>
