<template>
  <div id="login">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        msg: '用户登录'
      }
    }
  }
</script>

<style scoped>
  div #login {
    color: #f28394;
    font-size: 20px;
    text-shadow: beige;
  }
</style>
