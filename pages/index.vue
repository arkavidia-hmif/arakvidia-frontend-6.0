<template>
  <v-layout column style="background: white;">
    <HomeIntro />
    <HomeOverview id="home-overview" class="pt-12" />
  </v-layout>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import HomeIntro from '~/components/subpages/home/HomeIntro.vue';
import HomeOverview from '~/components/subpages/home/HomeOverview.vue';

export default Vue.extend({
  components: {
    HomeIntro,
    HomeOverview
  },
  head() {
    return {
      title: 'Beranda'
    };
  },
  jsonld() {
    return {
      '@context': 'http://schema.org',
      '@type': 'Event',
      'name': 'Main Event Arkavidia 6.0',
      'startDate': '2020-02-08',
      'endDate': '2020-02-09',
      'location': {
        '@type': 'Place',
        'name': 'Institut Teknologi Bandung',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Jl. Ganesha No. 10',
          'addressLocality': 'Bandung',
          'postalCode': '40132',
          'addressRegion': 'Jawa Barat',
          'addressCountry': 'ID'
        }
      },
      'description': 'Arkavidia 6.0 Main Event consists of an exhibition of start-ups, talks, and competition finals.'
    };
  }
} as ComponentOptions<Vue>);
</script>
