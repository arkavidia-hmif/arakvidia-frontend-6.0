<template>
	<div>{{ prizes[0].title }}</div>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
	  name: 'CompetitionPrize',
	  props: ['prizes']
	})
</script>

<style scoped>
</style>