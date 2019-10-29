<template>
  <DashboardWrapper>
    <CompetitionWrapper :competition-slug="slug">
      <template slot-scope="{ team }">
        <AnggotaTim :team="team" />
      </template>
    </CompetitionWrapper>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import TabMenu from '~/components/partials/Dashboard/Competition/TabMenu.vue';
import AnggotaTim from '~/components/partials/Dashboard/Competition/AnggotaTim.vue';
import CompetitionWrapper from '~/components/partials/Dashboard/Competition/CompetitionWrapper.vue';

@Component({
  components: { CompetitionWrapper, DashboardWrapper, TabMenu, AnggotaTim }
})
export default class DashboardAnggotaTim extends Vue {
  head() {
    return {
      title: 'Dashboard'
    };
  }

  get slug() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['competition'];
  }
}
</script>

<style scoped>

</style>
