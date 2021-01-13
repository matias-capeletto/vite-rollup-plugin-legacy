import legacy from '@rollup/plugin-legacy'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    legacy({ './legacy.js': 'legacyLibrary' })
  ]
}
