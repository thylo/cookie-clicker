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
import "@/assets/style.scss";
export default {
  components: { Shop, Main, Game }
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
