<template>
  <v-list-group
    no-action
  >
    <v-list slot="activator">
      <v-list-item-title>{{title}}</v-list-item-title>
    </v-list>
    <nuxt-link 
      v-for="item in items"
      :key= "item.title"
      :to=item.to
      style="color: black; text-decoration: none;"
    >
      <v-list>
        <v-list-item>
          <v-list-item-title >{{item.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </nuxt-link>
  </v-list-group>
</template>

<script>
export default {
    name: 'DrawerListItem',
    props: [ "items", "title"]
}
</script>
