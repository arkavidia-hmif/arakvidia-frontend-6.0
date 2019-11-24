<template>
  <DashboardWrapper>
    <ArkavidiaTalkWrapper :arkavidiatalk-slug="slug">
      <div class="px-auto mx-auto">
        <h5 class="mt-4 title font-weight-black">
          {{ title }}
        </h5>
      </div>
    </ArkavidiaTalkWrapper>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import TabMenu from '~/components/partials/Dashboard/ArkavidiaTalk/TabMenu.vue';
import ArkavidiaTalkWrapper from '~/components/partials/Dashboard/ArkavidiaTalk/ArkavidiaTalkWrapper.vue';

interface QueryParameters {
  continue?: string;
}

@Component({
  components: { ArkavidiaTalkWrapper, DashboardWrapper, TabMenu }
})
export default class DashboardArkavidiaTalkIndex extends Vue {
  title: string = '';
  isChanging: boolean = false;
  isDeleting: boolean = false;
  error: string = '';

  head() {
    return {
      title: 'Informasi'
    };
  }

  mounted() {
  }

  static jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  get slug() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['id'];
  }

  get nextRoute(): string|undefined {
    const queryParams = this.$route.query as QueryParameters;
    return queryParams.continue;
  }
}
</script>

<style scoped>
</style>
