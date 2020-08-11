const path = require('path');

const config = {
      mode: 'development',
      // target: 'node' is ONLY used for server side
      target: 'node',
      entry: './index.js',

      output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.[chunkhash].js',
            publicPath: 'build/'
      },
      module: {
            rules: [
                  {
                        use: 'babel-loader',
                        test: /\.js$/
                  }
            ]
      },
      
}  

module.exports = config 