<template>
  <div class="white">
    <v-divider />
    <v-container class="py-10">
      <v-row>
        <v-col :cols="12" :md="6">
          <div class="subtitle font-weight-bold">
            Sponsored by:
          </div>
          <div class="sponsors-tier1 mt-2">
            <a href="https://tiket.com" target="_blank">
              <v-img class="d-inline-block ma-2" style="vertical-align: middle;" :src="require('~/assets/images/logo/sponsors/tiket.com.png')" width="220" />
            </a>
            <a href="https://www.jenius.com" target="_blank">
              <v-img class="d-inline-block ma-2" style="vertical-align: middle;" :src="require('~/assets/images/logo/sponsors/jenius.png')" width="250" />
            </a>
            <a href="https://www.paragon-innovation.com" target="_blank">
              <v-img class="d-inline-block ma-2" style="vertical-align: middle;" :src="require('~/assets/images/logo/sponsors/paragon.png')" width="170" />
            </a>
            <a href="https://mekari.com" target="_blank">
              <v-img class="d-inline-block ma-2" style="vertical-align: middle;" :src="require('~/assets/images/logo/sponsors/mekari.png')" width="170" />
            </a>
            <a href="https://www.mokapos.com" target="_blank">
              <v-img class="d-inline-block ma-2" style="vertical-align: middle;" :src="require('~/assets/images/logo/sponsors/mokapos.png')" width="160" />
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
            <a href="https://jojonomic.com/" target="_blank">
              <v-img class="d-inline-block ma-2" style="vertical-align: middle;" :src="require('~/assets/images/logo/sponsors/jojonomic.png')" width="120" />
            </a>
          </div>
        </v-col>
        <v-col :cols="12" :md="6">
          <div class="subtitle font-weight-bold">
            Media Partners:
          </div>
          <div class="mt-3">
            <v-img :src="require('~/assets/images/logo/partners/kumparan.png')" width="200" />
            <v-img :src="require('~/assets/images/logo/medpart.png')" width="100%" class="mt-2" />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="12" :md="3">
          <div class="subtitle font-weight-bold">
            Technology Partners:
          </div>
          <div class="mt-3">
            <a href="http://www.mymatrix.net.id" target="_blank">
              <v-img class="d-inline-block ma-2" style="vertical-align: middle;" :src="require('~/assets/images/logo/sponsors/mymatrix.png')" width="250" />
            </a>
          </div>
        </v-col>
        <v-col :cols="12" :md="3">
          <div class="subtitle font-weight-bold">
            Community Partners:
          </div>
          <div class="mt-3">
            <a href="http://deeptech.id/" target="_blank">
              <v-img class="d-inline-block ma-2" style="vertical-align: middle;" :src="require('~/assets/images/logo/partners/deeptech.png')" width="70" />
            </a>
            <a href="https://www.instagram.com/femmeinstem/" target="_blank">
              <v-img class="d-inline-block ma-2" style="vertical-align: middle;" :src="require('~/assets/images/logo/partners/femme_in_stem.png')" width="140" />
            </a>
          </div>
        </v-col>
        <v-col :cols="12" :md="6">
          <div class="subtitle font-weight-bold">
            Supported by:
          </div>
          <div class="mt-3">
            <v-img :src="require('~/assets/images/logo/supported_footer.png')" width="200" />
          </div>
        </v-col>
        <v-col :cols="12" :md="7" :offset-md="1" />
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
