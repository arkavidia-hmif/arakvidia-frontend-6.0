<template>
  <v-container fill-height class="py-12 px-4" style="min-height: 100vh">
    <v-row class="mt-8 mb-12">
      <v-col :cols="12" :lg="4" :md="5">
        <div class="headline font-weight-bold section-title">
          Registrasi Akun
        </div>
        <v-alert v-if="error" type="error" class="mt-4">
          {{ error }}
        </v-alert>
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
import { register } from '~/api/user';

@Component
export default class DashboardLogin extends Vue {
  isRegistering: boolean = false;
  fullName: String = '';
  email: String = '';
  password: String = '';
  rePassword: String = '';
  error: String = '';

  head() {
    return {
      title: 'Daftar'
    };
  }

  attemptRegister() {
    if (!this.fullName) {
      this.error = 'Nama lengkap harus diisi';
      return;
    }

    if (!this.email) {
      this.error = 'Alamat e-mail harus diisi';
      return;
    }

    if (!this.validateEmail(this.email)) {
      this.error = 'Alamat e-mail salah';
      return;
    }

    if (this.password.length < 8) {
      this.error = 'Kata sandi minimal 8 karakter';
      return;
    }

    if (this.password !== this.rePassword) {
      this.error = 'Pengulangan kata sandi harus sama';
      return;
    }

    this.isRegistering = true;
    this.error = '';
    register(this.email, this.fullName, this.password)
      .then(() => {
        this.$router.push('/thanks');
      })
      .catch((e) => {
        this.error = e.toString();
      })
      .finally(() => {
        this.isRegistering = false;
      });
  }

  validateEmail(email): boolean {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
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