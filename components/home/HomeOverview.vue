<template>
	<v-container fill-height pa-0 class="d-flex flex-column" style="min-height: 100vh">
		<div class="d-flex flex-column" style="flex: 1">
			<v-container px-4>
				<v-row>
					<v-col :cols="12" :md="3" :order="3" :order-md="1" align-self="center" class="hidden-sm-and-down">
						<v-img width="100%" fill-height cover :src="require('~/assets/home-overview.svg')">
							<v-layout justify-center column fill-height float-right>
								<div class="display-1 font-weight-bold">Tentang<br/>Arkavidia</div>
								<div class="display-2 font-weight-bold" style="color: #e83158">6.0</div>
							</v-layout>
						</v-img>
					</v-col>
					<v-col :cols="12" :md="6" :order="2" :order-md="2" mx-3 align-self="center">
						<p class="mt-4 grey--text text--darken-1">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>
						<div class="mt-8">
							<v-btn large rounded color="#21C7C5" class="text-none mt-2" elevation="0" style="color: white">Baca lebih lanjut</v-btn>
						</div>
					</v-col>
					<v-col :cols="12" :md="3" :order="1" :order-md="3" align-self="center">
						<v-carousel
					      v-model="model[0]"
					      show-arrows
					      hide-delimiters
					    >
					      <v-carousel-item
					        v-for="(image, i) in aboutImages"
					        :key="image"
					        :src="require(`~/assets/${image}`)"
					      ></v-carousel-item>
					    </v-carousel>
					</v-col>
				</v-row>
				<v-row>
					<v-col :cols="12" :md="6" align-self="center">
						<v-carousel
					      v-model="model[1]"
					      show-arrows
					      hide-delimiters
					      height="40vh"
					    >
					      <v-carousel-item
					        v-for="(image, i) in competitionImages"
					        :key="image"
					        :src="require(`~/assets/${image}`)"
					      >
					      	<v-layout justify-end column fill-height align-end>
				      			<v-col :cols="6" align-content="center" style="background-color: white">
									<div class="subtitle-1 font-weight-bold" align="end">Kompetisi baru!</div>
						      		<div class="display-2 font-weight-bold" align="end" style="color: #e83158">Hackathon</div>
								    <div align="end">
									    <v-btn class="text-none subtitle-2 font-weight-bold" to="/competition/hackathon" text color="#21C7C5">Info lebih lanjut</v-btn>
									</div>
						      	</v-col>
							</v-layout>
					      </v-carousel-item>
					    </v-carousel>
					</v-col>
					<v-col :cols="12" :md="6" align-self="center">
						<div class="display-1 font-weight-bold">Kompetisi</div>
						<p class="mt-4 grey--text text--darken-1">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>
					</v-col>
				</v-row>
				<v-row>
					<v-col :cols="12" :md="6" :order="1" :order-md="2" align-self="center">
						<v-carousel
					      v-model="model[2]"
					      show-arrows
					      hide-delimiters
					      height="40vh"
					    >
					      <v-carousel-item
					        v-for="(image, i) in eventImages"
					        :key="image"
					        :src="require(`~/assets/${image}`)"
					      >
					      	<v-layout justify-end column fill-height align-end>
				      			<v-col :cols="6" align-content="center" style="background-color: white">
						      		<div class="display-2 font-weight-bold" align="end" style="color: #e83158">Gala Dinner</div>
								    <div align="end">
									    <v-btn class="text-none subtitle-2 font-weight-bold" to="/" text color="#21C7C5">Info lebih lanjut</v-btn>
									</div>
						      	</v-col>
							</v-layout>
					      </v-carousel-item>
					    </v-carousel>
					</v-col>
					<v-col :cols="12" :md="6" :order="2" :order-md="1" align-self="center">
						<div class="display-1 font-weight-bold">Mata Acara</div>
						<p class="mt-4 grey--text text--darken-1">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>
					</v-col>
				</v-row>
			</v-container>
		</div>
	</v-container>
</template>

<script>
	import Vue from 'vue'

	export default Vue.extend({
	  name: 'HomeOverview',
	  data () {
	    return {
	      model: [0, 1, 2],
	      aboutImages: ['hackathon_intro.jpg', 'logo.svg', 'mine.svg'],
	      competitionImages: ['mine.svg', 'hackathon_intro.jpg', 'logo.svg'],
	      eventImages: ['logo.svg', 'mine.svg', 'hackathon_intro.jpg']
	    }
	  }
	})
</script>

<style scoped>
</style>