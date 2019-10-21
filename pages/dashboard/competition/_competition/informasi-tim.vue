<template>
  <DashboardWrapper>
  <v-container>
    <v-row>
        <v-col :cols="6" :md="3">
            <TabMenu :id="'ctf'"> </TabMenu>
        </v-col>
        <v-col :cols="6" :md="8" align-self="center">
            <!-- <AnggotaTim> </AnggotaTim> -->
        </v-col>
    </v-row>
  </v-container>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import TabMenu from '~/components/partials/Dashboard/TabMenu.vue';
// import AnggotaTim from '~/components/partials/Dashboard/AnggotaTim.vue';
@Component({
  components: { DashboardWrapper, TabMenu }
})
export default class DashboardIndex extends Vue {
  head() {
    return {
      title: 'Dashboard'
    };
  }
}
</script>

<style scoped>

</style>
