import types from '../mutation-types'

const state = {
  count: 6
};

const getters = {
  [types.COUNT](state) {
    return state.count;
  }
};

const actions = {
  [types.INCREMENT]: ({commit, state}) => {
    console.log(types.INCREMENT);
    commit(types.INCREMENT);
  },
  [types.DECREASE]: ({commit, state}) => {
    if(state.count > 10) {
      commit(types.DECREASE);
    }
  }
};

const mutations = {
  [types.INCREMENT]: (state) => {
    state.count++;
  },
  [types.DECREASE]: (state) => {
    state.count--;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
