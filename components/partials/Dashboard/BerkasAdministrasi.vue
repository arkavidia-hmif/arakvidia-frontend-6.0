<template>
  <div class="ml-3 mb-5">
    <div>
      <p style="font-weight: 700 !important; margin-bottom: 0 !important;">
        Upload Berkas
      </p>
      <v-col cols="12">
        <div style="padding: 1rem;">
          <v-file-input
            id="file"
            ref="file"
            show-size
            :loading="isUploading"
            accept=".zip"
            :disabled="isUploading"
            label="<Nama Kompetisi>_<Nama Tim>.zip"
            @change="e => handleFileUpload()"
          />
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
          Berkas diunggah dalam bentuk .zip
        </p>
        <p>
          Penamaan berkas adalah [Nama Kompetisi]_[Nama Tim].zip
        </p>
        <p>
          Ukuran maksimal berkas adalah 5 MB
        </p>
        <p>
          <b style="color: #666666">
            Berkas harus berisi:
          </b>
        </p>
        <p ml-3>
          1. Surat keterangan mahasiswa/siswa aktif tiap anggota
        </p>
        <p ml-3>
          2. Bukti pembayaran
        </p>
      </v-col>
    </div>
    <div>
      <p style="font-weight: 700 !important; margin-bottom: 0 !important;">
        Info Pembayaran
      </p>
      <p>
        Rekening: xxxxxxxx
      </p>
      <p>
        Jumlah Pembayaran: Rp12.345,00
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { ApiError } from '~/api/base';
import { File, FileStatus } from '~/api/competition';

// Lint error, tapi kalo dihapus malah error
@Component({
  components: { BerkasAdministrasi }
})

export default class BerkasAdministrasi extends Vue {
  originFile: string = '';
  description: string = '';
  file: File | null = null;
  isUploading: boolean = false;
  error: string = '';

  submitFile() {
    const formData = new FormData();
    formData.append('file', this.originFile);
    // console.log('>> formData >> ', formData);

    if (!this.originFile) {
      this.error = 'Pilih file terlebih dahulu';
      return;
    }

    if (!this.description) {
      this.error = 'Deskripsi file harus diisi';
      return;
    }

    this.isUploading = true;
    this.error = '';

    this.$arkavidiaApi.competition.uploadFile(formData, this.description)
      .then(() => {
        // console.log(results);
        // this.file = results;
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          if (e.errorCode === FileStatus.ERROR) {
            this.error = 'Gagal mengunggah file';
            return;
          }
          this.error = e.message;
          return;
        }
        this.error = e.toString();
      })
      .finally(() => {
        this.isUploading = false;
      });
  }

  handleFileUpload(e) {
    // this.originFile = this.$refs.file.files[0];
    this.originFile = e.target.files || e.dataTransfer.files;
    // console.log('>>>> 1st element in files array >>>> ', this.originFile);
  }

  /* mounted() {

    // Retrieving uploaded file
    // Err: file_id masih belum tahu dapet dari mana

    this.$arkavidiaApi.competition.retrieveFile(this.file_id)
      .then((results) => {
        if (results.length) {
          this.fileObject = results;
        }
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          if (e.errorCode === FileStatus.ERROR) {
            this.error = 'Gagal mengambil data file';
            return;
          }
          this.error = e.message;
          return;
        }
        this.error = e.toString();
      });
  } */
}
</script>

<style scoped>

</style>
