<template>
  <DashboardWrapper>
    <v-row class="mt-4" align="stretch">
      <v-col :cols="12" :lg="4" :sm="6">
        <ArkavidiaTalkCard
          style="height: 100%"
          title="Leveraging Blockchain, Big Data, IoT, and Artificial Intelligence to Win Hackathons"
          category="Advanced Talk"
          color="#FFBA07"
          time="9 Feb 2019 12:00-13:00"
          registered
          slug="advanced-1"
        />
      </v-col>
      <v-col :cols="12" :lg="4" :sm="6">
        <ArkavidiaTalkCard
          style="height: 100%"
          title="Monyeet: A story of chaos engineering from a zookeeper’s perspective"
          category="Advanced Talk"
          color="#FFBA07"
          time="9 Feb 2019 14:00-15:30"
          slug="advanced-2"
        />
      </v-col>
      <v-col :cols="12" :lg="4" :sm="6">
        <ArkavidiaTalkCard
          style="height: 100%"
          title="How we started using Big Data with less than 10 million Rupiah"
          category="General Talk"
          color="#21C7C5"
          time="9 Feb 2019 12:00-13:30"
          slug="talk-big-data"
        />
      </v-col>
      <v-col :cols="12" :lg="4" :sm="6">
        <ArkavidiaTalkCard
          style="height: 100%"
          title="How Jabar Digital Service leverages the power of Blockchain to make things fair"
          category="General Talk"
          color="#21C7C5"
          time="9 Feb 2019 12:00-13:30"
          to="/dashboard/arkavidia-talk/4"
          slug="talk-jds"
        />
      </v-col>
      <v-col :cols="12" :lg="4" :sm="6">
        <ArkavidiaTalkCard
          style="height: 100%"
          title="How ready is Indonesia to embrace Industry 4.0?"
          category="Talkshow"
          color="#7608FF"
          time="9 Feb 2019 12:00-13:30"
          slug="talkshow"
        />
      </v-col>
    </v-row>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import ArkavidiaTalkCard from '~/components/partials/Dashboard/ArkavidiaTalk/ArkavidiaTalkCard.vue';

@Component({
  components: { DashboardWrapper, ArkavidiaTalkCard }
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
