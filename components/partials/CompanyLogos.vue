<template>
  <div class="white">
    <v-divider />
    <v-container class="py-10">
      <div align="center" />
      <v-row>
        <v-col :cols="6" :sm="4" :md="2" :offset-md="1">
          <div class="subtitle font-weight-bold">
            Technology Partner:
          </div>
          <div class="mt-3">
            <a href="http://www.mymatrix.net.id" target="_blank">
              <v-img class="d-inline-block ma-2" style="vertical-align: middle;" :src="require('~/assets/images/logo/sponsors/mymatrix.png')" width="170" />
            </a>
          </div>
        </v-col>
        <v-col :cols="12" :md="7" :offset-md="1">
          <div class="subtitle font-weight-bold">
            Sponsored by:
          </div>
          <div class="sponsors-tier1 mt-2">
            <a href="https://tiket.com">
              <v-img class="d-inline-block ma-2" style="vertical-align: middle;" :src="require('~/assets/images/logo/sponsors/tiket.com.png')" width="220" />
            </a>
            <a href="https://www.paragon-innovation.com" target="_blank">
              <v-img class="d-inline-block ma-2" style="vertical-align: middle;" :src="require('~/assets/images/logo/sponsors/paragon.png')" width="170" />
            </a>
            <a href="https://mekari.com" target="_blank">
              <v-img class="d-inline-block ma-2" style="vertical-align: middle;" :src="require('~/assets/images/logo/sponsors/mekari.png')" width="170" />
            </a>
            <a href="https://icehousecorp.com" target="_blank">
              <v-img class="d-inline-block ma-2" style="vertical-align: middle;" :src="require('~/assets/images/logo/sponsors/icehouse.jpg')" width="180" />
            </a>
            <a href="https://matagi.id" target="_blank">
              <v-img class="d-inline-block ma-2" style="vertical-align: middle;" :src="require('~/assets/images/logo/sponsors/matagi.png')" width="100" />
            </a>
            <a href="https://indodax.com" target="_blank">
              <v-img class="d-inline-block ma-2" style="vertical-align: middle;" :src="require('~/assets/images/logo/sponsors/indodax.png')" width="100" />
            </a>
          </div>
          <div class="sponsors-tier2 mt-2" />
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="6" :sm="4" :md="2" :offset-md="1">
          <div class="subtitle font-weight-bold">
            Supported by:
          </div>
          <div class="mt-3">
            <v-img :src="require('~/assets/images/logo/supported_footer.png')" width="100%" />
          </div>
        </v-col>
        <v-col :cols="12" :md="7" :offset-md="1">
          <div class="subtitle font-weight-bold">
            Media Partners:
          </div>
          <div class="mt-3">
            <v-img :src="require('~/assets/images/logo/medpart_footer.png')" width="100%" />
            <v-img :src="require('~/assets/images/logo/medpart_footer_2.png')" width="100%" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'CompanyLogos'
};
</script>

<style scoped>

</style>
