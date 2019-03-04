<template>
    <div>
        <h1>我是 App 组件</h1>
        <user></user>
    </div>
</template>

<script>
    import user from './component/User.vue'
    export default {
        components: {
            user
        }
    }
</script>

<style scoped>
    body {
        background-color: #ccc;
    }
</style>