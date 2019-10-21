<template>
  <DashboardWrapper>
    <div class="px-12 mx-12">
      <h5 class="mt-4 title font-weight-black">
        Competitive Programming
      </h5>
      <v-text-field v-model="team" label="Team Name" />
      <v-text-field v-model="school" label="Institute / School" />
      <div class="my-2">
        <v-btn text large color="error">
          Delete Team
        </v-btn>
        <v-btn text large color="primary">
          Save Team
        </v-btn>
      </div>
    </div>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
@Component({
  components: { DashboardWrapper }
})
export default class Competitive extends Vue {
  data() {
    return {
      team: '',
      school: ''
    };
  }
  head() {
    return {
      title: 'Pendaftaran CP'
    };
  }
}
</script>

<style scoped>
</style>
