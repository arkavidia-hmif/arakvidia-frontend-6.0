<template>
  <div class="ml-3 mb-5">
    <v-card elevation="3">
      <v-list>
        <v-list-item :to="`/dashboard/arkavidia-talk/${slug}`" exact>
          <v-list-item-title>
            <v-icon left>
              fas fa-info-circle
            </v-icon>
            Informasi
          </v-list-item-title>
        </v-list-item>
        <v-divider />
        <template v-for="(stage, i) in stages">
          <v-list-item :key="i" :to="stage.id === team.activeStageId ? `/dashboard/arkavidia-talk/${slug}/action` : undefined" exact :disabled="stage.id !== team.activeStageId">
            <v-list-item-title>
              {{ stage.name }}
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Stage } from '~/api/competition/types';

export default Vue.extend({
  name: 'TabMenu',
  props: {
    slug: {
      type: String,
      required: true
    },
    team: {
      type: Object,
      required: false,
      default: null
    }
  },
  computed: {
    stages(): Stage[] {
      if ((this.team != null) && (this.team.stages)) {
        return this.team.stages;
      }
      return [];
    }
  }
});
</script>

<style scoped>
</style>
