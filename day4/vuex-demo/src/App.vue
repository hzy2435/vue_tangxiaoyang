<template>
  <div id="app">
    <button @click="increment">增加</button>
    <button @click="decrease">减少</button>
    <button @click="incrementAsync">增加</button>
    <p>
      {{count}}
    </p>
    <p>
      {{isEvenOrOdd}}
    </p>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    // 方式1: 通过 this.$store 访问
    /*computed: {
      count() {
        return this.$store.state.count;
      }
    }*/
    // 方式2: 通过 mapGetters, mapActions 访问
    computed: mapGetters([
      'count',
      'isEvenOrOdd'
    ]),
    // 修改数据
    methods: mapActions([
      'increment',
      'decrease',
      'incrementAsync'
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
