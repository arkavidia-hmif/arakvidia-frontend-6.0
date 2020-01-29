<template>
  <DashboardWrapper>
    <v-row v-if="events.length > 0" class="mt-4" align="stretch">
      <v-col v-for="mainevent in events" :key="mainevent.id" :cols="12" :lg="4" :sm="6">
        <MainEventCard
          v-if="registrants.find(registrant => registrant.mainevent.id === mainevent.id)"
          :id="mainevent.id"
          style="height: 100%"
          :title="mainevent.shortDesc"
          :enabled="mainevent.isRegistrationOpen"
          :registered="!!registrants.find(registrant => registrant.mainevent.id === mainevent.id)"
          :participated="registrants.find(registrant => registrant.mainevent.id === mainevent.id).isParticipating"
          :seatsRemaining="mainevent.seatsRemaining"
          :slug="mainevent.slug"
          :category="categoryMap[mainevent.category].title"
          :color="categoryMap[mainevent.category].color"
          :time="eventDateRange(mainevent.beginTime, mainevent.endTime)"
        />
        <MainEventCard
          v-else
          :id="mainevent.id"
          style="height: 100%"
          :title="mainevent.shortDesc"
          :enabled="mainevent.isRegistrationOpen"
          :registered="!!registrants.find(registrant => registrant.mainevent.id === mainevent.id)"
          :participated="false"
          :seatsRemaining="mainevent.seatsRemaining"
          :slug="mainevent.slug"
          :category="categoryMap[mainevent.category].title"
          :color="categoryMap[mainevent.category].color"
          :time="eventDateRange(mainevent.beginTime, mainevent.endTime)"
        />
      </v-col>
    </v-row>
    <div v-else class="pa-5" align="center">
      <v-progress-circular indeterminate />
    </div>
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

  log(item) {
    console.log(item)
  };

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

  eventDateRange(beginTime, endTime) {
    const from = this.$moment(beginTime);
    const to = this.$moment(endTime);
    const sameDay = from.isSame(to, 'day');

    return (sameDay)
      ? `${from.format('D MMM YYYY HH:mm')} - ${to.format('HH:mm')}`
      : `${from.format('D MMM YYYY HH:mm')} - ${to.format('D MMM YYYY HH:mm')}`;
  }
}
</script>

<style scoped>

</style>