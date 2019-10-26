<template>
  <DashboardWrapper>
    <CompetitionWrapper :competition-id="id">
      <UploadBerkas />
    </CompetitionWrapper>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import TabMenu from '~/components/partials/Dashboard/TabMenu.vue';
import UploadBerkas from '~/components/partials/Dashboard/UploadBerkas.vue';
import CompetitionWrapper from '~/components/partials/Dashboard/CompetitionWrapper.vue';

@Component({
  components: { CompetitionWrapper, DashboardWrapper, TabMenu, UploadBerkas }
})
export default class DashboardUploadBerkas extends Vue {
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
