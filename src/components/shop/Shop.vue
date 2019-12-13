<template>
  <div class="shop">
    <h1>Shop</h1>
    <ul class="shop__list">
      <li v-for="upgrade in allUpgrades" :key="upgrade.id" class="shop__item">
        <upgrade :upgrade="upgrade" @buy="buy(upgrade)" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Upgrade from "./components/Upgrade";

export default {
  name: "Shop",
  components: { Upgrade },
  methods: {
    ...mapActions(["buy"])
  },
  computed: {
    ...mapGetters(["allUpgrades"])
  }
};
</script>

<style lang="scss">
.shop {
  background: orangered;
  &__list {
    list-style: none;
    padding: 0;
  }
  &__item{
    padding:0 1rem 1rem 1rem;
  }
}
</style>
