<template>
  <v-container
    fluid
    fill-height
    justify-space-between
    align-start
    column
    class="pa-0 ma-0"
    style="background: #FFFFFF"
  >
    <v-layout column>
      <Toolbar />
      <CompetitionIntro
        :title="'Hackathon'"
        :description="'Lorem ipsum ...'"
        :categories="['Mahasiswa']"
      />
      <CompetitionPrize
        :prizes="[
          {title: 'Champion', prize: '10000000'},
          {title: 'Runner Up', prize: '8000000'},
          {title: 'Third Place', prize: '5000000'},
          {title: 'Best Idea', prize: '1000000'},
          {title: 'Best Presentation', prize: '1000000'}
        ]"
      />
      <CompetitionTimeline
        :timeline="[
          {date: '08 Oktober 2019', title: 'Pembukaan pendaftaran', description: 'Lorem ipsum 1'},
          {date: '30 Oktober 2019', title: 'Penutupan pendaftaran', description: 'Lorem ipsum 2'},
          {date: '30 Oktober 2019', title: 'Penutupan pendaftaran', description: 'Lorem ipsum 3'},
          {date: '30 Oktober 2019', title: 'Penutupan pendaftaran', description: 'Lorem ipsum 4'}
        ]"
      />
      <CompetitionFAQ
        :faqs="[
          {question: 'Lorem 1', answer: 'Ipsum 1'},
          {question: 'Lorem 2', answer: 'Ipsum 2'},
          {question: 'Lorem 3', answer: 'Ipsum 3'},
          {question: 'Lorem 4', answer: 'Ipsum 4'},
        ]"
      />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Toolbar from '~/components/subpage/Toolbar.vue'
import CompetitionIntro from '~/components/competition/CompetitionIntro.vue'
import CompetitionPrize from '~/components/competition/CompetitionPrize.vue'
import CompetitionTimeline from '~/components/competition/CompetitionTimeline.vue'
import CompetitionFAQ from '~/components/competition/CompetitionFAQ.vue'

export default Vue.extend({
  components: {
    Toolbar,
    CompetitionIntro,
    CompetitionPrize,
    CompetitionTimeline,
    CompetitionFAQ
  }
})
</script>
