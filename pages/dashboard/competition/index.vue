<template>
  <DashboardWrapper>
    <v-row class="mt-4">
      <v-col :cols="12" :lg="4" :sm="6">
        <CompetitionCard title="Competitive Programming" subtitle="Untuk Mahasiswa" to="/dashboard/competition/competitive-programming" button-title="Lihat Pendaftaran" />
      </v-col>
      <v-col :cols="12" :lg="4" :sm="6">
        <CompetitionCard title="Capture the Flag" subtitle="Untuk Mahasiswa & SMA/Sederajat" to="/dashboard/competition/capture-the-flag" button-title="Daftar" />
      </v-col>
      <v-col :cols="12" :lg="4" :sm="6">
        <CompetitionCard title="Hackavidia" subtitle="Untuk Mahasiswa" to="/dashboard/competition/hackavidia" button-title="Daftar" />
      </v-col>
      <v-col :cols="12" :lg="4" :sm="6">
        <CompetitionCard title="Datavidia" subtitle="Untuk Mahasiswa" to="/dashboard/competition/hackavidia" button-title="Daftar" />
      </v-col>
      <v-col :cols="12" :lg="4" :sm="6">
        <CompetitionCard title="Arkalogica" subtitle="Untuk SMA" to="/dashboard/competition/hackavidia" button-title="Anda tidak dapat mendaftar" :enabled="false" />
      </v-col>
    </v-row>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import CompetitionCard from '~/components/partials/Dashboard/CompetitionCard.vue';
@Component({
  components: { DashboardWrapper, CompetitionCard }
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
