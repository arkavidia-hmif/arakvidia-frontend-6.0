<template>
  <v-container fill-height class="mt-12">
    <v-row class="mt-8 mb-12">
      <v-col :cols="12" :md="4">
        <div class="headline font-weight-bold section-title">
          Login ke Dashboard
        </div>
        <v-text-field
          class="mt-8"
          label="Alamat E-mail"
          outlined
          dense
        />
        <v-text-field
          label="Kata sandi"
          type="password"
          outlined
          dense
        />
        <v-btn class="mt-1 text-none" block outlined>
          Login
        </v-btn>
        <div class="mt-2">
          <nuxt-link to="/dashboard/recover" style="text-decoration: none">
            Lupa kata sandi?
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue'

export default Vue.extend({
  head() {
    return {
      title: 'Login'
    }
  }
} as ComponentOptions<Vue>)
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
