import Vue from "vue";
import Vuex from "vuex";
import upgrades from "../items/upgrades";

Vue.use(Vuex);

const defaultState = {
  counter: 0,
  hitsPerSecond: 1,
  owned: []
};
/*
const previousState = localStorage.getItem("game");
const state = previousState ? JSON.parse(previousState) : defaultState;
*/

export default new Vuex.Store({
  state: {
    ...defaultState,
    allUpgrades: upgrades
  },
  mutations: {
    increment: (state, value) => {
      state.counter = state.counter + value;
    },
    setOwnedItem: (state, value) => {
      state.owned.push(value);
    },
    hitsPerSecond: (state, value) => {
      state.hitsPerSecond = value;
    }
  },
  actions: {
    buy: ({ commit, state, getters }, upgrade) => {},
    incrementBy: ({ commit }, payload) => {
      commit("increment", payload);
    },
    updateCounter: ({ state, commit }) => {
      commit("increment", state.hitsPerSecond);
    },
    saveGame: ({ state }) => {
      localStorage.setItem("game", JSON.stringify(state));
    }
  },
  getters: {
    count: state => {
      return state.counter;
    },
    getUpgradeById: state => id => state.allUpgrades.find(u => u.id === id),
    ownedUpgrades: state =>
      state.allUpgrades
        .filter(({ id }) => state.owned.map(o => o.id).includes(id))
        .map(ownedUpgrade => ({
          ...ownedUpgrade,
          count: state.owned.find(owned => owned.id === ownedUpgrade.id).count
        })),
    getOwnedUpgradeById: (state, getters) => id => state.allUpgrades.find(u => u.id === id)
  }
});
