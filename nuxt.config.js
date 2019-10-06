require('dotenv').config({ path: getDotEnvFilename() });

export default {
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  mode: 'universal',
  head: {
    titleTemplate: '%s - Arkavidia 6.0',
    // title: 'Arkavidia 6.0',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [],
    link: [
      { rel: 'icon', type: 'image/png', href: '/logo.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,700' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Baloo+Da|Raleway&display=swap' }
    ]
  },
  loading: { color: '#FF084F' },
  css: [],
  plugins: [
    '~/plugins/typedjs',
    '~/plugins/definitions',
    { src: '~/plugins/vuex-persist', ssr: false }
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],
  build: {
    extractCSS: true
  },
  generate: {
    exclude: [
      /^(?=.dashboard\b).*$/
    ]
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    ['@nuxtjs/dotenv', { filename: getDotEnvFilename() }],
    '@nuxtjs/sentry',
    '@nuxtjs/sitemap'
  ],
  axios: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    breakpoint: {
      thresholds: {
        xs: 340,
        sm: 540,
        md: 800,
        lg: 1280,
        xl: 50000
      }
    }
  },
  googleAnalytics: {
    id: process.env.VUE_APP_GA_ID
  },
  sentry: {
    dsn: 'https://13376353d3054dc08d96ce19e3c8e0c8@sentry.io/1769431', // Enter your project's DSN here
    config: {} // Additional config
  }
};

function getDotEnvFilename() {
  if (process.env.NODE_ENV === 'production') {
    return (process.env.BUILD_ENV === 'staging') ? '.env.staging' : '.env.production';
  }
  return '.env.development';
}
