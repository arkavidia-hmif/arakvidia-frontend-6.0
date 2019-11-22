<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Timeline Kegiatan
    </div>
    <v-row class="mt-4" align="stretch">
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-before="Date.parse('2020-01-05T00:00:00+07:00')"
          date="25"
          month-year="November 2019"
          title="Pembukaan Pendaftaran"
          description="Pendaftaran dilakukan secara online"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2020-01-05T00:00:00+07:00')"
          :active-before="Date.parse('2020-01-05T23:59:59+07:00')"
          date="5"
          month-year="Januari 2020"
          title="Penutupan Pendaftaran"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-01-12T00:00:00+07:00')"
          :active-before="Date.parse('2019-01-12T23:59:59+07:00')"
          date="12"
          month-year="Januari 2020"
          title="Pengumuman Peserta"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-01-26T00:00:00+07:00')"
          :active-before="Date.parse('2019-01-26T23:59:59+07:00')"
          date="26"
          month-year="Januari 2020"
          title="Batas Pembayaran Biaya Komitmen"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-02-01T00:00:00+07:00')"
          :active-before="Date.parse('2019-02-02T23:59:59+07:00')"
          date="1-2"
          month-year="Februari 2020"
          title="Technocamp"
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
