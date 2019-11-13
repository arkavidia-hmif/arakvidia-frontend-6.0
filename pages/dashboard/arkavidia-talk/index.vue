<template>
  <DashboardWrapper>
    <v-row class="mt-4" align="stretch">
      <v-col :cols="12" :lg="4" :sm="6">
        <ArkavidiaTalkCard
          title="Leveraging Blockchain, Big Data, IoT, and Artificial Intelligence to Win Hackathons"
          category="Advanced Talk"
          color="#FFBA07"
          time="9 Feb 2019 12:00-13:00"
          registered
          to="/dashboard/arkavidia-talk/1"
        />
      </v-col>
      <v-col :cols="12" :lg="4" :sm="6">
        <ArkavidiaTalkCard
          title="Monyeet: A story of chaos engineering from a zookeeper’s perspective"
          category="Advanced Talk"
          color="#FFBA07"
          time="9 Feb 2019 14:00-15:30"
          to="/dashboard/arkavidia-talk/2"
        />
      </v-col>
      <v-col :cols="12" :lg="4" :sm="6">
        <ArkavidiaTalkCard
          title="How we started using Big Data with less than 10 million Rupiah"
          category="General Talk"
          color="#21C7C5"
          time="9 Feb 2019 12:00-13:30"
          to="/dashboard/arkavidia-talk/3"
        />
      </v-col>
      <v-col :cols="12" :lg="4" :sm="6">
        <ArkavidiaTalkCard
          title="How Jabar Digital Service leverages the power of Blockchain to make things fair"
          category="General Talk"
          color="#21C7C5"
          time="9 Feb 2019 12:00-13:30"
          to="/dashboard/arkavidia-talk/4"
        />
      </v-col>
      <v-col :cols="12" :lg="4" :sm="6">
        <ArkavidiaTalkCard
          title="How ready is Indonesia to embrace Industry 4.0?"
          category="Talkshow"
          color="#7608FF"
          time="9 Feb 2019 12:00-13:30"
          to="/dashboard/arkavidia-talk/5"
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
