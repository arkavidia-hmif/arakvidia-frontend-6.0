<template>
  <div>
    <template v-if="submitted">
      <div v-if="status === 'awaiting_validation'">
        <b class="orange--text">Menunggu verifikasi</b>
      </div>
      <div v-if="status === 'rejected'">
        <b class="red--text text--darken-1">{{ `Ditolak: ${reason}` || 'Waduh ditolak :(' }}</b>
      </div>
    </template>
    <div class="mt-1">
      <Alert v-if="error" :message="error" type="error" class="mb-2" />
      <v-select
        :value="response"
        :items="options"
        outlined
        dense
        @input="value => { currentResponse = value }"
        @change="submitResponse"
      >
        <v-progress-circular v-if="loading" slot="append-outer" size="24" indeterminate />
        <v-icon v-if="!loading && submitted && status === 'completed'" slot="append-outer" color="green">
          far fa-check-circle
        </v-icon>
      </v-select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import Alert from '~/components/partials/Alert.vue';

@Component({
  name: 'OptionWidget',
  components: { Alert }
})
export default class OptionWidget extends Vue {
    currentResponse: string|undefined = '';

    @Prop({ default: false }) loading!: boolean;
    @Prop({ default: '' }) response!: string;
    @Prop({ default: '' }) error!: string;

    @Prop({ default: false }) submitted!: boolean;
    @Prop({ default: '' }) status!: string;
    @Prop({ default: '' }) reason!: string;

    @Prop() options!: string[];

    submitResponse() {
      const currentResponse = this.currentResponse ? this.currentResponse : this.response;
      this.$emit('input', currentResponse);
    }
}
</script>

<style scoped>

</style>
