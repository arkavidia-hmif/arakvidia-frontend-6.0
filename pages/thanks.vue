<template>
  <v-container fill-height style="min-height: 100vh;">
    <v-row align="center" style="width: 100%" class="mt-12">
      <v-col :cols="12" :sm="6" :offset-sm="3">
        <v-row>
          <v-col :cols="12" :sm="8" :offset-sm="2">
            <v-img :src="require('~/assets/thanks.svg')" contain width="100%" class="mb-4" />
          </v-col>
        </v-row>
        <div class="text-center mt-3">
          <div class="display-1 main-heading font-weight-bold" style="color: #0B909A">
            Terima kasih!
          </div>
          <div class="subtitle-2 mt-3">
            Terima kasih telah mendaftar! Sebentar lagi kami akan mengirimkan e-mail untuk memastikan bahwa alamat e-mail kamu benar.
            <b>Tolong buka e-mailnya dan klik linknya ya!</b>
          </div>
          <v-btn :to="redirectUrl" large outlined class="text-none mt-6" color="#0B909A">
            Login ke Dashboard
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';

export default Vue.extend({
  head() {
    return {
      title: 'Pendaftaran berhasil!'
    };
  },
  data() {
    return {
      redirectUrl: (this.$route.query.continue !== undefined) ? `/login?continue=${encodeURIComponent(this.$route.query.continue as string)}` : '/login'
    };
  }
} as ComponentOptions<Vue>);
</script>
