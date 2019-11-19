<template>
  <v-card elevation="2" height="100%" class="d-flex flex-column">
    <v-card-text class="flex">
      <div class="headline cyan--text text--darken-2 font-weight-bold">
        {{ title }}
      </div>
      <div class="subtitle mt-1">
        {{ subtitle }}
      </div>
      <v-chip
        v-if="registered"
        color="green"
        text-color="white"
        class="mt-3"
      >
        <v-avatar left>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-avatar>
        Sudah terdaftar
      </v-chip>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <template v-if="!registered">
        <v-spacer />
        <v-btn v-if="enabled" text class="white--text text-none primary " @click.stop="dialog = true">
          Daftar
        </v-btn>
        <v-btn v-else text class="text-none grey--text">
          Pendaftaran Ditutup
        </v-btn>
      </template>
      <template v-else>
        <v-spacer />
        <v-btn text class="cyan--text text--darken-2 text-none" :to="`/dashboard/pre-event/${slug}`">
          Lihat Pendaftaran
          <v-icon small class="ml-2">
            fas fa-arrow-right
          </v-icon>
        </v-btn>
      </template>
    </v-card-actions>
    <v-dialog
      v-model="dialog"
      max-width="520"
    >
      <v-card>
        <v-card-title class="headline">
          Terima Kasih telah mendaftar Arkavdemy
        </v-card-title>

        <!-- <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text> -->

        <v-card-actions>
          <v-spacer />

          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Lihat Pendaftaran
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'PreEventCard',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false,
      default: ''
    },
    slug: {
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
  },
  data() {
    return { dialog: false };
  }
});
</script>

<style scoped>

</style>
