module.exports = {
  levels: [
    {
      layer: 'common',
      path: 'src/blocks',
      scheme: 'nested'
    },
    {
      layer: 'desktop',
      path: 'src/desktop',
      scheme: 'nested'
    },
    {
      layer: 'mobile',
      path: 'src/mobile',
      scheme: 'nested'
    },
    {
      layer: 'tablet',
      path: 'src/tablet',
      scheme: 'nested'
    }
  ],
  // remove sets to build one universal bundle for index.html
  sets: {
    desktop: 'common desktop',
    mobile: 'common mobile',
    tablet: 'common tablet',
  },
  modules: {
    'bem-tools': {
      plugins: {
        create: {
          levels: {
            'src/blocks': { default: true }
          },
          techs: ['js', 'css'],
          templates: {
            js: '.bem/templates/js.js'
          }
        }
      }
    }
  }
}
