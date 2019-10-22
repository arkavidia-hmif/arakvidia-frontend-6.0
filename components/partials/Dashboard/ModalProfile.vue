<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="submit-button my-5 primary subtitle-2 text-none px-5 ml-2 font-weight-bold" style="border-radius: 50px;" v-on="on">
          Edit Profile
        </v-btn>
      </template>
      <form>
        <v-card justify="center">
          <v-card-title>
            <span class="headline">Edit Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Name*" :value="fullName" required />
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Education*" :value="currentEducation" required />
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Institution*" :value="institution" required />
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Phone Number*" :value="phoneNumber" required />
                </v-col>
                <v-col cols="12">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Birth Date"
                        readonly
                        v-on="on"
                      />
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer />
                      <v-btn text color="primary" @click="menu = false">
                        Cancel
                      </v-btn>
                      <v-btn text color="primary" @click="$refs.menu.save(date)">
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Address*" :value="address" required />
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
            <v-btn color="blue darken-1" type="submit" text>
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-dialog>
  </v-row>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'ModalProfile',
  props: {
    fullName: {
      type: String,
      required: true
    },
    currentEducation: {
      type: String,
      required: true
    },
    institution: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    birthDate: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  },
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    dialog: false,
    menu: false
  })
});
</script>

<style scoped>
</style>
