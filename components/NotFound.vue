<template>
  <v-container fluid fill-height class="white">
    <v-layout align-center justify-center column>
      <div class="text-center" width="100%">
        <v-img :src="require('~/assets/404.svg')" contain width="100%" class="mb-4" />
        <p
          :class="$vuetify.breakpoint.mdAndUp
            ? 'text-center display-2 main-heading font-weight-bold'
            : 'text-center display-1 main-heading font-weight-bold'"
        >
          Waduh, nyasar!
        </p>
      </div>
      <div class="text-center mt-3">
        <p
          :class="$vuetify.breakpoint.mdAndUp
            ? 'text-center headline main-subtitle font-weight-bold'
            : 'text-center subtitle-2 main-subtitle font-weight-bold'"
        >
          Tenang. Silakan kembali ke
          <nuxt-link
            class="link-subtitle"
            to="/"
          >
            homepage.
          </nuxt-link>
        </p>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'NotFound'
})
</script>

<style scoped>
  .main-heading {
    display: inline;
    line-height: 1.5;
    padding: 4px 8px 4px 8px;
    box-decoration-break: clone;
  }

  .main-subtitle {
    color: #e83158;
  }

  .link-subtitle {
    color: white;
    background-color: #e83158;
    padding: 10px;
    display: inline;
    box-decoration-break: clone;
    text-decoration: none;
  }
</style>
