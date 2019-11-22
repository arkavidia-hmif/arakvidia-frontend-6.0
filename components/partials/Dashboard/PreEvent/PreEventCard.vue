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
        <v-btn v-if="enabled" text class="cyan--text text--darken-2 text-none" @click.stop="$emit('register')">
          Daftar
          <v-icon small class="ml-2">
            fas fa-arrow-right
          </v-icon>
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
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  name: 'PreEventCard'
})
export default class PreEventCard extends Vue {
  @Prop() slug!: string;
  @Prop() title!: string;
  @Prop({ default: '' }) subtitle!:string;
  @Prop({ default: true }) enabled!:boolean;
  @Prop({ default: false }) registered!:boolean;
}
</script>

<style scoped>

</style>
