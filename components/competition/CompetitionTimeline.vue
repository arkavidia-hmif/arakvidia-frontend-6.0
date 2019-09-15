<template>
	<div>{{ timeline[0].date }}</div>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
	  name: 'CompetitionTimeline',
	  props: ['timeline']
	})
</script>

<style scoped>
</style>