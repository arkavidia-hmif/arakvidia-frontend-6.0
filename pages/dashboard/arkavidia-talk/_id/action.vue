<template>
  <DashboardWrapper>
    <ArkavidiaTalkWrapper :arkavidiatalk-slug="slug">
      <template slot-scope="{ registrant }">
        <StageTasks :registrant="registrant" />
      </template>
    </ArkavidiaTalkWrapper>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import ArkavidiaTalkWrapper from '~/components/partials/Dashboard/ArkavidiaTalk/ArkavidiaTalkWrapper.vue';
import StageTasks from '~/components/partials/Dashboard/ArkavidiaTalk/StageTasks.vue';

  @Component({
    components: { StageTasks, ArkavidiaTalkWrapper, DashboardWrapper }
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
    return this.$route.params['id'];
  }
}
</script>

<style scoped>

</style>
