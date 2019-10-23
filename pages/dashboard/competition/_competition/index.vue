<template>
  <DashboardWrapper>
    <CompetitionWrapper :competition-id="id">
      <div class="px-auto mx-auto">
        <h5 class="mt-4 title font-weight-black">
          Competitive Programming
        </h5>
        <v-text-field v-model="team" label="Nama Tim" />
        <v-text-field v-model="school" label="Universitas / SMA" />
        <div class="my-2">
          <v-btn
            id="delete"
            text
            large
            class="mx-5 subtitle-2 text-none px-5 font-weight-bold"
            style="border-radius: 50px; border: 2px solid #E44D4B;  color: #E44D4B; float: left;"
          >
            Hapus Tim
          </v-btn>
          <v-btn
            id="add"
            text
            large
            class="mx-5 subtitle-2 text-none px-5 font-weight-bold"
            style="border-radius: 50px; color: white; float: left; background-color: #197AD2;"
          >
            Simpan Tim
          </v-btn>
        </div>
      </div>
    </CompetitionWrapper>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import TabMenu from '~/components/partials/Dashboard/TabMenu.vue';
import CompetitionWrapper from '~/components/partials/Dashboard/CompetitionWrapper.vue';
// import AnggotaTim from '~/components/partials/Dashboard/AnggotaTim.vue';

@Component({
  components: { CompetitionWrapper, DashboardWrapper, TabMenu }
})
export default class DashboardCompetitionIndex extends Vue {
  data() {
    return {
      team: '',
      school: ''
    };
  }
  head() {
    return {
      title: 'Informasi Tim'
    };
  }

  get id() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['competition'];
  }
}
</script>

<style scoped>
</style>
