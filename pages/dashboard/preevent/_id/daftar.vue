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
            <v-btn depressed block color="primary" class="text-none mt-4">
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

    <!--<Alert v-if="error" type="error" class="mt-4" :message="error" :details="errorDetails" />-->
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import Alert from '~/components/partials/Alert.vue';

@Component({
  components: { Alert, DashboardWrapper }
})

export default class RegisterTeam extends Vue {
  message: string = '### Leveraging Blockchain, Big Data, IoT, and Artificial Intelligence to Win Hackathons\n\n#### A talk by Ahmad Fahmi Pratama\n\n\n\nLorem ipsum dolor sit amet.';

  get slug() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['id'];
  }

  head() {
    return {
      title: 'Pendaftaran Arkavidia Talk'
    };
  }

  layout() {
    return 'dashboard';
  }
}
</script>

<style scoped>
</style>
