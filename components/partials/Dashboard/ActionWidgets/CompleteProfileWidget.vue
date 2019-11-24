<template>
  <div v-if="!!fUser" class="mt-5">
    <template v-if="infoShouldVisible(UserAttributes.FULL_NAME)">
      <v-row>
        <v-col :cols="12" :md="3" class="font-weight-bold">
          Nama Lengkap
        </v-col>
        <v-col :cols="12" :md="9">
          {{ authState.user.fullName }}
          <v-icon color="green" small class="ml-2">
            far fa-check-circle
          </v-icon>
        </v-col>
      </v-row>
      <v-divider />
    </template>
    <template v-if="infoShouldVisible(UserAttributes.CURRENT_EDUCATION)">
      <v-row>
        <v-col :cols="12" :md="3" class="font-weight-bold">
          Pendidikan
        </v-col>
        <v-col :cols="12" :md="9">
          {{ authState.user.currentEducation }}
          <v-icon color="green" small class="ml-2">
            far fa-check-circle
          </v-icon>
        </v-col>
      </v-row>
      <v-divider />
    </template>
    <template v-if="infoShouldVisible(UserAttributes.INSTITUTION)">
      <v-row>
        <v-col :cols="12" :md="3" class="font-weight-bold">
          Sekolah/Universitas
        </v-col>
        <v-col :cols="12" :md="9">
          {{ authState.user.institution }}
          <v-icon color="green" small class="ml-2">
            far fa-check-circle
          </v-icon>
        </v-col>
      </v-row>
      <v-divider />
    </template>
    <template v-if="infoShouldVisible(UserAttributes.PHONE_NUMBER)">
      <v-row>
        <v-col :cols="12" :md="3" class="font-weight-bold">
          Nomor Ponsel
        </v-col>
        <v-col :cols="12" :md="9">
          {{ authState.user.phoneNumber }}
          <v-icon color="green" small class="ml-2">
            far fa-check-circle
          </v-icon>
        </v-col>
      </v-row>
      <v-divider />
    </template>
    <template v-if="infoShouldVisible(UserAttributes.BIRTH_DATE)">
      <v-row>
        <v-col :cols="12" :md="3" class="font-weight-bold">
          Tanggal Lahir
        </v-col>
        <v-col :cols="12" :md="9">
          {{ authState.user.birthDate }}
          <v-icon color="green" small class="ml-2">
            far fa-check-circle
          </v-icon>
        </v-col>
      </v-row>
      <v-divider />
    </template>
    <template v-if="infoShouldVisible(UserAttributes.ADDRESS)">
      <v-row>
        <v-col :cols="12" :md="3" class="font-weight-bold">
          Alamat
        </v-col>
        <v-col :cols="12" :md="9">
          {{ authState.user.address }}
          <v-icon color="green" small class="ml-2">
            far fa-check-circle
          </v-icon>
        </v-col>
      </v-row>
      <v-divider />
    </template>

    <div class="mt-5">
      <v-text-field
        v-if="fieldShouldVisible(UserAttributes.FULL_NAME)"
        v-model="fUser.fullName"
        dense
        outlined
        label="Nama Lengkap"
        required
      >
        <v-icon slot="append-outer" color="warning">
          fas fa-exclamation-circle
        </v-icon>
      </v-text-field>

      <v-select
        v-if="fieldShouldVisible(UserAttributes.CURRENT_EDUCATION)"
        v-model="fUser.currentEducation"
        :items="educationLevels"
        label="Pendidikan"
        dense
        outlined
      >
        <v-icon slot="append-outer" color="warning">
          fas fa-exclamation-circle
        </v-icon>
      </v-select>

      <v-text-field
        v-if="fieldShouldVisible(UserAttributes.INSTITUTION)"
        v-model="fUser.institution"
        dense
        outlined
        label="Sekolah/Universitas"
        required
      >
        <v-icon slot="append-outer" color="warning">
          fas fa-exclamation-circle
        </v-icon>
      </v-text-field>

      <v-text-field
        v-if="fieldShouldVisible(UserAttributes.PHONE_NUMBER)"
        v-model="fUser.phoneNumber"
        dense
        outlined
        label="Nomor Ponsel"
        required
      >
        <v-icon slot="append-outer" color="warning">
          fas fa-exclamation-circle
        </v-icon>
      </v-text-field>

      <v-menu
        v-if="fieldShouldVisible(UserAttributes.BIRTH_DATE)"
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
            required
            v-on="on"
          >
            <v-icon slot="append-outer" color="warning">
              fas fa-exclamation-circle
            </v-icon>
          </v-text-field>
        </template>
        <v-date-picker v-model="fUser.birthDate" no-title scrollable @change="$refs.menu.save(fUser.birthDate)">
          <v-spacer />
          <v-btn text color="primary" @click="menu = false">
            Batalkan
          </v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(fUser.birthDate)">
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>

      <v-text-field
        v-if="fieldShouldVisible(UserAttributes.ADDRESS)"
        v-model="fUser.address"
        dense
        outlined
        label="Alamat"
        required
      >
        <v-icon slot="append-outer" color="warning">
          fas fa-exclamation-circle
        </v-icon>
      </v-text-field>
    </div>
    <v-btn
      v-if="incompleteFieldsExists"
      :loading="loading"
      outlined
      color="grey darken-1"
      class="text-none"
      @click.prevent="attemptEdit"
    >
      Simpan
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, State, Action } from 'nuxt-property-decorator';
import Alert from '~/components/partials/Alert.vue';
import { UserAttributes, User } from '~/api/user/types';
import { AuthState } from '~/store/user';

@Component({
  name: 'CompleteProfileWidget',
  components: { Alert }
})
export default class CompleteProfileWidget extends Vue {
  @Prop() requiredFields!: string[];
  @State('user') authState!: AuthState;
  @Action('user/editUser') actionEditUser;

  UserAttributes = UserAttributes;
  menu: boolean = false;
  fUser: User|null = null;
  error: string = '';
  loading: boolean = false;

  mounted() {
    this.fUser = { ...this.authState.user } as User;
  }

  fieldShouldVisible(userAttribute: UserAttributes): boolean {
    if (!!this.authState && !!this.authState.user) { return this.requiredFields.includes(userAttribute.toString()) && !this.authState.user[userAttribute]; }
    else { return false; }
  }

  infoShouldVisible(userAttribute: UserAttributes): boolean {
    if (!!this.authState && !!this.authState.user) { return this.requiredFields.includes(userAttribute.toString()) && !!this.authState.user[userAttribute]; }
    else { return false; }
  }

  get incompleteFieldsExists(): boolean {
    const incompleteFields = this.requiredFields.filter((field: string) => {
      if (this.authState.user) { return !this.authState.user[field]; }
      else { return true; }
    });

    return incompleteFields.length !== 0;
  }

  attemptEdit() {
    // TODO check

    this.error = '';
    this.loading = true;
    this.actionEditUser({ user: this.fUser as User })
      .then(() => {
        // TODO what?
      })
      .catch((e) => {
        this.error = e.toString();
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>

<style scoped>

</style>
