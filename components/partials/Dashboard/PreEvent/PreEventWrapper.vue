<template>
  <v-container>
    <v-row v-if="!isLoading ">
      <v-col :cols="12" :sm="4" :lg="3">
        <TabMenu
          :slug="slug"
          :registrant="registrantDetails"
        />
      </v-col>
      <v-col :cols="12" :sm="8" :lg="9">
        <slot :registrant="registrantDetails" />
      </v-col>
    </v-row>
    <div v-else class="pa-4" align="center">
      <v-progress-circular indeterminate />
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop, Action } from 'nuxt-property-decorator';
import TabMenu from '~/components/partials/Dashboard/PreEvent/TabMenu.vue';
import { Registrant } from '~/api/preevent/types';

  @Component({
    name: 'PreEventWrapper',
    components: { TabMenu }
  })
export default class ArkavidiaTalkWrapper extends Vue {
    @Prop({ default: '' }) slug?: string;

    @Action('preevent/fetchRegistrantList') fetchRegistrantListAction;
    @Action('preevent/fetchRegistrantDetail') fetchRegistrantDetailAction;

    registrantDetails: Registrant|null = null;
    isLoading: boolean = true;

    mounted() {
      this.isLoading = true;
      this.fetchRegistrantListAction()
        .then((registrants: Registrant[]) => {
          const registrant: Registrant|undefined = registrants.find((registrant: Registrant) => {
            if (!registrant.preevent) { return false; }
            return (registrant.preevent.slug === this.slug);
          });

          if (registrant) { return this.fetchRegistrantDetailAction(registrant.id); }
          else { return undefined; }
        })
        .then((registrant) => {
          if (registrant) { this.registrantDetails = registrant; }
          else { this.$router.push(`/dashboard/preevent/`); }
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
}
</script>

<style scoped>

</style>
