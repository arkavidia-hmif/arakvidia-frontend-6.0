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
        <v-btn v-if="enabled" text class="white--text text-none primary " @click.stop="$emit('register')">
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
    <!--<v-dialog-->
    <!--v-model="dialog"-->
    <!--max-width="520"-->
    <!--&gt;-->
    <!--<v-card>-->
    <!--<div class="pa-5">-->
    <!--Apakah kamu yakin ingin mendaftar <b>{{ title }}</b>?-->
    <!--</div>-->
    <!--<Alert v-if="!!error" type="error" :message="error" :details="errorDetails" class="ma-5"></Alert>-->
    <!--<v-card-actions>-->
    <!--<v-spacer />-->

    <!--<v-btn-->
    <!--color=""-->
    <!--text-->
    <!--:disabled="isRegistering"-->
    <!--@click="dialog = false"-->
    <!--&gt;-->
    <!--Tidak-->
    <!--</v-btn>-->
    <!--<v-btn-->
    <!--color="primary"-->
    <!--text-->
    <!--:loading="isRegistering"-->
    <!--@click="register"-->
    <!--&gt;-->
    <!--Ya-->
    <!--</v-btn>-->
    <!--</v-card-actions>-->
    <!--</v-card>-->
    <!--</v-dialog>-->
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
