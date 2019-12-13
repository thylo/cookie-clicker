import Vue from "vue";
import Vuex from "vuex";
import upgrades from "../items/upgrades";

Vue.use(Vuex);

const state = {
  counter: 0,
  hitsPerSecond: 0,
  upgrades
};

export default new Vuex.Store({
  state,
  mutations: {
    setCounter: (state, value) => {
      state.counter = state.counter + value;
    },
    updateUpgrade: (state, value) => {
      state.upgrades = state.upgrades.map(u => (u.id === value.id ? value : u));
    },
    setHitsPerSecond: (state, value) => {
      state.hitsPerSecond = value;
    }
  },
  actions: {
    buy: ({ commit, getters }, upgrade) => {
      commit("updateUpgrade", {
        ...upgrade,
        count: upgrade.count + 1,
        price: Math.floor(upgrade.price * 1.2)
      });
      const hitsPerSecond = getters.ownedUpgrades.reduce(
        (accumulator, upgrade) => accumulator + upgrade.gain * upgrade.count,
        0
      );
      commit("setHitsPerSecond", hitsPerSecond);
      commit("setCounter", -upgrade.price);
    },
    incrementBy: ({ commit }, payload) => {
      commit("setCounter", payload);
    },
    updateCounter: ({ state, commit }) => {
      commit("setCounter", state.hitsPerSecond);
    },
    saveGame: ({ state }) => {
      localStorage.setItem("game", JSON.stringify(state));
    }
  },
  getters: {
    count: state => {
      return state.counter;
    },
    getUpgradeById: state => id => state.upgrades.find(u => u.id === id),
    allUpgrades: state => state.upgrades,
    hitsPerSecond: state => state.hitsPerSecond,
    ownedUpgrades: state => state.upgrades.filter(u => u.count > 0)
  }
});
