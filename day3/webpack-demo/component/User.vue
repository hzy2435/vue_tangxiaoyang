<template>
    <div class="user">
        <h2>用户列表</h2>
        <ul>
            <li v-for="value in users">
                {{value}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                users: ['tom', 'alice', 'jack']
            }
        }
    }
</script>

<style>
    .user h2 {
        color: #ff00ff;
    }
</style>