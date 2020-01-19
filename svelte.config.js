const sveltePreprocess = require('svelte-preprocess')

module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ['src'],
      data: `
        @import 'styles/variables.scss';
        @import 'styles/mixins.scss';
      `
    }
  })
}
