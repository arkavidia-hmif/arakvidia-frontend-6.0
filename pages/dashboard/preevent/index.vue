<template>
  <DashboardWrapper>
    <v-row class="mt-4" align="stretch">
      <v-col v-for="preEvent in preEvents" :key="preEvent.id" :cols="12" :lg="4" :sm="6">
        <PreEventCard
          :id="preEvent.id"
          :title="preEvent.name"
          :subtitle="preEvent.subtitle"
          :enabled="preEvent.isRegistrationOpen"
          :registered="!!registrants.find(registrant => registrant.preevent.id === preEvent.id)"
          :slug="preEvent.slug"
          @register="() => confirmRegistration(preEvent)"
        />
      </v-col>
    </v-row>
    <v-dialog
      v-if="!!preEventToRegister"
      v-model="dialog"
      max-width="520"
    >
      <v-card>
        <div class="pa-5">
          Apakah kamu yakin ingin mendaftar <b>{{ preEventToRegister.name }}</b>?
        </div>
        <Alert v-if="!!error" type="error" :message="error" :details="errorDetails" class="ma-5" />
        <v-card-actions>
          <v-spacer />

          <v-btn
            color=""
            text
            :disabled="isRegistering"
            @click="dialog = false"
          >
            Tidak
          </v-btn>
          <v-btn
            color="primary"
            text
            :loading="isRegistering"
            @click="() => register(preEventToRegister)"
          >
            Ya
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue, Getter, Action } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import PreEventCard from '~/components/partials/Dashboard/PreEvent/PreEventCard.vue';
import { PreEvent, RegisterStatus } from '~/api/preevent/types';
import { ApiError } from '~/api/base';
import Alert from '~/components/partials/Alert.vue';

@Component({
  name: 'DashboardPreEvent',
  components: { DashboardWrapper, PreEventCard, Alert }
})
export default class DashboardPreEvent extends Vue {
  @Action('preevent/fetchPreEventList') fetchPreEventListAction;
  @Action('preevent/fetchRegistrantList') fetchRegistrantListAction;
  @Getter('preevent/getPreEvents') preEvents;
  @Getter('preevent/getRegistrants') registrants;

  @Action('preevent/register') registerAction;

  dialog: boolean = false;
  isRegistering: boolean = false;
  error: string = '';
  errorDetails: string = '';
  preEventToRegister: PreEvent|null = null;

  head() {
    return {
      title: 'Dashboard'
    };
  }

  mounted() {
    this.fetchPreEventListAction();
    this.fetchRegistrantListAction();
  }

  confirmRegistration(preEvent: PreEvent) {
    this.dialog = true;
    this.error = '';
    this.preEventToRegister = preEvent;
  }

  register(preEvent: PreEvent) {
    this.registerAction({ preeventId: preEvent.id })
      .then(() => {
        const redirectUrl = '/dashboard/preevent/' + preEvent.slug;
        this.$router.push(redirectUrl);
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          this.errorDetails = e.message;
          if (e.errorCode === RegisterStatus.REGISTRATION_CLOSED) {
            this.error = 'Pendaftaran sudah ditutup';
            return;
          }
          else if (e.errorCode === RegisterStatus.ALREADY_REGISTERED) {
            this.error = 'Anda sudah terdaftar';
            return;
          }
          else if (e.errorCode === RegisterStatus.ERROR) {
            this.error = `Tidak dapat mendaftar :(`;
            return;
          }

          this.error = e.message;
          return;
        }

        this.error = e.toString();
      })
      .finally(() => {
        this.isRegistering = false;
      });
  }
}
</script>

<style scoped>

</style>
