<template>
  <DashboardWrapper>
    <CompetitionWrapper :competition-slug="slug">
      <template slot-scope="{ team }">
        <StageTasks :team="team" />
      </template>
    </CompetitionWrapper>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import CompetitionWrapper from '~/components/partials/Dashboard/Competition/CompetitionWrapper.vue';
import StageTasks from '~/components/partials/Dashboard/Competition/StageTasks.vue';

  @Component({
    components: { StageTasks, CompetitionWrapper, DashboardWrapper }
  })
export default class DashboardAction extends Vue {
  head() {
    return {
      title: 'Dashboard'
    };
  }

  layout() {
    return 'dashboard';
  }

  get slug() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['competition'];
  }
}
</script>

<style scoped>

</style>
