<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Timeline Kegiatan
    </div>
    <v-row class="mt-4" align="stretch">
      <v-col :cols="6" :sm="3">
        <TimelineItem
          active
          date="08"
          month-year="September 2019"
          title="Pembukaan Pendaftaran"
          description="Pendaftaran dilakukan secara online"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          date="30"
          month-year="Oktober 2019"
          title="Pembukaan Pendaftaran"
          description="Pendaftaran dilakukan secara online"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          date="30"
          month-year="Oktober 2019"
          title="Pembukaan Pendaftaran"
          description="Pendaftaran dilakukan secara online"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          date="30"
          month-year="Oktober 2019"
          title="Pembukaan Pendaftaran"
          description="Pendaftaran dilakukan secara online"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import TimelineItem from '~/components/competition/TimelineItem.vue'

export default Vue.extend({
  name: 'CompetitiveProgrammingTimeline',
  components: { TimelineItem }
})
</script>

<style scoped>
</style>
