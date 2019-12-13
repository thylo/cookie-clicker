<template>
  <button class="shop-upgrade" @click="$emit('buy')" :disabled="disabled">
    <span class="shop-upgrade__price"> {{ upgrade.price }}$ </span>
    <span class="shop-upgrade__body">
      <span class="shop-upgrade__name">{{ upgrade.name }}</span>
      <span class="shop-upgrade__power">{{ power }}</span>
    </span>
    <span class="shop-upgrade__count">
      {{ upgrade.count }}
    </span>
  </button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Upgrade",
  props: ["upgrade"],
  computed: {
    ...mapGetters(["count"]),
    disabled: function() {
      return this.count <= this.upgrade.price;
    },
    power() {
      if (this.upgrade.gain > 1) {
        return `${this.upgrade.gain} hits per second`;
      }
      return `${this.upgrade.gain} hit per second`;
    }
  }
};
</script>

<style lang="scss">
.shop-upgrade {
  border: 1px solid #dedede;
  background: white;
  border-radius: 3px;
  display: flex;
  width: 100%;
  align-items: center;
  &__price,
  &__count {
    flex: 1;
    font-size: 2rem;
  }
  &__body {
    flex: 3;
    text-align: center;
  }
  &__name {
    display: block;
    font-weight: bold;
    font-size: 1.5rem;
  }
  &__power {
    display: block;
  }
}
</style>
