<template>
  <div>
    <Alert v-if="error" :message="error" type="error" class="mb-2" />
    <div v-if="submitted && !loading && !uploading">
      <div v-if="status === 'awaiting_validation'">
        <b class="orange--text">Menunggu verifikasi</b>
      </div>
      <div v-if="status === 'rejected'">
        <b class="red--text text--darken-1">{{ `Ditolak: ${reason}` || 'Waduh ditolak :(' }}</b>
      </div>

      <v-input class="mt-1">
        <div v-if="response && !loading && !uploading" slot="default" class="pa-2" style="border: 1px solid #ccc; border-radius: 4px; width: 100%;">
          <v-sheet>
            <v-layout align-center>
              <v-flex shrink>
                <v-icon small class="mr-1">
                  fas fa-paperclip
                </v-icon>
              </v-flex>
              <v-flex>
                <a v-if="!!fileLink" target="_blank" :href="fileLink">Lihat file</a>
                <div v-else>
                  <v-progress-circular size="20" indeterminate />
                </div>
              </v-flex>
            </v-layout>
          </v-sheet>
        </div>
        <v-icon v-if="status === 'completed'" slot="append" color="green" class="mt-1">
          far fa-check-circle
        </v-icon>
      </v-input>
    </div>

    <div>
      <input ref="file" type="file" style="display: none" @change="handleUpload">

      <v-btn
        v-if="!uploading && !loading"
        outlined
        color="grey darken-1"
        class="text-none"
        @click.prevent="() => $refs.file.click()"
      >
        Upload File
      </v-btn>
      <div v-if="uploading || loading">
        <div class="grey--text">
          Uploading..
        </div>
        <v-progress-linear :value="uploadProgress" class="mt-2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Action } from 'nuxt-property-decorator';
import { File } from '~/api/uploader/types';
import Alert from '~/components/partials/Alert.vue';

  @Component({
    name: 'FileUploadWidget',
    components: { Alert }
  })
export default class FileUploadWidget extends Vue {
    @Prop({ default: false }) loading!: boolean;
    @Prop({ default: '' }) response!: string;
    @Prop({ default: '' }) error!: string;

    @Prop({ default: false }) submitted!: boolean;
    @Prop({ default: '' }) status!: string;
    @Prop({ default: '' }) reason!: string;

    @Action('uploader/fetchFile') actionFetchFile;
    @Action('uploader/uploadFile') actionUploadFile;

    uploadError: string = '';
    uploading: boolean = false;
    uploadProgress: number = 0;
    fileLink: string = '';

    mounted() {
      if (this.submitted) {
        this.actionFetchFile({ fileId: this.response })
          .then((file: File) => {
            this.fileLink = file.fileLink;
          });
      }
    }

    onUploadProgress(progressEvent: ProgressEvent) {
      this.uploadProgress = (Math.round((progressEvent.loaded * 100) / progressEvent.total));
    }

    handleUpload() {
      // eslint-disable-next-line dot-notation
      const file = this.$refs.file['files'][0];
      const description = 'A file';
      this.uploading = true;
      this.uploadProgress = 0;

      this.uploadError = '';
      this.actionUploadFile({ file, description, onUploadProgress: this.onUploadProgress })
        .then((file: File) => {
          this.fileLink = file.fileLink;
          this.$emit('input', file.id);
        })
        .catch((e) => {
          this.uploadError = e.toString();
        })
        .finally(() => {
          this.uploading = false;
          this.uploadProgress = 0;
        });
    }
}
</script>

<style scoped>

</style>
