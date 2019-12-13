import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    hitPerSecond: 0
  },
  mutations: {
    increment: (state, value) => {
      state.counter = state.counter + value;
    }
  },
  actions: {
    incrementBy: ({ commit }, payload) => {
      commit("increment", payload);
    }
  },
  getters: {
    count: state => {
      return state.counter;
    }
  }
});
