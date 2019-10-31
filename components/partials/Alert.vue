<template>
  <div>
    <v-alert :type="type" :dismissible="dismissible">
      <a
        class="white--text"
        style="text-decoration: none"
        @click.prevent="detailsOpened = !detailsOpened"
      >{{ alertMessage }}</a>
    </v-alert>
    <pre v-if="detailsOpened && !!alertDetails" style="border: 1px solid #ccc" class="pa-2 grey lighten-3">{{ alertDetails }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

export interface Message {
    message: string;
    details?: string;
  }

  @Component({
    name: 'Alert'
  })
export default class Alert extends Vue {
    @Prop() type!: string;
    @Prop() message!: string;
    @Prop({ default: undefined }) messageTuple!: Message;
    @Prop({ default: '' }) details!: string;
    @Prop({ default: true }) dismissible!: boolean;

    detailsOpened: boolean = false;

    get alertMessage() {
      if (this.messageTuple) {
        return this.messageTuple.message;
      }

      return this.message;
    }

    get alertDetails() {
      if (this.messageTuple) {
        return this.messageTuple.details;
      }

      return this.details;
    }
}
</script>

<style scoped>
  pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
  }
</style>
