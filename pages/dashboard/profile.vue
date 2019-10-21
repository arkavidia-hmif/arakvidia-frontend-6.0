<template>
  <DashboardWrapper>
    <v-layout row wrap class="mt-4">
      <v-flex md3 xs12>
        <ProfileField title="Name" value="Nella Zabrina Pratama" />
        <ProfileField title="Email" value="nella.zabrina@gmail.com" />
        <ProfileField title="Education" value="Mahasiswa" />
        <ProfileField title="Institution" value="nella.zabrina@gmail.com" />
      </v-flex>
      <v-flex md6 xs12>
        <ProfileField title="Phone Number" value="+62812872878572" />
        <ProfileField title="Birth Date" value="07 September 1999" />
        <ProfileField title="Address" value="Jl. Cisitu Indah 5 no.19B, Dago, Coblong, Kota Bandung" />
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
import ProfileField from '~/components/partials/Dashboard/ProfileField.vue';
@Component({
  components: { DashboardWrapper, ProfileField }
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
