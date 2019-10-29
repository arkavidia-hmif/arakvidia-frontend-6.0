<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Timeline Kegiatan
    </div>
    <v-row class="mt-4" align="stretch">
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-before="Date.parse('2019-11-23T23:59:59+07:00')"
          date="08"
          month-year="September 2019"
          title="Pembukaan Pendaftaran"
          description="Pendaftaran dilakukan secara online"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-10-30T00:00:00+07:00')"
          :active-before="Date.parse('2019-10-30T23:59:59+07:00')"
          date="30"
          month-year="Oktober 2019"
          title="Pembukaan Pendaftaran"
          description="Pendaftaran dilakukan secara online"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-10-30T00:00:00+07:00')"
          :active-before="Date.parse('2019-10-30T23:59:59+07:00')"
          date="30"
          month-year="Oktober 2019"
          title="Pembukaan Pendaftaran"
          description="Pendaftaran dilakukan secara online"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-10-30T00:00:00+07:00')"
          :active-before="Date.parse('2019-10-30T23:59:59+07:00')"
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
import Vue from 'vue';
import TimelineItem from '~/components/partials/TimelineItem.vue';

export default Vue.extend({
  name: 'TechnocampTimeline',
  components: { TimelineItem }
});
</script>

<style scoped>
</style>
