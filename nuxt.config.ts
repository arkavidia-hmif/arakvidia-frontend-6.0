require('dotenv').config({ path: getDotEnvFilename() });

export default {
  mode: 'universal',
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    title: "Arkavidia 6.0",
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/logo.png'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,700'},
      {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css'}
    ]
  },
  loading: {color: '#fff'},
  css: [],
  plugins: [],
  devModules: [
    '@nuxtjs/vuetify',
  ],
  build: {
    extractCSS: true,
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
    ['@nuxtjs/dotenv', {filename: getDotEnvFilename()}]
  ],
  axios: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true
  },
  googleAnalytics: {
    id: process.env.VUE_APP_GA_ID
  }
}

function getDotEnvFilename() {
  if (process.env.NODE_ENV === 'production') {
    return (process.env.BUILD_ENV === 'staging') ? '.env.staging' : '.env.production';
  } else {
    return '.env.development';
  }
}