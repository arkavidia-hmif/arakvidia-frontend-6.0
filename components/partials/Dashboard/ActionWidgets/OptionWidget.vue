<template>
  <div>
    <template v-if="currentTaskResponse">
      <div v-if="currentTaskResponse.status === 'awaiting_validation'">
        <b class="orange--text">Menunggu verifikasi</b>
      </div>
      <div v-if="currentTaskResponse.status === 'completed'">
        <b class="green--text text--darken-1">Sudah terverifikasi!</b>
      </div>
      <div v-if="currentTaskResponse.status === 'rejected'">
        <b class="red--text text--darken-1">{{ currentTaskResponse.reason || 'Waduh ditolak :(' }}</b>
      </div>
    </template>
    <div class="mt-1">
      <Alert v-if="error" :message="error" type="error" class="mb-2" />
      <v-select
        v-model="response"
        :items="task.widgetParameters.options"
        outlined
        dense
      />
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
import { Component, Vue, Prop, Action } from 'nuxt-property-decorator';
import { TaskResponse, Task, SubmitTaskResponseStatus } from '~/api/competition/types';
import { ApiError } from '~/api/base';

  @Component({
    name: 'TextWidget'
  })
export default class OptionWidget extends Vue {
    @Prop({ default: undefined }) taskResponse!: TaskResponse|undefined;
    @Prop({ default: undefined }) task!: Task|undefined;
    @Prop({ default: 0 }) teamId!: number;
    @Prop() userId: number|undefined;

    @Action('competition/submitTaskResponse') actionSubmitTaskResponse;

    error: string = '';
    loading: boolean = false;
    response: string|undefined = '';
    currentTaskResponse: TaskResponse|null = null;

    mounted() {
      this.currentTaskResponse = this.taskResponse || null;
      if (this.currentTaskResponse) { this.response = this.currentTaskResponse.response; }
    }

    submitResponse() {
      this.loading = true;

      return this.actionSubmitTaskResponse({
        teamId: this.teamId,
        userId: this.userId,
        taskId: (this.task) ? this.task.id : 0,
        response: this.response
      })
        .then((taskResponse: TaskResponse) => {
          this.currentTaskResponse = taskResponse;
        })
        .catch((e) => {
          if (e instanceof ApiError) {
            if (e.errorCode === SubmitTaskResponseStatus.ERROR) {
              this.error = 'Gagal submit';
              return;
            }

            this.error = e.message;
            return;
          }

          this.error = e.toString();
        })
        .finally(() => {
          this.loading = false;
        });
    }
}
</script>

<style scoped>

</style>
