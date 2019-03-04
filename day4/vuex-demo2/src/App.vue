<template>
  <div id="app">
    <button @click="INCREMENT">增加</button>
    <button @click="DECREASE">减少</button>
    <button @click="INCREMENTASYNC">延迟增加</button>
    <p>{{COUNT}}</p>
    <p>{{ISEVENORODD}}</p>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import types from './store/mutation-types'

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: mapGetters([
      types.COUNT,
      types.ISEVENORODD
    ]),
    methods: mapActions([
      types.INCREMENT,
      types.DECREASE,
      types.INCREMENTASYNC
    ])
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
