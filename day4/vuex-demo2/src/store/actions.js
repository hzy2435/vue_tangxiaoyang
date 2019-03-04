import types from './mutation-types'

const actions = {
  [types.INCREMENTASYNC]({commit, state}) {

    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000)
    });

    p.then(() => {
      commit(types.INCREMENT);
    }).catch(() => {
      console.log("模拟异步请求.")
    });

  }
};

export default actions;
