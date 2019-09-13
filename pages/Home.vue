<template >
    <v-container fluid fill-height justify-space-between align-start column class="pa-0 ma-0" style="background: #FFFFFF">
	    <v-layout column>
	    	<Toolbar />
	        <HomeIntro />
	    </v-layout>
	</v-container>
</template>

<script>
    import Toolbar from '~/components/Toolbar';
    import HomeIntro from '~/components/HomeIntro';

	export default {
	  components: {
	    Toolbar,
	    HomeIntro
	  },
	}
</script>