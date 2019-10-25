<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="submit-button my-5 primary subtitle-2 text-none px-5 ml-2 font-weight-bold" style="border-radius: 50px;" v-on="on">
          Edit Profile
        </v-btn>
      </template>
      <v-alert v-if="error" type="error">
        {{ error }}
      </v-alert>
      <form v-if="fUser" @submit.prevent="attemptEdit">
        <v-card justify="center">
          <v-card-title>
            <span class="headline">Edit Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="fUser.fullName" label="Name*" :value="fUser.fullName" />
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="fUser.currentEducation" label="Education*" :value="fUser.currentEducation" />
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="fUser.institution" label="Institution*" :value="fUser.institution" />
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="fUser.phoneNumber" label="Phone Number*" :value="fUser.phoneNumber" />
                </v-col>
                <v-col cols="12">
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
                        label="Birth Date"
                        readonly
                        v-on="on"
                      />
                    </template>
                    <v-date-picker v-model="fUser.birthDate" no-title scrollable>
                      <v-spacer />
                      <v-btn text color="primary" @click="menu = false">
                        Cancel
                      </v-btn>
                      <v-btn text color="primary" @click="$refs.menu.save(fUser.birthDate)">
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="fUser.address" label="Address*" :value="fUser.address" />
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" type="submit" :loading="isEdit" text>
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-dialog>
  </v-row>
</template>

<script lang='ts'>
import { Component, Getter, Action } from 'nuxt-property-decorator';
import Vue from 'vue';
import { User } from '~/api/user/types.ts';

@Component
export default class ModalProfile extends Vue {
  @Getter('user/getUser') user !: User;
  @Action('user/editProfile') editProfileAction;
  dialog: boolean = false;
  menu: boolean = false;
  isEdit: boolean =false;
  error: string = '';
  fUser: User = Object.assign({}, this.user);
  attemptEdit() {
    if (!this.fUser.fullName) {
      this.error = 'Nama lengkap harus diisi';
      return;
    }
    if (!this.fUser.currentEducation) {
      this.error = 'Pendidikan saat ini harus diisi';
      return;
    }
    if (!this.fUser.institution) {
      this.error = 'Sekolah/Institusi harus diisi';
      return;
    }
    if (!this.fUser.phoneNumber) {
      this.error = 'Nomor telefon harus diisi';
      return;
    }
    if (!this.fUser.birthDate) {
      this.error = 'Tanggal lahir harus diisi';
      return;
    }
    if (!this.fUser.address) {
      this.error = 'Alamat harus diisi';
      return;
    }
    this.isEdit = true;
    const fUser = this.fUser;
    // console.log(fUser);
    this.editProfileAction(fUser)
      .then(() => {
        this.$router.go(0);
      })
      .catch((e) => {
        this.error = e.toString();
      })
      .finally(() => {
        this.isEdit = false;
      });
  }
  mounted() {
    this.fUser = Object.assign({}, this.user);
  }
}
</script>

<style scoped>
</style>
