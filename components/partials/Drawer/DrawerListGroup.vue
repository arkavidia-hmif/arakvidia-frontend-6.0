<template>
  <v-list-group
    no-action
  >
    <v-list slot="activator">
      <v-list-item-title>{{ title }}</v-list-item-title>
    </v-list>
    <v-list class="pl-4 grey lighten-4">
      <nuxt-link
        v-for="(item, i) in items"
        :key="i"
        :to="item.route"
        style="text-decoration: none;"
        class="black--text"
      >
        <v-list-item>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </nuxt-link>
    </v-list>
  </v-list-group>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Menu } from '~/constants/menus';

export default Vue.extend({
  name: 'DrawerListItem',
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    } as PropOptions<Array<Menu>>
  }
});
</script>
