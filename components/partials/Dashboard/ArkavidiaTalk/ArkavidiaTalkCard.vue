<template>
  <v-card elevation="2" height="100%" class="d-flex flex-column">
    <v-card-text :style="{borderTop: `6px solid ${color}`}" class="flex">
      <div class="font-weight-bold">
        {{ category }}
      </div>
      <div class="title cyan--text text--darken-2 mt-2 font-weight-bold">
        {{ title }}
      </div>
      <div class="mt-2 black--text">
        <v-icon small color="black">
          far fa-calendar
        </v-icon>
        &nbsp;
        {{ time }}
      </div>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-chip
        v-if="registered"
        color="green"
        text-color="white"
      >
        <v-avatar left>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-avatar>
        Sudah terdaftar
      </v-chip>
      <v-spacer />
      <v-btn text class="teal--text text-none" :to="to" :disabled="!enabled">
        {{ registered ? 'Lihat' : 'Daftar' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ArkavidiaTalkCard',
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: '#00000000'
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
    registered: {
      type: Boolean,
      required: false,
      default: false
    }
  }
});
</script>

<style scoped>

</style>
