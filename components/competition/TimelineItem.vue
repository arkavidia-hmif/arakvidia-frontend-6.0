<template>
  <v-responsive
    :aspect-ratio="$vuetify.breakpoint.smAndUp ? 5 : 3"
    class="pa-0 ma-0"
  >
    <v-container id="timeline-item" fill-height justify-content-center :class="{active}">
      <div style="width: 100%" align="left">
        <div class="display-2 font-weight-black date">
          {{ date }}
        </div>
        <div class="title mt-2 font-weight-black date">
          {{ monthYear }}
        </div>
        <div class="subtitle-1 mt-2 font-weight-black event-title">
          {{ title }}
        </div>
        <div class="caption font-weight-light description">
          {{ description }}
        </div>
      </div>
    </v-container>
  </v-responsive>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TimelineItem',
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    date: {
      type: String,
      required: true
    },
    monthYear: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
  #timeline-item {
    background: #f4f4f4;
  }
  #timeline-item.active {
    background: #21C7C5;
  }

  .date, .description {
    color: black;
  }
  .event-title {
    color: #c14163;
  }
  .active .date, .active .event-title, .active .description {
    color: white;
  }
</style>
