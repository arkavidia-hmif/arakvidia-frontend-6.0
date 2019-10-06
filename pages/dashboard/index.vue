<template>
  <DashboardWrapper>
    <p class="mt-4 grey--text text--darken-1">
      There is no announcement yet
    </p>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
@Component({
  components: { DashboardWrapper }
})
export default class DashboardIndex extends Vue {
  head() {
    return {
      title: 'Dashboard'
    };
  }
}
</script>

<style scoped>

</style>
