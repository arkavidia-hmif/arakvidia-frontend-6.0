<template>
  <client-only>
    <div class="mx-0 mt-0 d-flex flex-column" :class="{ 'fill-height': $vuetify.breakpoint.mdAndUp }">
      <div v-if="sessionTitle" class="pa-0">
        <SessionBrief
          :theme-color="themeColor"
          :name="sessionTitle"
          :time="time"
          :place="place"
          class="mb-4"
          :to="to"
        />
      </div>
      <v-row no-gutters class="fill-height">
        <v-col :cols="12" :sm="4" :order-sm="2" class="fill-height">
          <v-row no-gutters class="d-flex flex-column fill-height" style="box-shadow: inset 0 -25px 0 #F3F5F5;">
            <v-col :cols="8" :sm="12" :offset="2" :offset-sm="0" class="d-flex flex-column">
              <div>
                <v-img width="100%" :aspect-ratio="3/4" cover :src="imageUrl" />
              </div>
              <div class="section" :style="`flex: 1; background: ${themeColor}`">
                <div class="font-weight-bold">
                  {{ speakerName }}
                </div>
                <div>
                  {{ speakerRole }}
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="pa-4" :cols="12" :sm="8" :order-sm="1" style="background-color: #F3F5F5;">
          <div class="title font-weight-bold" :style="`color: ${themeColor}`">
            {{ talkTitle }}
          </div>
          <p class="mt-4 grey--text text--darken-1">
            {{ talkDesc }}
          </p>
        </v-col>
      </v-row>
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue';
import SessionBrief from '~/components/partials/ArkavidiaTalk/SessionBrief.vue';

export default Vue.extend({
  name: 'SessionPanel',
  components: { SessionBrief },
  props: {
    sessionTitle: {
      type: String,
      required: false,
      default: ''
    },
    time: {
      type: String,
      required: false,
      default: ''
    },
    place: {
      type: String,
      required: false,
      default: ''
    },
    speakerName: {
      type: String,
      required: true
    },
    speakerRole: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    talkTitle: {
      type: String,
      required: true
    },
    talkDesc: {
      type: String,
      required: true
    },
    themeColor: {
      type: String,
      required: false,
      default: '#777'
    },
    to: {
      type: String,
      required: false,
      default: ''
    }
  }
});
</script>

<style scoped>
  .section {
    color: white;
    padding: 0.8rem;
  }
</style>
