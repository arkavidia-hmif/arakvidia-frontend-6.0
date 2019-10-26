<template>
  <div class="ml-3 mb-5">
    <div>
      <p style="font-weight: 700 !important; margin-bottom: 0 !important;">
        Upload Berkas
      </p>
      <v-col cols="12">
        <div style="padding: 1rem;">
          <v-file-input
            v-if="dummyCurrentTask == 'file_upload'"

            id="file_submission"
            ref="file_submission"
            show-size
            type="file"
            accept=".zip"
            :loading="isUploading"
            :disabled="isUploading"
            :label="dummyCurrentwidgetParameters"
            @change="e => handleFileUpload(e)"
          />
          <v-text-field
            v-if="dummyCurrentTask == 'text_field'"
            v-model="textField"
            :label="dummyCurrentwidgetParameters"
            :loading="isUploading"
            :disabled="isUploading"
          />
          <!--  v-if textfield, checkbox, radiogroup, dll  -->
          <!-- <div v-if="file != null" class="subtitle-2 font-weight-black">
            {{ file.originalFilename }} - {{ file.uploadedAt }}
          </div> -->
          <v-col cols="12">
            <v-btn :disabled="isUploading" class="my-5 primary subtitle-2 text-none px-5 font-weight-bold" style="border-radius: 50px" @click="submitFile()">
              Submit File
            </v-btn>
          </v-col>
        </div>
        <p>
          <b style="color: #666666">
            Ketentuan:
          </b>
        </p>
        <p>
          { Tasks.widgetParameters }
        </p>
      </v-col>
    </div>
    <div>
      <p style="font-weight: 700 !important; margin-bottom: 0 !important;">
        Info Pembayaran
      </p>
      <p>
        { widget }
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Action, Getter, Vue } from 'nuxt-property-decorator';
import { ApiError } from '~/api/base';

// Lint error, tapi kalo dihapus malah error
@Component({
  components: { UploadBerkas }
})

export default class UploadBerkas extends Vue {
  // Form input
  inputFile: string = '';
  textField: string = '';
  checkbox: string = '';
  radioGroup: string = '';
  select: string = '';
  // Global state
  currentStage: undefined;
  currentTask: undefined;
  dummyCurrentTaskWidget: string = 'file_upload';
  dummyCurrentWidgetParameters: string = 'Isi di sini';
  currentTaskResponse: undefined;
  currentFile: File | null = null;
  // Local state
  isUploading: boolean = false;
  error: string = '';

  @Action('competition/uploadFile') uploadFileAction;
  @Action('competition/retrieveFile') retrieveFileAction;
  @Action('competition/taskCreate') taskCreateAction;
  @Getter('competition/getTeam') getTeam;
  @Getter('competition/getFile') getFile;

  // UNKNOWN ARRAY KE-BERAPA

  stage() {
    this.currentStage = this.getTeam.stages[0];
    this.currentTask = this.currentStage.tasks[0];
  }

  taskResponse() {
    this.currentTaskResponse = this.getTeam.taskResponses[0];
  }

  file() {
    this.currentFile = this.getFile;
  }

  submitFile() {
    const formData = new FormData();
    formData.append('file', this.inputFile);
    // console.warn('>> formData >> ', formData);

    if (!this.inputFile) {
      this.error = 'Pilih file terlebih dahulu';
      return;
    }

    if (!this.textField) {
      this.error = 'Deskripsi file harus diisi';
      return;
    }

    this.isUploading = true;
    this.error = '';

    // TEAM TASK CREATE
  }

  handleFileUpload(e) {
    // this.inputFile = this.$refs.file.files[0];
    // this.inputFile = e.target.files || e.dataTransfer.files;
    // console.warn('>>>> 1st element in files array >>>> ', this.inputFile);

    const file = this.$refs.file_submission.files[0];
    const formData = new FormData();
    formData.append('file', file);

    console.log(file);
    console.log(formData);
    console.log(formData.get('file'));

    // let formData = new FormData();

    // console.warn(Array.from(this.inputFile));

    // if (this.inputFile) {
    //   /*for (let file of Array.from(this.inputFile)) {*/
    //     formData.append("appendedFile", this.inputFile);
    //   }

    //   console.log('atas ', formData.get("appendedFile"));
    //   console.log('bawah ', this.inputFile);
    //   console.log(this.textField);

    this.isUploading = true;

    // UPLOAD FILE

    // } else {
    //   console.log('no file to send');
    // }
  }

  mounted() {
    // Get global state
    this.stage();
    this.taskResponse();
    this.file();

    // RETRIEVE FILE
  }
}
</script>

<style scoped>

</style>
