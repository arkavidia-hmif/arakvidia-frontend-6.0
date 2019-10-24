<template>
  <DashboardWrapper>
    <v-row class="mt-4">
      <v-col :cols="12" :lg="4" :sm="6" v-for="competition in competitions" :key="competition.id">
        <CompetitionCard
          :title="competition.name"
          subtitle=""
          :to="'/dashboard/competition/' + competition.slug"
          button-title="Anda tidak dapat mendaftar"
          :enabled="false" />
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
  };
  @Action('competition/getCompetitionList') getCompetitionListAction;
  @Getter('competition/getCompetitions') getCompetitions;

  get competitions() {
    return this.getCompetitions;
  }

  mounted() {
    this.getCompetitionListAction()
  }
}
</script>

<style scoped>
</style>
