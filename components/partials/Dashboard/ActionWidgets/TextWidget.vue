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
    <div>
      <Alert v-if="error" :message="error" type="error" class="mb-2" />
      <v-text-field :value="response" outlined dense class="mt-2" @input="value => { currentResponse = value }">
        <v-icon v-if="submitted && status === 'completed'" slot="append-outer" color="green">
          far fa-check-circle
        </v-icon>
      </v-text-field>
      <v-btn
        :loading="loading"
        outlined
        color="grey darken-1"
        class="text-none"
        @click.prevent="submitResponse"
      >
        Simpan
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import Alert from '~/components/partials/Alert.vue';

  @Component({
    name: 'TextWidget',
    components: { Alert }
  })
export default class TextWidget extends Vue {
    currentResponse: string|undefined;

    @Prop({ default: false }) loading!: boolean;
    @Prop({ default: '' }) response!: string;
    @Prop({ default: '' }) error!: string;

    @Prop({ default: false }) submitted!: boolean;
    @Prop({ default: '' }) status!: string;
    @Prop({ default: '' }) reason!: string;

    submitResponse() {
      const currentResponse = this.currentResponse ? this.currentResponse : this.response;
      this.$emit('input', currentResponse);
    }
}
</script>

<style scoped>

</style>
