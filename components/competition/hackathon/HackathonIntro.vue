<template>
	<v-container style="min-height: 100vh" fill-height pa-4>
		<v-layout column>
			<v-container fill-height>
				<v-row wrap>
					<v-col :cols="12" :md="7" align-self="center">
						<div class="display-1 font-weight-bold" style="color: #0B909A">Hackathon</div>
						<p class="mt-4 grey--text text--darken-1">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>
						<div class="mt-4">
							Kategori
							&nbsp;
							<v-chip color="black" class="black white--text">Mahasiswa</v-chip>
						</div>
						<div class="mt-8">
							<v-btn large rounded outlined color="#0B909A" class="text-none mr-2 mt-2">Download guidebook</v-btn>
							<v-btn large rounded color="primary" class="text-none mt-2" elevation="0">Daftar sekarang</v-btn>
						</div>
					</v-col>
					<v-col :cols="12" :md="4" :offset-md="1" align="center">
						<v-img width="100%" fill-height cover :src="require('~/assets/hackathon_intro.jpg')"></v-img>
					</v-col>
				</v-row>
			</v-container>
			<div align="center" class="pa-2">
				<div class="font-weight-bold" style="color: #7608FF">Penasaran?</div>
				<v-img :src="require('~/assets/down_arrow.svg')" width="20" class="mt-2"></v-img>
			</div>
		</v-layout>
	</v-container>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
	  name: 'HackathonIntro',
	})
</script>

<style scoped>
</style>