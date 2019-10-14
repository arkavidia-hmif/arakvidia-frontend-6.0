<template>
  <DashboardWrapper>
    <v-card width="350" class="d-inline-block mx-auto my-5" elevation="3">
      <v-container>
        <v-list-item three-line class="px-0">
          <v-list-item-content>
            <v-list-item-title class="headline cyan--text text--darken-2">
              <strong>Competitive Programming</strong>
            </v-list-item-title>
            <v-list-item-subtitle>Untuk Mahasiswa</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <hr />
      </v-container>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text class="teal--text text--lighten-1">View Application</v-btn>
      </v-card-actions>
    </v-card>

    <v-card width="350" class="d-inline-block mx-5 my-5" elevation="3">
      <v-container>
        <v-list-item three-line class="px-0">
          <v-list-item-content>
            <v-list-item-title class="headline cyan--text text--darken-2">
              <strong>Capture The Flag</strong>
            </v-list-item-title>
            <v-list-item-subtitle>Untuk SMA & Mahasiswa</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <hr />
      </v-container>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text class="teal--text text--lighten-1">Register</v-btn>
      </v-card-actions>
    </v-card>

    <v-card width="350" class="d-inline-block mx-5 my-5" elevation="3">
      <v-container>
        <v-list-item three-line class="px-0">
          <v-list-item-content>
            <v-list-item-title class="headline cyan--text text--darken-2">
              <strong>Hackavidia</strong>
            </v-list-item-title>
            <v-list-item-subtitle>Untuk Mahasiswa</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <hr />
      </v-container>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text class="teal--text text--lighten-1">Register</v-btn>
      </v-card-actions>
    </v-card>

    <v-card width="350" class="d-inline-block mx-5 my-5" elevation="3">
      <v-container>
        <v-list-item three-line class="px-0">
          <v-list-item-content>
            <v-list-item-title class="headline cyan--text text--darken-2">
              <strong>Datavidia</strong>
            </v-list-item-title>
            <v-list-item-subtitle>Untuk Mahasiswa</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <hr />
      </v-container>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text class="teal--text text--lighten-1">Register</v-btn>
      </v-card-actions>
    </v-card>

    <v-card disabled width="350" class="d-inline-block mx-5 my-5" elevation="3">
      <v-container>
        <v-list-item three-line class="px-0">
          <v-list-item-content>
            <v-list-item-title class="headline cyan--text text--darken-2">
              <strong>Arkalogica</strong>
            </v-list-item-title>
            <v-list-item-subtitle>Untuk SMA</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <hr />
      </v-container>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text>Anda tidak bisa mendaftar lomba ini</v-btn>
      </v-card-actions>
    </v-card>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import DashboardWrapper from "~/components/partials/Dashboard/DashboardWrapper.vue";
@Component({
  components: { DashboardWrapper }
})
export default class DashboardIndex extends Vue {
  head() {
    return {
      title: "Dashboard"
    };
  }
}
</script>

<style scoped>
</style>
