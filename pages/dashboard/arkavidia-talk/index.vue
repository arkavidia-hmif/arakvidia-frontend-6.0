<template>
  <DashboardWrapper>
    <v-row class="mt-4" align="stretch">
      <v-col v-for="mainevent in events" :key="mainevent.id" :cols="12" :lg="4" :sm="6">
        <MainEventCard
          :id="mainevent.id"
          style="height: 100%"
          :title="mainevent.shortDesc"
          :enabled="mainevent.isRegistrationOpen"
          :registered="!!registrants.find(registrant => registrant.mainevent.id === mainevent.id)"
          :slug="mainevent.slug"
          :category="categoryMap[mainevent.category].title"
          :color="categoryMap[mainevent.category].color"
          time="9 Feb 2019 12:00-13:30"
        />
      </v-col>
    </v-row>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue, Getter, Action } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import MainEventCard from '~/components/partials/Dashboard/MainEvent/MainEventCard.vue';
import { eventCategories } from '~/constants/mainevent';

@Component({
  components: { DashboardWrapper, MainEventCard }
})
export default class DashboardIndex extends Vue {
  @Action('mainevent/fetchMainEventList') fetchEventListAction;
  @Action('mainevent/fetchRegistrantList') fetchEventRegistrantListAction;
  @Getter('mainevent/getMainEvents') events;
  @Getter('mainevent/getRegistrants') registrants;

  categoryMap = eventCategories.reduce((map, obj) => {
    map[obj.key] = obj;
    return map;
  }, {});

  mounted() {
    this.fetchEventListAction();
    this.fetchEventRegistrantListAction();
  }

  head() {
    return {
      title: 'Dashboard'
    };
  }

  layout() {
    return 'dashboard';
  }
}
</script>

<style scoped>

</style>
