<template>
  <TextWidget
    v-if="task.widget === 'text'"
    :loading="loading"
    :error="error"
    :submitted="!!currentTaskResponse"
    :response="!currentTaskResponse ? undefined : currentTaskResponse.response"
    :status="!currentTaskResponse ? undefined : currentTaskResponse.status"
    :reason="!currentTaskResponse ? undefined : currentTaskResponse.reason"
    @input="onInput"
  />
  <OptionWidget
    v-else-if="task.widget === 'option'"
    :loading="loading"
    :error="error"
    :submitted="!!currentTaskResponse"
    :response="!currentTaskResponse ? undefined : currentTaskResponse.response"
    :status="!currentTaskResponse ? undefined : currentTaskResponse.status"
    :reason="!currentTaskResponse ? undefined : currentTaskResponse.reason"
    :options="task.widgetParameters.options"
    @input="onInput"
  />
  <FileUploadWidget
    v-else-if="task.widget === 'file_upload'"
    :loading="loading"
    :error="error"
    :submitted="!!currentTaskResponse"
    :response="!currentTaskResponse ? undefined : currentTaskResponse.response"
    :status="!currentTaskResponse ? undefined : currentTaskResponse.status"
    :reason="!currentTaskResponse ? undefined : currentTaskResponse.reason"
    @input="onInput"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop, Action } from 'nuxt-property-decorator';
import { TaskResponse, Task, SubmitTaskResponseStatus } from '~/api/competition/types';
import { ApiError } from '~/api/base';
import TextWidget from '~/components/partials/Dashboard/ActionWidgets/TextWidget.vue';
import OptionWidget from '~/components/partials/Dashboard/ActionWidgets/OptionWidget.vue';
import FileUploadWidget from '~/components/partials/Dashboard/ActionWidgets/FileUploadWidget.vue';

  @Component({
    name: 'CompetitionActionWidget',
    components: { TextWidget, OptionWidget, FileUploadWidget }
  })
export default class CompetitionActionWidget extends Vue {
    @Prop({ default: undefined }) taskResponse!: TaskResponse|undefined;
    @Prop({ default: 0 }) teamId!: number;
    @Prop() teamMemberId: number|undefined;
    @Prop() task!: Task;

    @Action('competition/submitTaskResponse') actionSubmitTaskResponse;

    error: string = '';
    loading: boolean = false;
    response: string|undefined = '';
    modifiedTaskResponse: TaskResponse|null = null;

    get currentTaskResponse() {
      return this.modifiedTaskResponse ? this.modifiedTaskResponse : this.taskResponse;
    }

    onInput(response: string) {
      this.loading = true;
      this.actionSubmitTaskResponse({
        teamId: this.teamId,
        teamMemberId: this.teamMemberId,
        taskId: this.task.id,
        response
      })
        .then((taskResponse: TaskResponse) => {
          this.modifiedTaskResponse = taskResponse;
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
