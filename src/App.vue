<template>
  <div id="app" class="game-container">
    <Game class="game-container__section"></Game>
    <Main class="game-container__section"></Main>
    <Shop class="game-container__section"></Shop>
  </div>
</template>

<script>
import Game from "./components/game/Game";
import Main from "./components/main/Main";
import Shop from "./components/shop/Shop";
import { mixin as VueTimers } from "vue-timers";
import "@/assets/style.scss";
import { mapActions } from "vuex";
export default {
  mixins: [VueTimers],
  components: { Shop, Main, Game },
  methods: {
    ...mapActions(["updateCounter","saveGame"])
  },
  timers: {
    updateCounter: { time: 1000, autostart: true, repeat: true },
    saveGame: { time: 10000, autostart: true, repeat: true }
  }
};
</script>

<style lang="scss">
.game-container {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  &__section {
    flex: 1;
  }
}
</style>
