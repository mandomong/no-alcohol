const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    allowedHosts: 'all',
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: './backend/public'
})
