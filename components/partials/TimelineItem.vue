<template>
  <v-container id="timeline-item" fill-height :class="{active: isActive}">
    <v-responsive
      :aspect-ratio="$vuetify.breakpoint.mdAndUp ? 3 : 1"
      class="pa-0 ma-0 align-self-start"
    >
      <div style="width: 100%" align="left">
        <div class="display-2 font-weight-black date">
          {{ date }}
        </div>
        <div class="title mt-2 font-weight-black date">
          {{ monthYear }}
        </div>
        <div class="subtitle-1 mt-2 font-weight-black mainevent-title">
          {{ title }}
        </div>
        <div class="caption font-weight-light description">
          {{ description }}
        </div>
      </div>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TimelineItem',
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    activeAfter: {
      type: Number,
      required: false,
      default: 0
    },
    activeBefore: {
      type: Number,
      required: false,
      default: 0
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
      required: false,
      default: ''
    }
  },
  computed: {
    isActive() {
      if (this.active) {
        return true;
      }

      const currentDate = Date.now();
      return currentDate >= this.activeAfter && currentDate <= this.activeBefore;
    }
  }
});
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
  .mainevent-title {
    color: #c14163;
  }
  .active .date, .active .mainevent-title, .active .description {
    color: white;
  }
</style>
