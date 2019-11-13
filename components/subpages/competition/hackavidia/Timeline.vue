<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Timeline Kegiatan
    </div>
    <v-row class="mt-4" align="stretch">
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-before="Date.parse('2019-11-23T23:59:59+07:00')"
          date="28"
          month-year="Oktober 2019"
          title="Pembukaan Pendaftaran"
          description="Pendaftaran dilakukan secara online"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-11-17T00:00:00+07:00')"
          :active-before="Date.parse('2019-11-17T23:59:59+07:00')"
          date="17"
          month-year="November 2019"
          title="Penutupan Pendaftaran & Batas Pembayaran"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-11-25T00:00:00+07:00')"
          :active-before="Date.parse('2019-12-14T23:59:59+07:00')"
          date="02"
          month-year="Desember 2019"
          title="Babak Penyisihan 1"
          description="Babak penyisihan 1 dilaksanakan dengan mengumpulkan proposal"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-12-15T00:00:00+07:00')"
          :active-before="Date.parse('2019-12-15T23:59:59+07:00')"
          date="15"
          month-year="Desember 2019"
          title="Batas Pengumpulan Proposal"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-12-16T00:00:00+07:00')"
          :active-before="Date.parse('2019-12-21T23:59:59+07:00')"
          date="16"
          month-year="Desember 2019"
          title="Babak Penyisihan 2"
          description="Babak penyisihan 2 dilaksanakan dengan mengumpulkan video"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-12-22T00:00:00+07:00')"
          :active-before="Date.parse('2019-12-22T23:59:59+07:00')"
          date="22"
          month-year="Desember 2019"
          title="Batas Pengumpulan Video"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-12-23T00:00:00+07:00')"
          :active-before="Date.parse('2020-01-17T23:59:59+07:00')"
          date="10-17"
          month-year="Januari 2020"
          title="Pengumuman Finalis"
          description="Finalis akan diumumkan di website Arkavidia"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-02-09T00:00:00+07:00')"
          :active-before="Date.parse('2019-02-09T23:59:59+07:00')"
          date="08-09"
          month-year="Februari 2020"
          title="Final & Awarding Night"
          description="Final & Awarding Night dilaksanakan di Institut Teknologi Bandung"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import TimelineItem from '~/components/partials/TimelineItem.vue';

export default Vue.extend({
  name: 'HackathonTimeline',
  components: { TimelineItem }
});
</script>

<style scoped>
</style>
