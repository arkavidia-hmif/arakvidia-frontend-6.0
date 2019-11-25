<template>
  <v-container>
    <v-row v-if="!isLoading ">
      <v-col :cols="12" :sm="4" :lg="3">
        <TabMenu
          :slug="arkavidiatalkSlug"
          :team="teamDetails"
        />
      </v-col>
      <v-col :cols="12" :sm="8" :lg="9">
        <slot />
      </v-col>
    </v-row>
    <div v-else class="pa-4" align="center">
      <v-progress-circular indeterminate />
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import TabMenu from '~/components/partials/Dashboard/ArkavidiaTalk/TabMenu.vue';

  @Component({
    name: 'ArkavidiaTalkWrapper',
    components: { TabMenu }
  })
export default class ArkavidiaTalkWrapper extends Vue {
    @Prop({ default: '' }) arkavidiatalkSlug?: string;

    isLoading: boolean= false;
    teamDetails = { 'id': 6, 'competition': { 'id': 1, 'name': 'Competitive Programming', 'slug': 'competitive-programming', 'maxTeamMembers': 3, 'minTeamMembers': 1, 'isRegistrationOpen': true, 'viewIcon': 'https://www.arkavidia.id' }, 'name': 'aaa', 'teamLeaderEmail': 'arkavidia@std.stei.itb.ac.id', 'institution': 'ITB', 'isParticipating': true, 'teamMembers': [{ 'id': 9, 'fullName': 'Admin Arkavidia', 'email': 'arkavidia@std.stei.itb.ac.id', 'hasAccount': true, 'isTeamLeader': true, 'createdAt': '2019-11-21T10:55:30.558118+07:00' }], 'activeStageId': 1, 'stages': [{ 'id': 1, 'name': 'Registration', 'order': 0, 'tasks': [{ 'id': 2, 'name': 'SKMA', 'category': 'Task1', 'widget': 'file_upload', 'widgetParameters': { 'description': 'Surat Keterangan Mahasiswa Aktif' }, 'isUserTask': true }, { 'id': 4, 'name': 'Pembayaran', 'category': 'Task1', 'widget': 'file_upload', 'widgetParameters': { 'description': 'Buat pembayaran ke blablabla sebanyak Rp103.212' }, 'isUserTask': false }, { 'id': 5, 'name': 'Informasi', 'category': 'Task1', 'widget': 'option', 'widgetParameters': { 'options': ['Kenalan (Guru, Kakak Kelas, dll)', 'Media Partner (EventKampus, EventBanget, Persma, dll.)', 'Instagram', 'LINE', 'Twitter', 'LinkedIn', 'Facebook', 'Panitia Arkavidia', 'Lainnya'], 'description': 'Darimana kamu mengetahui Arkavidia Informatics and IT Festival 6.0?' }, 'isUserTask': false }, { 'id': 3, 'name': 'Ukuran Kaos', 'category': 'Task1', 'widget': 'option', 'widgetParameters': { 'options': ['S', 'M', 'L', 'XL', 'XXL'], 'description': 'Ukuran kaos untuk keperluan final' }, 'isUserTask': true }, { 'id': 6, 'name': 'Apa ini?', 'category': 'Task1', 'widget': 'text', 'widgetParameters': { 'description': 'Isi dengan kata-kata bebas' }, 'isUserTask': false }] }], 'taskResponses': [], 'userTaskResponses': [], 'createdAt': '2019-11-21T10:55:30.553361+07:00' }
}
</script>

<style scoped>

</style>
