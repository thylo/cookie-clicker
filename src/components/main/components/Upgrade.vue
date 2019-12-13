<template>
  <div class="upgrade">
    <h3>{{ upgrade.name }}</h3>
    <ul class="upgrade__list">
      <li v-for="item in items" :key="item.id">
        <img :src="upgrade.image" :alt="item.name" class="upgrade__image"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Upgrade",
  props: ["upgrade"],
  computed: {
    items: function() {
      return Array(this.upgrade.count).fill(0);
    }
  }
};
</script>

<style lang="scss">
.upgrade {
  &__list {
    list-style: none;
    padding: 0;
    display: flex;
  }
  &__image{
    width:50px;
  }
}
</style>
