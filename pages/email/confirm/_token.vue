<template>
  <v-container fill-height class="py-12 px-4" style="min-height: 100vh">
    <v-row class="mt-8 mb-12">
      <v-col :cols="12" :lg="4" :md="5">
        <div class="headline font-weight-bold section-title">
          Konfirmasi alamat e-mail
        </div>
        <v-alert v-if="error" type="error" class="mt-4">
          {{ error }}
        </v-alert>
        <template v-if="isConfirming">
          <div class="mt-4 grey--text text--darken-1">
            Harap bersabar, kami sedang mengonfirmasi alamat email Anda...
          </div>
          <v-progress-linear
            color="#FF084F"
            rounded
            indeterminate
            height="6px"
            class="mt-4"
          />
        </template>
        <template v-if="isConfirmed">
          <v-chip
            color="green"
            text-color="white"
            class="mt-4"
          >
            <v-avatar left>
              <v-icon>mdi-checkbox-marked-circle</v-icon>
            </v-avatar>
            Alamat e-mail terkonfirmasi
          </v-chip>
          <p class="mt-4">
            Alamat e-mail kamu berhasil dikonfirmasi, kamu sekarang bisa login ke Dashboard!
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
import { EmailOperationStatus } from '~/api/user';

@Component
export default class DashboardRecoverReset extends Vue {
  isConfirming: boolean = true;
  isConfirmed: boolean = false;
  error: string = '';

  head() {
    return {
      title: 'Konfirmasi Alamat E-mail'
    };
  }

  mounted() {
    this.isConfirming = true;

    // eslint-disable-next-line dot-notation
    const token = this.$route.params['token'];
    this.$arkavidiaApi.user.confirmEmailAddress(token)
      .then(() => {
        this.isConfirmed = true;
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          if (e.errorCode === EmailOperationStatus.INVALID_TOKEN) {
            this.error = 'Tautan salah, silakan hubungi panitia untuk langkah selanjutnya.';
            return;
          }

          this.error = e.message;
          return;
        }

        this.error = e.toString();
      })
      .finally(() => {
        this.isConfirming = false;
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
