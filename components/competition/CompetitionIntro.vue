<template>
	<div>{{ title }}</div>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
	  name: 'CompetitionIntro',
	  props: ['title', 'description', 'categories']
	})
</script>

<style scoped>
</style>