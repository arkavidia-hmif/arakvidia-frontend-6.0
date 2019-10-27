<template>
  <DashboardWrapper>
    <v-row class="mt-4">
      <v-col v-for="competition in competitions" :key="competition.id" :cols="12" :lg="4" :sm="6">
        <CompetitionCard
          :title="competition.name"
          subtitle=""
          :to="'/dashboard/competition/' + competition.slug"
          button-title="Daftar"
          :enabled="true"
        />
      </v-col>
    </v-row>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Action, Getter, Vue } from 'nuxt-property-decorator';
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
  @Action('competition/fetchCompetitionList') fetchCompetitionListAction;
  @Getter('competition/getCompetitions') getCompetitions;

  get competitions() {
    return this.getCompetitions;
  }

  mounted() {
    this.fetchCompetitionListAction();
  }
}
</script>

<style scoped>
</style>
