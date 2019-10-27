<template>
  <div>
    <template v-if="currentTaskResponse && !deleted">
      <div v-if="currentTaskResponse.status === 'awaiting_validation'">
        <b class="orange--text">Menunggu verifikasi</b>
      </div>
      <div v-if="currentTaskResponse.status === 'completed'">
        <b class="green--text text--darken-1">Sudah terverifikasi!</b>
      </div>
      <div v-if="currentTaskResponse.status === 'rejected'">
        <b class="red--text text--darken-1">{{ currentTaskResponse.reason || 'Waduh ditolak :(' }}</b>
      </div>

      <div v-if="currentTaskResponse.response" class="mt-1">
        <v-layout align-center>
          <v-flex shrink>
            <v-icon small class="mr-1">
              fas fa-paperclip
            </v-icon>
          </v-flex>
          <v-flex>
            <a target="_blank" :href="currentTaskResponse.response">Lihat file</a>
          </v-flex>
          <v-flex shrink>
            <v-btn
              icon
              small
              class="ma-0"
              @click.prevent="deleted = true"
            >
              <v-icon small color="red">
                fas fa-trash
              </v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </template>

    <template v-else>
      <input ref="file" type="file" style="display: none" @change="handleUpload">

      <v-btn
        v-if="!uploading"
        outlined
        color="grey darken-1"
        class="text-none"
        @click.prevent="() => $refs.file.click()"
      >
        Upload File
      </v-btn>
      <div v-if="uploading">
        <div class="grey--text">
          Uploading..
        </div>
        <v-progress-linear :value="uploadProgress" class="mt-2" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Action } from 'nuxt-property-decorator';
import { TaskResponse, Task } from '~/api/competition/types';
import { File } from '~/api/uploader/types';

  @Component({
    name: 'FileUploadWidget'
  })
export default class FileUploadWidget extends Vue {
    @Prop({ default: undefined }) taskResponse!: TaskResponse|undefined;
    @Prop({ default: undefined }) task!: Task|undefined;
    @Prop({ default: 0 }) teamId!: number;

    @Action('uploader/uploadFile') actionUploadFile;
    @Action('competition/submitTaskResponse') actionSubmitTaskResponse;

    uploading: boolean = false;
    deleted: boolean = false;
    uploadProgress: number = 0;
    currentTaskResponse: TaskResponse|null = null;

    mounted() {
      this.currentTaskResponse = this.taskResponse || null;
    }

    onUploadProgress(progressEvent: ProgressEvent) {
      this.uploadProgress = (Math.round((progressEvent.loaded * 100) / progressEvent.total));
    }

    handleUpload() {
      // eslint-disable-next-line dot-notation
      const file = this.$refs.file['files'][0];
      const description = (this.task) ? `File for task: ${this.task.name}` : 'A file';
      this.uploading = true;
      this.uploadProgress = 0;

      this.actionUploadFile({ file, description, onUploadProgress: this.onUploadProgress })
        .then((file: File) => {
          return this.actionSubmitTaskResponse({
            teamId: this.teamId,
            taskId: (this.task) ? this.task.id : null,
            response: file.fileLink
          });
        })
        .then((taskResponse: TaskResponse) => {
          this.currentTaskResponse = taskResponse;
        })
        .catch(() => {
          // TODO catch error
        })
        .finally(() => {
          this.uploading = false;
          this.deleted = false;
          this.uploadProgress = 0;
        });
    }
}
</script>

<style scoped>

</style>
