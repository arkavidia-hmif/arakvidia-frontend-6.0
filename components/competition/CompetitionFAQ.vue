<template>
	<div>{{ faqs[0].question }}</div>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
	  name: 'CompetitionFAQ',
	  props: ['faqs']
	})
</script>

<style scoped>
</style>