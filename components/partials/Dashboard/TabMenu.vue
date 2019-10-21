<template>
  <div class="ml-3 mb-5">
    <v-tabs vertical :hide-slider="true" class="box">
      <v-tab :to="'/dashboard/competition/' + id + '/informasi-tim'">
        <v-icon left>{{info}}</v-icon>
        Informasi Tim
      </v-tab>
      <v-tab :to="'/dashboard/competition/' + id + '/anggota-tim'">
        <v-icon left>{{accountGroup}}</v-icon>
        Anggota Tim
      </v-tab>
      <v-tab :to="'/dashboard/competition/' + id + '/berkas-administrasi'">
        <v-icon left>{{berkas}}</v-icon>
        Berkas Administrasi
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import { mdiInformation, mdiAccountGroup, mdiApps } from '@mdi/js';
import { dashboardCompetitionMenus, Menu } from '~/constants/menus';

export default Vue.extend({
  name: 'TabMenu',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    dashboardCompetitionMenus,
    info: mdiInformation,
    accountGroup: mdiAccountGroup,
    berkas: mdiApps
  })
});
</script>

<style scoped>
  .v-tabs--vertical {
      display: table;
  }
  .v-tab--active {
    color: #0B909A;
  }
  .box {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
</style>
