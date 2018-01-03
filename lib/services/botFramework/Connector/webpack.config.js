module.exports = {
    entry: './lib/botConnector.js',
    output: {
      filename: './lib-es5/botframework-connector.js',
      library: 'botframework-connector',
      libraryTarget: 'amd'
    },
    resolve: {
      extensions: ['.js']
    },
    node: {
      console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
  };