<template>
  <v-card elevation="2" class="d-flex flex-column">
    <v-card-text :style="{borderTop: `6px solid ${color}`}" class="flex">
      <div class="font-weight-bold">
        {{ category }}
      </div>
      <div class="subtitle grey--text text--darken-3 mt-2">
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
      <template v-if="!participated && seatsremaining == 0">
        <v-spacer />
        <v-btn text class="teal--text text-none" disabled>
          Fully Booked
        </v-btn>
      </template>
      <template v-else-if="!registered">
        <div v-if="enabled && seatsremaining <= 10" class="ml-2">
          {{ seatsremaining }} kursi tersedia
        </div>
        <v-spacer />
        <v-btn v-if="enabled" text class="teal--text text-none" :to="`/dashboard/arkavidia-talk/${slug}/daftar`">
          Daftar
          <v-icon small class="ml-2">
            fas fa-arrow-right
          </v-icon>
        </v-btn>
        <v-btn v-else text class="teal--text text-none" disabled>
          Pendaftaran Ditutup
        </v-btn>
      </template>
      <template v-else>
        <v-chip color="green" text-color="white">
          <v-avatar left>
            <v-icon>mdi-checkbox-marked-circle</v-icon>
          </v-avatar>
          Sudah terdaftar
        </v-chip>
        <v-spacer />
        <v-btn text class="teal--text text-none" :to="`/dashboard/arkavidia-talk/${slug}`">
          Lihat
          <v-icon small class="ml-2">
            fas fa-arrow-right
          </v-icon>
        </v-btn>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'MainEventCard',
  props: {
    title: {
      type: String,
      required: true
    },
    slug: {
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
    enabled: {
      type: Boolean,
      required: false,
      default: true
    },
    registered: {
      type: Boolean,
      required: false,
      default: false
    },
    participated: {
      type: Boolean,
      required: false,
      default: false
    },
    seatsremaining: {
      type: Number,
      required: false,
      default: 0
    }
  }
});
</script>

<style scoped>

</style>
