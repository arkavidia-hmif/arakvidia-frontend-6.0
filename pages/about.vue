<template>
  <v-container class="mt-12">
    <div class="mt-8">
      <v-sheet style="border-radius: 8px;" color="#f8f8f8">
        <v-row class="pa-4">
          <v-col :cols="12" :md="4" :offset-md="4">
            <v-img :src="require('~/assets/logo_horizontal.svg')" width="100%" />
          </v-col>
        </v-row>
      </v-sheet>

      <v-row class="mt-8">
        <v-col :cols="12" :md="6" align-self="center">
          <div class="display-1 font-weight-bold mt-4">
            Tentang Arkavidia 6.0
          </div>
          <p class="mt-4">
            Arkavidia 6.0 adalah acara prestisius tahunan yang diselenggarakan oleh Himpunan Mahasiswa Informatika Institut Teknologi Bandung (HMIF ITB).
            Bertemakan "Embracing Our Nation in Digital Transformation," Arkavidia hadir untuk menyelaraskan dan menyebarluaskan transformasi digital yang sedang kita hadapi.
            Dengan pengalaman lebih dari 6 tahun dan 2000 peserta, Arkavidia berkembang lebih jauh lagi untuk memajukan pemahaman teknologi Indonesia.
          </p>
        </v-col>
        <v-col :cols="12" :md="5" :offset-md="1" align-self="center">
          <v-img :src="require('~/assets/images/about/about.jpg')" width="100%" style="border-radius: 8px" />
        </v-col>
      </v-row>

      <v-row class="mt-12">
        <v-col :cols="12" :md="6" align-self="end" class="hidden-sm-and-down">
          <v-img :src="require('~/assets/ornaments/prize-mid-right.png')" width="100%" />
        </v-col>
        <v-col :cols="12" :md="6">
          <v-sheet class="pa-6 font-weight-bold" style="border: 2px dashed #FF084F; border-radius: 8px;">
            <div class="headline font-weight-bold" style="color: #FF084F">
              Visi
            </div>
            <div class="title font-italic mt-2">
              Arkavidia sebagai acara yang dapat merangkul dan mencerdaskan generasi masa depan di bidang teknologi secara masif dengan menginisiasi implementasi solusi transformasi digital ke masyarakat Indonesia.
            </div>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row class="mt-6 mb-12">
        <v-col :cols="12" :md="6">
          <v-sheet class="pa-6 mt-6 font-weight-bold" style="border: 2px dashed #FFBA07; border-radius: 8px;">
            <div class="headline font-weight-bold" style="color: #FFBA07">
              Misi
            </div>
            <div class="title mt-2">
              <ol>
                <li>Melakukan pendekatan secara langsung kepada generasi masa depan.</li>
                <li>Mengadakan wadah transfer pengetahuan dari berbagai disiplin di bidang teknologi informasi.</li>
                <li>Mengadakan kompetisi dan akademi bidang teknologi informasi.</li>
              </ol>
            </div>
          </v-sheet>
        </v-col>
        <v-col :cols="12" :md="6" class="hidden-sm-and-down" align-self="end">
          <v-img :src="require('~/assets/ornaments/prize-top-right.png')" width="100%" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';

export default Vue.extend({
  head() {
    return {
      title: 'Tentang Arkavidia 6.0'
    };
  }
} as ComponentOptions<Vue>);
</script>
