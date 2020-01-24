<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Timeline Kegiatan
    </div>
    <v-row class="mt-4" align="stretch">
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-before="Date.parse('2020-01-28T00:00:00+07:00')"
          date="24"
          month-year="Januari 2020"
          title="Pembukaan Pendaftaran"
          description="Pendaftaran dilakukan secara online"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2020-01-28T00:00:00+07:00')"
          :active-before="Date.parse('2020-01-28T23:59:59+07:00')"
          date="28"
          month-year="Januari 2020"
          title="Penutupan Pendaftaran"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2020-01-29T00:00:00+07:00')"
          :active-before="Date.parse('2020-01-29T23:59:59+07:00')"
          date="29"
          month-year="Januari 2020"
          title="Pengumuman Hasil Pendaftaran"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2020-02-01T00:00:00+07:00')"
          :active-before="Date.parse('2020-02-02T23:59:59+07:00')"
          date="1-2"
          month-year="Februari 2020"
          title="Software Engineering Academy"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import TimelineItem from '~/components/partials/TimelineItem.vue';

export default Vue.extend({
  name: 'SEAcademyTimeline',
  components: { TimelineItem }
});
</script>

<style scoped>
</style>
