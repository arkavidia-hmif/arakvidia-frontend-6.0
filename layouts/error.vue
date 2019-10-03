<template>
  <v-app dark>
    <NotFound v-if="error.statusCode === 404" />
    <div v-else class="pa-10">
      <h1>
        {{ otherError }}
      </h1>
      <NuxtLink to="/">
        Home page
      </NuxtLink>
    </div>
  </v-app>
</template>

<script>
import NotFound from '~/components/NotFound'

export default {
  layout: 'empty',
  components: { NotFound },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
        this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>

<style scoped>
  h1 {
    font-size: 20px;
  }
</style>
