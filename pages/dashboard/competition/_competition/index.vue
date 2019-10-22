<template>
  <DashboardWrapper>
    <CompetitionWrapper :competition-id="id">
      <!--<InformasiTim />-->
    </CompetitionWrapper>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import TabMenu from '~/components/partials/Dashboard/TabMenu.vue';
import CompetitionWrapper from '~/components/partials/Dashboard/CompetitionWrapper.vue';
// import AnggotaTim from '~/components/partials/Dashboard/AnggotaTim.vue';

@Component({
  components: { CompetitionWrapper, DashboardWrapper, TabMenu }
})
export default class DashboardCompetitionIndex extends Vue {
  head() {
    return {
      title: 'Dashboard'
    };
  }

  get id() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['competition'];
  }
}
</script>

<style scoped>

</style>
