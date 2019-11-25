<template>
  <div class="ml-3 mb-5">
    <v-card elevation="3">
      <div class="pa-4">
        <div class="font-weight-bold">
          {{ registrant.preevent.name }}
        </div>
        <div class="grey--text text--darken-2">
          {{ registrant.preevent.subtitle }}
        </div>
      </div>
      <v-divider />
      <v-list class="pt-0">
        <v-list-item @click="dialog = true">
          <v-list-item-title class="red--text">
            <v-icon left small color="red">
              fas fa-times
            </v-icon>
            Batalkan Pendaftaran
          </v-list-item-title>
        </v-list-item>
        <v-divider />
        <template v-for="(stage, i) in stages">
          <v-list-item :key="i" :to="stage.id === registrant.activeStageId ? `/dashboard/preevent/${slug}` : undefined" exact :disabled="stage.id !== registrant.activeStageId">
            <v-list-item-title>
              {{ stage.name }}
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
    <v-dialog
      v-model="dialog"
      max-width="520"
    >
      <v-card>
        <div class="pa-5">
          Apakah kamu yakin ingin membatalkan pendaftaran?
          <br>
          <b>Informasi yang kamu masukkan akan dihapus secara permanen.</b>
        </div>
        <Alert v-if="!!error" type="error" :message="error" :details="errorDetails" class="ma-5" />
        <v-card-actions>
          <v-spacer />

          <v-btn
            color=""
            text
            :disabled="isDeleting"
            @click="dialog = false"
          >
            Tidak
          </v-btn>
          <v-btn
            color="primary"
            text
            :loading="isDeleting"
            @click="deleteRegistration"
          >
            Ya
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Action } from 'nuxt-property-decorator';
import Alert from '~/components/partials/Alert.vue';
import { Stage, Registrant, DeleteStatus } from '~/api/preevent/types';
import { ApiError } from '~/api/base';

  @Component({
    components: { Alert }
  })

export default class TabMenu extends Vue {
    @Prop() slug!: string;
    @Prop() registrant!: Registrant;

    @Action('preevent/deleteRegistrant') deleteRegistrantAction;

    isDeleting: boolean = false;
    dialog: boolean = false;
    error: string = '';
    errorDetails: string = '';

    get stages(): Stage[] {
      if ((this.registrant != null) && (this.registrant.stages)) {
        return this.registrant.stages;
      }
      return [];
    }

    deleteRegistration() {
      this.isDeleting = true;
      this.deleteRegistrantAction({ registrantId: this.registrant.id })
        .then(() => {
          const redirectUrl = '/dashboard/preevent';
          this.$router.push(redirectUrl);
        })
        .catch((e) => {
          if (e instanceof ApiError) {
            this.errorDetails = e.message;
            if (e.errorCode === DeleteStatus.ERROR) {
              this.error = `Tidak dapat menghapus pendaftaran :(`;
              return;
            }

            this.error = e.message;
            return;
          }

          this.error = e.toString();
        })
        .finally(() => {
          this.isDeleting = false;
        });
    }
}
</script>

<style scoped>
</style>
