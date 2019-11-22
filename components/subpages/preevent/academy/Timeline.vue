<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Timeline Kegiatan
    </div>
    <v-row class="mt-4" align="stretch">
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-before="Date.parse('2019-12-22T00:00:00+07:00')"
          date="25"
          month-year="November 2019"
          title="Pembukaan Pendaftaran"
          description="Pendaftaran dilakukan secara online"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-12-22T00:00:00+07:00')"
          :active-before="Date.parse('2019-12-22T23:59:59+07:00')"
          date="22"
          month-year="Desember 2019"
          title="Penutupan Pendaftaran"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2019-12-23T00:00:00+07:00')"
          :active-before="Date.parse('2020-01-04T23:59:59+07:00')"
          date="23 - 4"
          month-year="Desember - Januari 2020"
          title="Proses Seleksi"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2020-01-05T00:00:00+07:00')"
          :active-before="Date.parse('2020-01-05T23:59:59+07:00')"
          date="5"
          month-year="Januari 2020"
          title="Pengumuman Seleksi"
        />
      </v-col>
      <v-col :cols="6" :sm="3">
        <TimelineItem
          :active-after="Date.parse('2020-01-18T00:00:00+07:00')"
          :active-before="Date.parse('2020-01-18T23:59:59+07:00')"
          date="18"
          month-year="Januari 2020"
          title="Product Management Academy"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import TimelineItem from '~/components/partials/TimelineItem.vue';

export default Vue.extend({
  name: 'AcademyTimeline',
  components: { TimelineItem }
});
</script>

<style scoped>
</style>
