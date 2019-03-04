import types from "./mutation-types";

const getters = {
  [types.ISEVENORODD](state) {
    return state.user.count % 2 === 0 ? '偶数' : '奇数';
  }
};

export default getters;
