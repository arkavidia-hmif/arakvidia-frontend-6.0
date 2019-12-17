<template>
  <DashboardWrapper>
    <MainEventWrapper :slug="slug">
      <template slot-scope="{ registrant }">
        <StageTasks :registrant="registrant" />
      </template>
    </MainEventWrapper>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import MainEventWrapper from '~/components/partials/Dashboard/MainEvent/MainEventWrapper.vue';
import StageTasks from '~/components/partials/Dashboard/MainEvent/StageTasks.vue';

@Component({
  components: { StageTasks, MainEventWrapper, DashboardWrapper }
})
export default class DashboardAction extends Vue {
  head() {
    return {
      title: 'Dashboard'
    };
  }

  get slug() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['id'];
  }

  layout() {
    return 'dashboard';
  }
}
</script>

<style scoped>

</style>
