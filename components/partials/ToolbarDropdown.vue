<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn class="text-capitalize" text v-on="on">
        {{ title }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in list" :key="index" :to="item.route" exact>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ToolbarDropdown',
  props: {
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  }
})
</script>

<style>
  .v-btn {
    font-weight: bold
  }
</style>
