<template>
  <div class="ml-3 mb-5">
    <div class="subtitle-2 font-weight-black " style="color: #666666">
      {{ title }}
    </div>
    <div class="subtitle-2 black--text">
      {{ value }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ProfileField',
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>

</style>
