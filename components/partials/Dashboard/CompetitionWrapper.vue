<template>
  <v-container>
    <v-row>
      <v-col :cols="12" :sm="4" :lg="3">
        <TabMenu :id="competitionId" />
      </v-col>
      <v-col :cols="12" :sm="8" :lg="9" align-self="center">
        <slot :competitions="competitions" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import TabMenu from '~/components/partials/Dashboard/TabMenu.vue';

@Component({
  name: 'CompetitionWrapper',
  components: { TabMenu }
})
export default class CompetitionWrapper extends Vue {
    @Prop({ default: '' })
    competitionId?: string;
}
</script>

<style scoped>

</style>
