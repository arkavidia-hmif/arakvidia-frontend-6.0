<template>
  <DashboardWrapper>
    <v-row class="mt-4" align="stretch">
      <v-col :cols="12" :lg="4" :sm="6">
        <PreEventCard
          title="Arkavdemy"
          :to="'/dashboard/pre-event/' + 'arkavdemy'"
          :enabled="true"
          :registered="false"
          :slug="'arkavdemy'"
          subtitle="Arkavidia Academy"
        />
      </v-col>
      <v-col :cols="12" :lg="4" :sm="6">
        <PreEventCard
          title="Technocamp"
          :to="'/dashboard/pre-event/' + 'techocamp'"
          :enabled="true"
          :registered="true"
          :slug="'technocamp'"
          subtitle="Arkavidia Technocamp"
        />
      </v-col>
    </v-row>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import PreEventCard from '~/components/partials/Dashboard/PreEvent/PreEventCard.vue';

@Component({
  components: { DashboardWrapper, PreEventCard }
})
export default class DashboardPreEvent extends Vue {
  head() {
    return {
      title: 'Dashboard'
    };
  }
}
</script>

<style scoped>

</style>
