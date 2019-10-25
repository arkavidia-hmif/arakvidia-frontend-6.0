<template>
  <v-container fill-height class="pt-12" style="min-height: 100vh">
    <v-row align="center" style="width: 100%">
      <v-col :cols="12" :md="4" :offset-md="4">
        <div class="text-center">
          <v-img :src="require('~/assets/404.svg')" contain width="100%" class="mb-4" />
          <p class="text-center display-1 main-heading font-weight-bold">
            Waduh, nyasar!
          </p>
        </div>
        <div class="text-center mt-3">
          <p class="text-center subtitle-2 main-subtitle font-weight-bold">
            Tenang. Silakan kembali ke
            <nuxt-link
              class="link-subtitle"
              to="/"
            >
              homepage.
            </nuxt-link>
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'NotFound'
});
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
