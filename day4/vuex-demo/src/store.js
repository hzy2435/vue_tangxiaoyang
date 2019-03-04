/*
 * vuex 配置文件
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 定义 state, 存储属性(数据)
let state = {
  count: 6
};

// 定义 getters, 访问属性(数据)
let getters = {
  count(state){
    return state.count;
  },
  isEvenOrOdd(state) {
    return state.count % 2 === 0 ? '偶数' : '奇数';
  }
};

// 定义 actions, 要执行的操作, 如流程判断, 异步请求等
const actions = {
  /*increment(context) {
    console.log(context); // context 包含 commit, state, dispatch 等
    context.commit(); // 调用 commit 函数, 修改数据的唯一方式
  }*/
  // 以上也可以通过以下写法
  increment({commit, state}){
    commit('increment', 10);  // 提交时指定标识, 名称可以自定义, 可认为是类型名
  },
  decrease({commit, state}) {
    if(state.count > 10) {
      commit('decrease');
    }
  },
  incrementAsync({commit, state}) {
    // 模拟异步操作
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000)
    });
    p.then(() => {
      commit('increment', 1);
    }).catch(() => {
      console.log("异步操作");
    });
  }
};

// 定义 mutations, 处理状态(数据)的改变
const mutations = {
  increment(state, i) {
    state.count = state.count + i;
  },
  decrease: state => {
    state.count--;
  }
};

// 创建 store
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

// 导出
export default store;
