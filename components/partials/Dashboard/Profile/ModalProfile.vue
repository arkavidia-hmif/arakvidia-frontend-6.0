<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="submit-button my-5 primary subtitle-2 text-none px-5 ml-2 font-weight-bold" style="border-radius: 50px;" v-on="on">
          Edit Profil
        </v-btn>
      </template>
      <form v-if="fUser" @submit.prevent="attemptEdit">
        <v-card justify="center">
          <v-card-title>
            <span class="headline font-weight-bold" style="color: #0B909A">Edit Profil</span>
          </v-card-title>
          <v-card-text class="mt-6">
            <Alert v-if="error" type="error" :message="error" />
            <v-text-field v-model="fUser.fullName" dense outlined label="Nama Lengkap*" />
            <v-select
              v-model="fUser.currentEducation"
              :items="educationLevels"
              label="Pendidikan"
              dense
              outlined
            />
            <v-text-field v-model="fUser.institution" dense outlined label="Sekolah/Universitas" />
            <v-text-field v-model="fUser.phoneNumber" dense outlined label="Nomor Ponsel" />
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="fUser.birthDate"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="fUser.birthDate"
                  label="Tanggal Lahir"
                  readonly
                  dense
                  outlined
                  v-on="on"
                />
              </template>
              <v-date-picker v-model="fUser.birthDate" no-title scrollabl @change="$refs.menu.save(fUser.birthDate)">
                <v-spacer />
                <v-btn text color="primary" @click="menu = false">
                  Batalkan
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(fUser.birthDate)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
            <v-text-field v-model="fUser.address" dense outlined label="Alamat" />
            <div>* isian wajib</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="blue darken-1" text @click="dialog = false">
              Tutup
            </v-btn>
            <v-btn color="blue darken-1" type="submit" :loading="isEditing" text>
              Simpan
            </v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-dialog>
  </v-row>
</template>

<script lang='ts'>
import { Action, Component, Prop } from 'nuxt-property-decorator';
import Vue from 'vue';
import { User } from '~/api/user/types';
import Alert from '~/components/partials/Alert.vue';
import { educationLevels } from '~/constants/profile';

@Component({
  components: { Alert }
})
export default class ModalProfile extends Vue {
  @Action('user/editUser') actionEditUser;
  @Prop() user!: User;

  educationLevels = educationLevels;

  dialog: boolean = false;
  menu: boolean = false;
  isEditing: boolean =false;
  error: string = '';
  fUser: User = { ...this.user };

  attemptEdit() {
    if (!this.fUser.fullName) {
      this.error = 'Nama lengkap harus diisi';
      return;
    }

    this.error = '';
    this.isEditing = true;
    this.actionEditUser({ user: this.fUser as User })
      .then(() => {
        this.dialog = false;
      })
      .catch((e) => {
        this.error = e.toString();
      })
      .finally(() => {
        this.isEditing = false;
      });
  }
}
</script>

<style scoped>
</style>
