<template>
  <v-container>
    <v-row>
      <v-col :cols="12" :sm="4" :lg="3">
        <TabMenu :slug="competitionSlug" />
      </v-col>
      <v-col :cols="12" :sm="8" :lg="9" align-self="center">
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop, Action } from 'nuxt-property-decorator';
import TabMenu from '~/components/partials/Dashboard/TabMenu.vue';
import { CompetitionState } from '~/store/competition';

@Component({
  name: 'CompetitionWrapper',
  components: { TabMenu }
})
export default class CompetitionWrapper extends Vue {
    @Prop({ default: '' }) competitionSlug?: string;
    @Action('competition/fetchCompetitionList') actionFetchCompetitionList;
    @Action('competition/fetchTeamList') actionFetchTeamList;

    mounted() {
      this.actionFetchCompetitionList();
      this.actionFetchTeamList();
    }
}
</script>

<style scoped>

</style>
