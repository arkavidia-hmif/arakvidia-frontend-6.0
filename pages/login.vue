<template>
  <v-container fill-height class="py-12 px-4" style="min-height: 100vh">
    <v-row class="mt-8 mb-12">
      <v-col :cols="12" :lg="4" :md="5">
        <template v-if="!emailNotConfirmedPrompt">
          <div class="headline font-weight-bold section-title">
            Login ke Dashboard
          </div>
          <Alert v-if="error" type="error" class="mt-4" :message="error" />
          <form @submit.prevent="attemptLogin">
            <v-text-field
              v-model="email"
              class="mt-8"
              label="Alamat E-mail"
              outlined
              dense
            />
            <v-text-field
              v-model="password"
              label="Kata sandi"
              type="password"
              outlined
              dense
            />
            <v-btn class="mt-1 text-none" type="submit" block outlined :loading="isLoggingIn">
              Login
            </v-btn>
            <div class="mt-4">
              Lupa kata sandi?
              <nuxt-link to="/recover" style="text-decoration: none">
                Reset
              </nuxt-link>
            </div>
            <div>
              Belum terdaftar?
              <nuxt-link :to="(nextRoute) ? `/register?continue=${nextRoute}` : '/register'" style="text-decoration: none">
                Daftar
              </nuxt-link>
            </div>
          </form>
        </template>
        <template v-else>
          <v-btn
            fab
            elevation="0"
            small
            dark
            color="#FF084F"
            @click="emailNotConfirmedPrompt = false"
          >
            <v-icon color="white">
              fa fa-arrow-left
            </v-icon>
          </v-btn>

          <div class="headline font-weight-bold mt-6">
            Kamu belum melakukan konfirmasi alamat e-mail :(
          </div>
          <p class="subtitle mt-4 grey--text text--darken-1">
            Sebelum kamu bisa login, coba buka e-mail kamu, kemudian klik tautan yang ada di sana untuk melakukan konfirmasi.
            <br><br>
            Apabila kamu tidak mendapat e-mail, cek folder spam kamu.
            Kalau tidak ada juga, silakan hubungi panitia.
          </p>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Action, Vue } from 'nuxt-property-decorator';
import { ApiError } from '~/api/base';
import { LoginStatus } from '~/api/user/types';
import Alert from '~/components/partials/Alert.vue';

interface QueryParameters {
  continue?: string;
}

@Component({
  components: { Alert }
})
export default class DashboardLogin extends Vue {
  emailNotConfirmedPrompt: boolean = false;
  isLoggingIn: boolean = false;
  email: string = '';
  password: string = '';
  error: string = '';

  @Action('user/login') loginAction;

  head() {
    return {
      title: 'Login'
    };
  }

  get nextRoute(): string|undefined {
    const queryParams = this.$route.query as QueryParameters;
    return queryParams.continue;
  }

  attemptLogin() {
    if (!this.email || !this.password) {
      this.error = 'Alamat e-mail dan kata sandi tidak boleh kosong';
      return;
    }

    this.isLoggingIn = true;
    this.error = '';
    const email = this.email;
    const password = this.password;
    this.loginAction({ email, password })
      .then(() => {
        const redirectUrl = (this.nextRoute) ? this.nextRoute : '/dashboard';
        this.$router.push(redirectUrl);
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          if (e.errorCode === LoginStatus.INVALID_CREDS) {
            this.error = 'Alamat e-mail dan/atau kata sandi salah';
            return;
          }
          else if (e.errorCode === LoginStatus.EMAIL_NOT_CONFIRMED) {
            this.emailNotConfirmedPrompt = true;
            return;
          }

          this.error = e.message;
          return;
        }

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
