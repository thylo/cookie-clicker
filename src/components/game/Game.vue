<template>
  <div class="game">
    <div>
      <p>You have killed</p>
      <p class="game__count">{{ count }}</p>
      <p>Zombie</p>
    </div>
    <button @click="incrementBy(1)">Kill zombie</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Game",
  methods: {
    ...mapActions([
      "incrementBy" // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
    ])
  },
  computed: {
    ...mapGetters(["count"])
  }
};
</script>

<style lang="scss">
.game {
  background: orangered;
  &__count {
    font-size: 24px;
  }
}
</style>
