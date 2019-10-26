<template>
  <div class="ml-3 mb-5">
    <v-card elevation="3">
      <v-list>
        <v-list-item :to="`/dashboard/competition/${id}`" exact>
          <v-list-item-content>
            <v-list-item-title>
              <v-icon left>
                {{ info }}
              </v-icon>
              Informasi Tim
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="`/dashboard/competition/${id}/anggota-tim`" exact>
          <v-list-item-content>
            <v-list-item-title>
              <v-icon left>
                {{ accountGroup }}
              </v-icon>
              Anggota Tim
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="`/dashboard/competition/${id}/upload-berkas`" exact>
          <v-list-item-content>
            <v-list-item-title>
              <v-icon left>
                {{ berkas }}
              </v-icon>
              Upload Berkas
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue';
import { mdiInformation, mdiAccountGroup, mdiApps } from '@mdi/js';

export default Vue.extend({
  name: 'TabMenu',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    info: mdiInformation,
    accountGroup: mdiAccountGroup,
    berkas: mdiApps
  })
});
</script>

<style scoped>
</style>
