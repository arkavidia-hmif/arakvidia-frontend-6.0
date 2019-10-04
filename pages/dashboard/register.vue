<template>
  <v-container fill-height class="pa-12" style="min-height: 100vh">
    <v-row class="mt-8 mb-12">
      <v-col :cols="12" :lg="4" :md="5">
        <div class="headline font-weight-bold section-title">
          Registrasi Akun
        </div>
        <form @submit.prevent="attemptRegister">
          <v-text-field
            v-model="fullName"
            class="mt-8"
            label="Nama Lengkap"
            outlined
            dense
          />
          <v-text-field
            v-model="email"
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
          <v-text-field
            v-model="rePassword"
            label="Ulangi kata sandi"
            type="password"
            outlined
            dense
          />
          <v-btn class="mt-1 text-none" type="submit" block outlined :loading="isRegistering">
            Daftar
          </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class DashboardLogin extends Vue {
  isRegistering: boolean = false;
  fullName: String = '';
  email: String = '';
  password: String = '';
  rePassword: String = '';

  head() {
    return {
      title: 'Daftar'
    };
  }

  attemptRegister() {

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
