<template>
  <div class="shop">
    <h1>Shop</h1>
    <ul>
      <li v-for="upgrade in upgrades" :key="upgrade.id">
        <button @click="buy(upgrade)">{{ upgrade.name }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import upgrades from "../../items/upgrades";
import { mapActions } from "vuex";

export default {
  name: "Shop",
  data: function() {
    return {
      upgrades
    };
  },
  methods: {
    ...mapActions(["buy"])
  }
};
</script>

<style scoped>
.shop {
  background: orangered;
}
</style>
