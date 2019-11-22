<template>
  <DashboardWrapper>
    <ArkavidiaTalkWrapper :arkavidiatalk-slug="slug">
      <div class="px-auto mx-auto">
        <h5 class="mt-4 title font-weight-black">
          {{ title }}
        </h5>
        <v-text-field
          v-model="teamName"
          dense
          outlined
          label="Nama Tim"
          class="mt-6"
          maxlength="40"
        />
        <v-text-field v-model="teamInstitution" dense outlined label="Universitas / SMA" maxlength="50" />
        <div class="my-2">
          <v-btn
            id="delete"
            text
            large
            class="mx-5 subtitle-2 text-none px-5 font-weight-bold"
            style="border-radius: 50px; border: 2px solid #E44D4B;  color: #E44D4B; float: left;"
            :loading="isDeleting"
          >
            Hapus Tim
          </v-btn>
          <v-btn
            id="add"
            text
            large
            class="mx-5 subtitle-2 text-none px-5 font-weight-bold"
            style="border-radius: 50px; color: white; float: left; background-color: #197AD2;"
            :loading="isChanging"
          >
            Simpan Tim
          </v-btn>
        </div>
      </div>
    </ArkavidiaTalkWrapper>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import TabMenu from '~/components/partials/Dashboard/ArkavidiaTalk/TabMenu.vue';
import ArkavidiaTalkWrapper from '~/components/partials/Dashboard/ArkavidiaTalk/ArkavidiaTalkWrapper.vue';

interface QueryParameters {
  continue?: string;
}

@Component({
  components: { ArkavidiaTalkWrapper, DashboardWrapper, TabMenu }
})
export default class DashboardArkavidiaTalkIndex extends Vue {
  changedTeamName: string = '';
  changedTeamInstitution: string = '';
  title: string = '';
  isChanging: boolean = false;
  isDeleting: boolean = false;
  error: string = '';
  teamName: string = 'Aku';
  teamInstitution: string = 'Aku';

  head() {
    return {
      title: 'Informasi'
    };
  }

  mounted() {
  }

  static jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  get slug() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['id'];
  }

  get nextRoute(): string|undefined {
    const queryParams = this.$route.query as QueryParameters;
    return queryParams.continue;
  }
}
</script>

<style scoped>
</style>
