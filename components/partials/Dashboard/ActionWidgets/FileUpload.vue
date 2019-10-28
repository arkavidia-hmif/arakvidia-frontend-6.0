<template>
  <div>
    <v-alert v-if="error" type="error" class="mb-2">
      {{ error }}
    </v-alert>
    <div v-if="currentTaskResponse && !deleted">
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
            <a target="_blank" :href="getFileLink(currentTaskResponse.response)">Lihat file</a>
          </v-flex>
        </v-layout>
      </div>
    </div>

    <div class="mt-3">
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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Vue, Prop, Action } from 'nuxt-property-decorator';
import { TaskResponse, Task } from '~/api/competition/types';
import { File } from '~/api/uploader/types';
// import { ApiError } from '~/api/base';

  @Component({
    name: 'FileUploadWidget'
  })
export default class FileUploadWidget extends Vue {
    @Prop({ default: undefined }) taskResponse!: TaskResponse|undefined;
    @Prop({ default: undefined }) task!: Task|undefined;
    @Prop({ default: 0 }) teamId!: number;

    @Getter('uploader/getFilesMap') files!: File[];
    @Action('uploader/uploadFile') actionUploadFile;
    @Action('competition/submitTaskResponse') actionSubmitTaskResponse;

    error: string = '';
    uploading: boolean = false;
    deleted: boolean = false;
    uploadProgress: number = 0;
    currentTaskResponse: TaskResponse|null = null;

    getFileLink(fileId) {
      if (fileId in this.files) {
        return this.files[fileId].fileLink;
      }
      return fileId;
    }

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
            response: file.id
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
