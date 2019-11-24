<template>
  <DashboardWrapper>
    <v-row class="mt-4" align="stretch">
      <v-col v-for="event in events" :key="event.id" :cols="12" :lg="4" :sm="6">
        <ArkavidiaTalkCard
          :id="event.id"
          style="height: 100%"
          :title="event.shortDesc"
          :enabled="event.isRegistrationOpen"
          :registered="!!registrants.find(registrant => registrant.mainevent.id === event.id)"
          :slug="event.slug"
          :category="categoryMap[event.category].title"
          :color="categoryMap[event.category].color"
          time="9 Feb 2019 12:00-13:30"
        />
      </v-col>
    </v-row>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue, Getter, Action } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import ArkavidiaTalkCard from '~/components/partials/Dashboard/ArkavidiaTalk/ArkavidiaTalkCard.vue';
import { eventCategories } from '~/constants/event';

@Component({
  components: { DashboardWrapper, ArkavidiaTalkCard }
})
export default class DashboardIndex extends Vue {
  @Action('event/fetchEventList') fetchEventListAction;
  @Action('event/fetchRegistrantList') fetchEventRegistrantListAction;
  @Getter('event/getEvents') events;
  @Getter('event/getRegistrants') registrants;

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
}
</script>

<style scoped>

</style>
