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
          :active-before="Date.parse('2019-12-22T23:59:59+07:00')"
          date="16"
          month-year="Desember 2019"
          title="Mulai Babak Penyisihan"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-12-27T00:00:00+07:00')"
          :active-before="Date.parse('2019-12-27T23:59:59+07:00')"
          date="27"
          month-year="Desember 2019"
          title="Batas Akhir Penyisihan"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-12-24T00:00:00+07:00')"
          :active-before="Date.parse('2020-01-17T23:59:59+07:00')"
          date="10-17"
          month-year="Januari 2020"
          title="Pengumuman Finalis"
          description="Finalis akan diumumkan di website Arkavidia"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2020-01-18T00:00:00+07:00')"
          :active-before="Date.parse('2020-02-09T23:59:59+07:00')"
          date="08-09"
          month-year="Februari 2020"
          title="Final"
          description="Final dilaksanakan di Institut Teknologi Bandung"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2020-02-09T00:00:00+07:00')"
          :active-before="Date.parse('2020-02-09T23:59:59+07:00')"
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
import TimelineItem from '~/components/partials/TimelineItem.vue';

export default Vue.extend({
  name: 'DatavidiaTimeline',
  components: { TimelineItem }
});
</script>

<style scoped>
</style>
