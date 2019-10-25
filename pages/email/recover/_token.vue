<template>
  <v-container fill-height class="py-12 px-4" style="min-height: 100vh">
    <v-row class="mt-8 mb-12">
      <v-col :cols="12" :lg="4" :md="5">
        <div class="headline font-weight-bold section-title">
          Reset kata sandi
        </div>
        <v-alert v-if="error" type="error" class="mt-4">
          {{ error }}
        </v-alert>
        <template v-if="!isReset">
          <div class="mt-4 grey--text text--darken-1">
            Masukkan kata sandi baru Anda dan ulangi kembali.
          </div>
          <form @submit.prevent="attemptReset">
            <v-text-field
              v-model="password"
              type="password"
              label="Kata sandi baru"
              class="mt-4"
              outlined
              dense
            />
            <v-text-field
              v-model="rePassword"
              type="password"
              label="Ulangi kata sandi baru"
              outlined
              dense
            />
            <v-btn class="mt-1 text-none" type="submit" block outlined :loading="isResetting">
              Ganti kata sandi
            </v-btn>
          </form>
        </template>
        <template v-else>
          <v-chip
            color="green"
            text-color="white"
            class="mt-4"
          >
            <v-avatar left>
              <v-icon>mdi-checkbox-marked-circle</v-icon>
            </v-avatar>
            Kata sandi berhasil diganti!
          </v-chip>
          <p class="mt-4">
            Kata sandi kamu berhasil diganti.
            Ingat baik-baik ya, jangan sampai lupa :)
          </p>
          <v-btn outlined block class="text-none mt-2" to="/login">
            Halaman Login
          </v-btn>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { ApiError } from '~/api/base';
import { EmailOperationStatus } from '~/api/user/types';

@Component
export default class DashboardRecoverReset extends Vue {
  isResetting: boolean = false;
  isReset: boolean = false;
  password: string = '';
  rePassword: string = '';
  error: string = '';

  head() {
    return {
      title: 'Reset kata sandi'
    };
  }

  attemptReset() {
    if (this.password.length < 8) {
      this.error = 'Kata sandi minimal 8 karakter';
      return;
    }

    if (this.password !== this.rePassword) {
      this.error = 'Pengulangan kata sandi harus sama';
      return;
    }

    this.isResetting = true;

    // eslint-disable-next-line dot-notation
    const token = this.$route.params['token'];
    this.$arkavidiaApi.user.resetPassword(token, this.password)
      .then(() => {
        this.isReset = true;
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          if (e.errorCode === EmailOperationStatus.INVALID_TOKEN) {
            this.error = 'Tautan ini salah, silakan coba lakukan reset password lagi';
            return;
          }

          this.error = e.message;
          return;
        }

        this.error = e.toString();
      })
      .finally(() => {
        this.isResetting = false;
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
