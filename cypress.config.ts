import { defineConfig } from 'cypress'
import path from 'node:path'

const PORT = process.env.PORT ?? 8080
const HOST = process.env.HOST ?? 'http://localhost'

export default defineConfig({
  video: false,
  chromeWebSecurity: false,
  viewportWidth: 1366,
  viewportHeight: 768,
  experimentalStudio: false,
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
      webpackConfig: {
        resolve: {
          alias: {
            '@/*': path.resolve(__dirname, './src'),
            '~/*': path.resolve(__dirname, './src/server'),
            '#/*': path.resolve(__dirname, './src/client'),
            '&/*': path.resolve(__dirname, './src/shared'),
            '@app/*': path.resolve(__dirname, './src/app'),
          },
        },
      },
    },
  },
  e2e: {
    // setupNodeEvents(on, config) {},
    baseUrl: `${HOST}:${PORT}`,
  },
})
