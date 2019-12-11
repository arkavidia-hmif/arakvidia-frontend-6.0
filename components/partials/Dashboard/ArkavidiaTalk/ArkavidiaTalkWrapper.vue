<template>
  <v-container>
    <v-row v-if="!isLoading && registrantDetails">
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
import TabMenu from '~/components/partials/Dashboard/ArkavidiaTalk/TabMenu.vue';
import { Registrant } from '~/api/event/types';

  @Component({
    name: 'ArkavidiaTalkWrapper',
    components: { TabMenu }
  })
export default class ArkavidiaTalkWrapper extends Vue {
    @Prop({ default: '' }) slug?: string;

    @Action('event/fetchRegistrantList') fetchRegistrantListAction;
    @Action('event/fetchRegistrantDetail') fetchRegistrantDetailAction;

    registrantDetails: Registrant|null = null;
    isLoading: boolean = true;

    mounted() {
      this.isLoading = true;
      this.fetchRegistrantListAction()
        .then((registrants: Registrant[]) => {
          const registrant: Registrant|undefined = registrants.find((registrant: Registrant) => {
            if (!registrant.mainevent) { return false; }
            return (registrant.mainevent.slug === this.slug);
          });

          if (registrant) { return this.fetchRegistrantDetailAction(registrant.id); }
          else { return undefined; }
        })
        .then((registrant) => {
          if (registrant) { this.registrantDetails = registrant; }
          else { this.$router.push(`/dashboard/arkavidia-talk/${this.slug}/daftar`); }
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
}
</script>

<style scoped>

</style>
