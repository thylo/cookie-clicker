<template>
  <div class="home">
    <Upgrade
      v-for="upgrade in ownedUpgrades"
      :key="upgrade.id"
      :upgrade="upgrade"
    />
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters } from "vuex";
import Upgrade from "../components/Upgrade";

export default {
  name: "home",
  components: { Upgrade },
  computed: {
    ...mapGetters(["ownedUpgrades"])
  }
};
</script>
<style lang="scss">
.home {
  overflow-y: auto;
}
</style>
