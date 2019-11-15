<template>
  <v-container fill-height class="py-12 px-4" style="min-height: 100vh">
    <v-row class="mt-8 mb-12">
      <v-col :cols="12" :lg="4" :md="5">
        <template v-if="!emailNotConfirmedPrompt">
          <div class="headline font-weight-bold section-title">
            Login ke Dashboard
          </div>
          <Alert v-if="error" type="error" class="mt-4" :message="error" />
          <template v-if="isLoggingIn">
            <div class="mt-4 grey--text text--darken-1">
              Logging in...
            </div>
            <v-progress-linear
              color="#FF084F"
              rounded
              indeterminate
              height="6px"
              class="mt-4"
            />
          </template>
        </template>
        <template v-else>
          <div class="headline font-weight-bold mt-6">
            Alamat e-mail belum dikonfirmasi
          </div>
          <p class="subtitle mt-4 grey--text text--darken-1">
            Pengguna belum melakukan konfirmasi alamat e-mail.
          </p>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Action, Vue } from 'nuxt-property-decorator';
import Alert from '~/components/partials/Alert.vue';

interface QueryParameters {
  continue?: string;
  fromToken?: string;
}

@Component({
  components: { Alert }
})
export default class DashboardLogin extends Vue {
  emailNotConfirmedPrompt: boolean = false;
  isLoggingIn: boolean = false;
  error: string = '';

  @Action('user/mediatedLogin') mediatedLoginAction;

  head() {
    return {
      title: 'Mediated Login'
    };
  }

  mounted() {
    this.attemptLogin();
  }

  get nextRoute(): string|undefined {
    const queryParams = this.$route.query as QueryParameters;
    return queryParams.continue;
  }

  get fromToken(): string|undefined {
    const queryParams = this.$route.query as QueryParameters;
    return queryParams.fromToken;
  }

  attemptLogin() {
    this.isLoggingIn = true;
    this.error = '';
    this.mediatedLoginAction({ token: this.fromToken })
      .then(() => {
        const redirectUrl = (this.nextRoute) ? this.nextRoute : '/dashboard';
        this.$router.push(redirectUrl);
      })
      .catch((e) => {
        this.error = e.toString();
      })
      .finally(() => {
        this.isLoggingIn = false;
      });
  }
}
</script>

<style scoped>
  .section-title {
    position: relative;
    padding-bottom: 8px;
  }

  .section-title:after {
    content: "";
    position: absolute;
    width: 100px;
    height: 1px;
    bottom: 0;
    left: 0;
    border-bottom: 4px solid #FF084F;
  }
</style>
