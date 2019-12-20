<template>
  <DashboardWrapper>
    <v-row v-if="!loading && !!mainEvent" class="mt-2">
      <v-col :cols="12" :md="4" :order-md="2">
        <v-card elevation="0" style="border: 1px solid #E0E0E0" :style="{borderTop: `6px solid ${categoryMap[mainEvent.category].color}`}">
          <v-card-text class="flex">
            <div class="font-weight-bold">
              {{ categoryMap[mainEvent.category].title }}
            </div>
            <div class="subtitle grey--text text--darken-3 mt-2">
              {{ mainEvent.shortDesc }}
            </div>
            <div class="mt-2 black--text">
              <v-icon small color="black">
                far fa-calendar
              </v-icon>
              &nbsp;
              {{ eventDateRange }}
            </div>
            <v-btn
              depressed
              block
              color="primary"
              class="text-none mt-4"
              @click.prevent="dialog = true"
            >
              Daftar
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col :cols="12" :md="8" :order-md="1">
        <!-- eslint-disable-next-line vue/no-v-html-->
        <div style="text-align: justify" v-html="$md.render(mainEvent.longDesc)" />
      </v-col>
    </v-row>
    <div v-else align="center" class="pa-5">
      <v-progress-circular indeterminate />
    </div>
    <v-dialog
      v-if="mainEvent"
      v-model="dialog"
      max-width="520"
    >
      <v-card>
        <div class="pa-5">
          Apakah kamu yakin ingin mendaftar <b>{{ mainEvent.shortDesc }}</b>?
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
            @click="register"
          >
            Ya
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Getter, Vue, Action } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import Alert from '~/components/partials/Alert.vue';
import { ApiError } from '~/api/base';
import { RegisterStatus, MainEvent } from '~/api/mainevent/types';
import { eventCategories } from '~/constants/mainevent';

@Component({
  components: { Alert, DashboardWrapper }
})
export default class RegisterTeam extends Vue {
  @Action('mainevent/fetchMainEventList') fetchEventListAction;
  @Action('mainevent/fetchMainEventDetails') fetchEventDetailsAction;
  @Action('mainevent/register') registerAction;
  @Getter('mainevent/getMainEventsBySlug') events;

  error: string = '';
  errorDetails: string = '';
  isRegistering: boolean = false;
  loading: boolean = true;
  dialog: boolean = false;
  mainEvent: MainEvent|null = null;

  categoryMap = eventCategories.reduce((map, obj) => {
    map[obj.key] = obj;
    return map;
  }, {});

  mounted() {
    this.loading = true;
    this.fetchEventListAction()
      .then(() => {
        return this.fetchEventDetailsAction({ maineventId: this.maineventId });
      })
      .then((mainEvent: MainEvent) => {
        this.mainEvent = mainEvent;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  head() {
    return {
      title: 'Pendaftaran Arkavidia Talk'
    };
  }

  layout() {
    return 'dashboard';
  }

  get slug() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['id'];
  }

  get maineventId() {
    const currentEvent = this.events[this.slug];
    if (currentEvent != null) {
      return currentEvent.id;
    }
    return null;
  }

  get eventDateRange() {
    if (!this.mainEvent) {
      return null;
    }

    const from = this.$moment(this.mainEvent.beginTime);
    const to = this.$moment(this.mainEvent.endTime);
    const sameDay = from.isSame(to, 'day');

    return (sameDay)
      ? `${from.format('D MMM YYYY HH:mm')} - ${to.format('HH:mm')}`
      : `${from.format('D MMM YYYY HH:mm')} - ${to.format('D MMM YYYY HH:mm')}`;
  }

  register() {
    this.isRegistering = true;
    this.registerAction({ maineventId: this.maineventId })
      .then(() => {
        const redirectUrl = '/dashboard/arkavidia-talk/' + this.slug;
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
