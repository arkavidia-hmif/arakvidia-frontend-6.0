<template>
  <div class="ml-3 mb-5">
    <div>
      <p style="font-weight: 700 !important; margin-bottom: 0 !important;">
        Daftar Anggota
      </p>
      <v-col
        v-if="members.length == 0"
        cols="12"
      >
        <p> Tidak ada anggota lain yang terdaftar dalam tim </p>
      </v-col>
      <v-col v-else cols="12" style="display: flex;">
        <div v-for="(member, i) in members" :key="i" style="padding: 1rem;">
          <p> Anggota {{ i + 1 }}</p>
          <ProfileField title="Name" :value="member.name" />
          <ProfileField title="Email" :value="member.email" />
        </div>
      </v-col>
    </div>
    <div v-if="members.length < maxCapacity">
      <p style="font-weight: 700 !important; margin-bottom: 0 !important;">
        Tambah Anggota
      </p>
      <v-col
        cols="12"
        sm="6"
      >
        <v-text-field
          v-model="name"
          label="Nama"
        />
        <v-text-field
          v-model="email"
          label="Email"
        />
        <v-btn class="my-5 primary subtitle-2 text-none px-5 font-weight-bold" style="border-radius: 50px">
          Tambah Anggota
        </v-btn>
      </v-col>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import ProfileField from '~/components/partials/Dashboard/ProfileField.vue';

export default Vue.extend({
  name: 'AnggotaTim',
  components: { ProfileField },
  data: () => ({
    members: [
      {
        name: 'Nella Zabrina Pramata',
        email: 'nella.zabrina@gmail.com'
      },
      {
        name: 'Ahmad Fahmi',
        email: 'ahmad.fahmi@gmail.com'
      }
    ],
    name: '',
    email: '',
    maxCapacity: 3
  })
});
</script>

<style scoped>

</style>
