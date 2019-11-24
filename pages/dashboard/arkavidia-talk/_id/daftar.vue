<template>
  <DashboardWrapper>
    <v-row class="mt-2">
      <v-col :cols="12" :md="4" :order-md="2">
        <v-card elevation="0" style="border: 1px solid #E0E0E0" :style="{borderTop: `6px solid #FFBA07`}">
          <v-card-text class="flex">
            <div class="font-weight-bold">
              Advanced Talk
            </div>
            <div class="subtitle grey--text text--darken-3 mt-2">
              Leveraging Blockchain, Big Data, IoT, and Artificial Intelligence to Win Hackathons
            </div>
            <div class="mt-2 black--text">
              <v-icon small color="black">
                far fa-calendar
              </v-icon>
              &nbsp;
              9 Feb 2019 12:00-13:00
            </div>
            <Alert v-if="error" type="error" class="mt-4" :message="error" :details="errorDetails" />
            <v-btn depressed block color="primary" class="text-none mt-4" :disabled="isRegistered" @click.prevent="register">
              Daftar
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col :cols="12" :md="8" :order-md="1">
        <!-- eslint-disable-next-line vue/no-v-html-->
        <div style="text-align: justify" v-html="$md.render(message)" />
      </v-col>
    </v-row>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Getter, Vue, Action } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import Alert from '~/components/partials/Alert.vue';
import { ApiError } from "~/api/base"
import { RegisterStatus } from "~/api/event/types"

@Component({
  components: { Alert, DashboardWrapper }
})

export default class RegisterTeam extends Vue {
  @Action('event/fetchEventList') fetchEventListAction;
  @Action('event/fetchRegistrantList') fetchRegistrantListAction;
  @Action('event/register') registerAction;
  @Getter('event/getEvents') events;
  @Getter('event/getRegistrants') registrants;

  message: string = '### Leveraging Blockchain, Big Data, IoT, and Artificial Intelligence to Win Hackathons\n\n#### A talk by Ahmad Fahmi Pratama\n\n\n\nLorem ipsum dolor sit amet.';
  error: string = "";
  errorDetails: string = "";
  isRegistering: boolean = false;

  mounted() {
    this.fetchEventListAction();
    this.fetchRegistrantListAction();
  }

  head() {
    return {
      title: 'Pendaftaran Arkavidia Talk'
    };
  }

  get slug() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['id'];
  }

  get maineventId() {
    const currentEvent = this.events.find(event => event.slug === this.slug);
    if (currentEvent != null) {
      return currentEvent.id;
    }
    return null;
  }

  get isRegistered() {
    const registrant = this.registrants.find((registrant) => {
      if (registrant.mainevent != null) {
        return registrant.mainevent.slug === this.slug;
      }
      return false;
    });

    return !!registrant;
  }

  register() {
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
