<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Frequently Asked Questions
    </div>
    <div>
      <v-expansion-panels class="mt-4">
        <v-expansion-panel
          v-for="(item, i) in items"
          :key="i"
          disable-icon-rotate
        >
          <v-expansion-panel-header>
            {{ item.question }}
            <template v-slot:actions>
              <v-icon color="white">
                mdi-menu-down
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ item.answer }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

interface FaqItem {
  question: string;
  item: string;
}

export default Vue.extend({
  name: 'CompetitionFAQ',
  props: {
    items: {
      type: Array,
      required: true
    } as PropOptions<Array<FaqItem>>
  }
})
</script>

<style scoped>
  .v-expansion-panel {
    margin-bottom: 10px;
  }

  .v-expansion-panel-header {
    background: #3f66d5;
    color: white;
    font-weight: 700;
  }

  .v-expansion-panel-content {
    background: #f0f0f0;
    padding-top: 16px;
    color: #3c3c3c;
  }
</style>
