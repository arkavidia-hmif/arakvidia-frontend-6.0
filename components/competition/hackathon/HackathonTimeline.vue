<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Timeline Kegiatan
    </div>
    <v-row class="mt-4" align="stretch">
      <v-col :cols="6" :sm="3">
        <TimelineItem
          active
          date="28"
          month-year="Oktober 2019"
          title="Pembukaan Pendaftaran"
          description="Pendaftaran dilakukan secara online"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          date="24"
          month-year="November 2019"
          title="Penutupan Pendaftaran & Batas Pembayaran"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          date="02"
          month-year="Desember 2019"
          title="Babak Penyisihan 1"
          description="Babak penyisihan 1 dilaksanakan dengan mengumpulkan proposal"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          date="15"
          month-year="Desember 2019"
          title="Batas Pengumpulan Proposal"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          date="16"
          month-year="Desember 2019"
          title="Babak Penyisihan 2"
          description="Babak penyisihan 2 dilaksanakan dengan mengumpulkan video"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          date="22"
          month-year="Desember 2019"
          title="Batas Pengumpulan Video"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          date="11"
          month-year="Januari 2020"
          title="Pengumuman Finalis"
          description="Finalis akan diumumkan di website Arkavidia"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          date="09"
          month-year="Februari 2020"
          title="Final & Awarding Night"
          description="Final dilaksanakan di Institut Teknologi Bandung"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import TimelineItem from '~/components/competition/TimelineItem.vue'

export default Vue.extend({
  name: 'HackathonTimeline',
  components: { TimelineItem }
})
</script>

<style scoped>
</style>
