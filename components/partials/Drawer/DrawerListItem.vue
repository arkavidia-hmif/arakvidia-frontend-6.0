<template>
  <nuxt-link :to="to" style="color: black; text-decoration: none;">
    <v-list>
      <v-list-item>
        <v-list-item-title>{{ title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </nuxt-link>
</template>

<script>
export default {
  name: 'DrawerListItem',
  props: {
    to: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .v-list {
    padding: 0
  }
</style>
