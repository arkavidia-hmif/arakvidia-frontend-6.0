<template>
  <div>
    <!-- eslint-disable-next-line vue/no-v-html-->
    <div class="mt-3" style="text-align: justify" v-html="$md.render(message)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

  @Component({
    name: 'MarkdownWidget'
  })
export default class MarkdownWidget extends Vue {
    @Prop() message!: string;
}
</script>

<style scoped>

</style>
