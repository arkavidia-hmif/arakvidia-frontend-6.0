<template>
  <DashboardWrapper>
    <v-layout row wrap class="mt-4">
      <v-flex md3 xs12>
        <div class="ml-3 mb-5">
          <div class="subtitle-2 font-weight-black " style="color: #666666">
            Name
          </div>
          <div class="subtitle-2 black--text">
            Nella Zabrina Pratama
          </div>
        </div>

        <div class="ml-3 mb-5">
          <div class="subtitle-2 font-weight-black " style="color: #666666">
            Email
          </div>
          <div class="subtitle-2 black--text">
            nella.zabrina@gmail.com
          </div>
        </div>

        <div class="ml-3 mb-5">
          <div class="subtitle-2 font-weight-black " style="color: #666666">
            Education
          </div>
          <div class="subtitle-2 black--text">
            Mahasiswa
          </div>
        </div>

        <div class="ml-3 mb-5">
          <div class="subtitle-2 font-weight-black " style="color: #666666">
            Institution
          </div>
          <div class="subtitle-2 black--text">
            Institut Teknologi Bandung
          </div>
        </div>
      </v-flex>
      <v-flex md6 xs12>
        <div class="ml-3 mb-5">
          <div class="subtitle-2 font-weight-black " style="color: #666666">
            Phone Number
          </div>
          <div class="subtitle-2 black--text">
            +62812872878572
          </div>
        </div>
        <div class="ml-3 mb-5">
          <div class="subtitle-2 font-weight-black " style="color: #666666">
            Birth Date
          </div>
          <div class="subtitle-2 black--text">
            07 September 1999
          </div>
        </div>
        <div class="ml-3 mb-5">
          <div class="subtitle-2 font-weight-black " style="color: #666666">
            Address
          </div>
          <div class="subtitle-2 black--text">
            Jl. Cisitu Indah 5 no.19B, Dago, Coblong, Kota Bandung
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-btn class="my-5 primary subtitle-2 text-none px-5 font-weight-bold" style="border-radius: 50px">
      Edit Profile
    </v-btn>
    </v-container>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
@Component({
  components: { DashboardWrapper }
})
export default class DashboardIndex extends Vue {
  head() {
    return {
      title: 'Dashboard'
    };
  }
}
</script>

<style scoped>

</style>
