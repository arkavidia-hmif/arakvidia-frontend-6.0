<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Frequently Asked Questions
    </div>
    <div>
      <v-expansion-panels class="mt-4">
        <v-expansion-panel
          v-for="item in items"
          :key="item.question"
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
import Vue from 'vue'

export default Vue.extend({
  name: 'HackathonFAQ',
  data () {
    return {
      items: [
        {
          question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },

        {
          question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ]
    }
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
