<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Timeline Kegiatan
    </div>
    <v-row class="mt-4" align="stretch">
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-before="Date.parse('2019-11-23 23:59:59')"
          date="28"
          month-year="Oktober 2019"
          title="Pembukaan Pendaftaran"
          description="Pendaftaran dilakukan secara online"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-11-24 00:00:00')"
          :active-before="Date.parse('2019-11-24 23:59:59')"
          date="24"
          month-year="November 2019"
          title="Penutupan Pendaftaran & Batas Pembayaran"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-11-25 00:00:00')"
          :active-before="Date.parse('2020-01-04 23:59:59')"
          date="04"
          month-year="Januari 2020"
          title="Warmup"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2020-01-05 00:00:00')"
          :active-before="Date.parse('2020-01-05 23:59:59')"
          date="05"
          month-year="Januari 2020"
          title="Penyisihan"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2020-01-06 00:00:00')"
          :active-before="Date.parse('2020-01-17 23:59:59')"
          date="10-17"
          month-year="Januari 2020"
          title="Pengumuman Finalis"
          description="Finalis akan diumumkan di website Arkavidia"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2020-01-18 00:00:00')"
          :active-before="Date.parse('2020-02-08 23:59:59')"
          date="08"
          month-year="Februari 2020"
          title="Final"
          description="Final dilaksanakan di Institut Teknologi Bandung"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2020-02-09 00:00:00')"
          :active-before="Date.parse('2020-02-09 23:59:59')"
          date="09"
          month-year="Februari 2020"
          title="Awarding Night"
          description="Awarding Night dilaksanakan di Institut Teknologi Bandung"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import TimelineItem from '~/components/competition/TimelineItem.vue';

export default Vue.extend({
  name: 'CaptureTheFlagTimeline',
  components: { TimelineItem }
});
</script>

<style scoped>
</style>
