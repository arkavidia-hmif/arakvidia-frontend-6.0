<template>
  <v-card elevation="2">
    <v-card-text>
      <v-list-item three-line class="px-0">
        <v-list-item-content>
          <v-list-item-title class="headline cyan--text text--darken-2">
            <strong>{{ title }}</strong>
          </v-list-item-title>
          <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-spacer />
      <v-btn text class="teal--text text-none" :to="to" :disabled="!enabled">
        {{ buttonTitle }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'CompetitionCard',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    enabled: {
      type: Boolean,
      required: false,
      default: true
    },
    buttonTitle: {
      type: String,
      required: false,
      default: 'Daftar'
    }
  }
});
</script>

<style scoped>

</style>
