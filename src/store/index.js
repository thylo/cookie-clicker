import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const defaultState = {
  counter: 0,
  hitsPerSecond: 1
};
const previousState = localStorage.getItem("game");
const state = previousState? JSON.parse(previousState) : defaultState;

export default new Vuex.Store({
  state,
  mutations: {
    increment: (state, value) => {
      state.counter = state.counter + value;
    }
  },
  actions: {
    incrementBy: ({ commit }, payload) => {
      commit("increment", payload);
    },
    updateCounter: ({ state, commit }) => {
      commit("increment", state.hitsPerSecond);
      console.log("update counter", state.counter);
    },
    saveGame: ({ state }) => {
      localStorage.setItem("game", JSON.stringify(state));
    }
  },
  getters: {
    count: state => {
      return state.counter;
    }
  }
});
