<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <el-button>按钮1</el-button>
    <el-button type="success">按钮1</el-button>
    <el-button type="info">按钮1</el-button>
    <el-button type="warning">按钮1</el-button>
    <el-button type="danger">按钮1</el-button>
    <el-button type="danger" icon="el-icon-close">按钮1</el-button>
    <el-button type="danger" icon="el-icon-loading">按钮1</el-button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
