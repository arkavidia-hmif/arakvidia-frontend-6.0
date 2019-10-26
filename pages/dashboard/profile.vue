<template>
  <DashboardWrapper>
    <div v-if="user">
      <v-layout row wrap class="mt-4">
        <v-flex md3 xs12>
          <ProfileField title="Name" :value="user.fullName" />
          <ProfileField title="Email" :value="user.email" />
          <ProfileField title="Education" :value="user.currentEducation" />
          <!-- <div>{{user}}</div> -->
          <ProfileField title="Institution" :value="user.institution" />
        </v-flex>
        <v-flex md6 xs12>
          <ProfileField title="Phone Number" :value="user.phoneNumber" />
          <ProfileField title="Birth Date" :value="user.birthDate" />
          <ProfileField title="Address" :value="user.address" />
        </v-flex>
      </v-layout>
      <ModalProfile />
    </div>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue, Getter } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import ProfileField from '~/components/partials/Dashboard/ProfileField.vue';
import ModalProfile from '~/components/partials/Dashboard/ModalProfile.vue';
import { User } from '~/api/user/types';
interface NuxtWindow {
  onNuxtReady?: Function;
}
@Component({
  components: { DashboardWrapper, ProfileField, ModalProfile }
})
export default class Profile extends Vue {
  @Getter('user/getUser') user !: User;

  head() {
    return {
      title: 'Dashboard'
    };
  }
}
</script>

<style scoped>

</style>
