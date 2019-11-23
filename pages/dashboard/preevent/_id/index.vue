<template>
  <DashboardWrapper>
    <PreEventWrapper :slug="slug">
      <template slot-scope="{ registrant }">
        <StageTasks :registrant="registrant" />
      </template>
    </PreEventWrapper>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import PreEventWrapper from '~/components/partials/Dashboard/PreEvent/PreEventWrapper.vue';
import StageTasks from '~/components/partials/Dashboard/PreEvent/StageTasks.vue';

@Component({
  components: { StageTasks, PreEventWrapper, DashboardWrapper }
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
}
</script>

<style scoped>

</style>
