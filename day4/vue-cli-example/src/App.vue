<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <hr>
    <router-link to="/home">home</router-link>
    <router-link to="/news">news</router-link>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <hr>
    <button @click="send">发送 axios 请求</button>
    <hr>
    <my-button @click.native="getData"></my-button>
  </div>
</template>

<script>
  import axios from 'axios'
  import MyButton from './components/MyButton'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    console.log(this.$route);
  },
  watch: {
    $route: function (newVal, oldVal) {
      console.log('路由发生变化, 新路径: ' + newVal.path);
    }
  },
  methods: {
    send() {
      let params = {
        username: 'hzy2435'
      };
      axios.get('https://api.github.com/users/' + params.username)
        .then(res => {
          console.log(res.data);
        }).catch(error => {
          console.log(error);
      })
    },
    getData() {
      let params = {
        username: 'hzy2435'
      };
      this.$http.get('https://api.github.com/users/' + params.username)
        .then(res => {
          console.log(res.data);
        }).catch(err => {
          console.log(err);
      });
    }
  },
  components: {
    MyButton
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
