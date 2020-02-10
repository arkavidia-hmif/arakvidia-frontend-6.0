<template>
  <div />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component({})
export default class Profile extends Vue {
  head() {
    return {
      title: 'Arkavidia Academy'
    };
  }

  mounted() {
    this.$router.replace('/preevent/arkavidia-academy/software-engineering');
  }
}
</script>

<style scoped>

</style>
