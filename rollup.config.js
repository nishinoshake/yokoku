import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from 'svelte-preprocess'
import config from 'sapper/config/rollup.js'
import pkg from './package.json'

require('dotenv').config()

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const onwarn = (warning, onwarn) =>
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning)
const dedupe = importee =>
  importee === 'svelte' || importee.startsWith('svelte/')

const preprocess = sveltePreprocess({
  scss: {
    includePaths: ['src'],
    data: `
      @import 'styles/variables.scss';
      @import 'styles/mixins.scss';
    `
  },
  postcss: {
    plugins: [require('autoprefixer')]
  }
})

// read onlyのトークンなので直打ちしてしまう
// 誰かがリポジトリをフォークしたときにそのまま使えるように
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID || 'pf2aflscqgg2'
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN || 'bIyM_k06o6MUo77OtOD4g3gVhr0ZWaDt9J4kXwN_2Js'


export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.CONTENTFUL_SPACE_ID': JSON.stringify(CONTENTFUL_SPACE_ID),
        'process.env.CONTENTFUL_ACCESS_TOKEN': JSON.stringify(CONTENTFUL_ACCESS_TOKEN)
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        preprocess
      }),
      resolve({
        browser: true,
        dedupe
      }),
      commonjs(),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          runtimeHelpers: true,
          exclude: ['node_modules/@babel/**'],
          presets: [['@babel/preset-env']],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true
              }
            ]
          ]
        }),

      !dev &&
        terser({
          module: true
        })
    ],

    onwarn
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.CONTENTFUL_SPACE_ID': JSON.stringify(CONTENTFUL_SPACE_ID),
        'process.env.CONTENTFUL_ACCESS_TOKEN': JSON.stringify(CONTENTFUL_ACCESS_TOKEN)
      }),
      svelte({
        generate: 'ssr',
        dev,
        preprocess
      }),
      resolve({
        dedupe
      }),
      commonjs(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules ||
        Object.keys(process.binding('natives'))
    ),

    onwarn
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      commonjs(),
      !dev && terser()
    ],

    onwarn
  }
}
