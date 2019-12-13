<template>
  <div class="home">
    {{ownedUpgrades}}
  </div>
</template>

<script>
// @ is an alias to /src

import {mapGetters} from "vuex";

export default {
  name: "home",
  components: {},
  computed: {
    ...mapGetters(["ownedUpgrades"])
  }
};
</script>
