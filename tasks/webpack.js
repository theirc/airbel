import path from 'path'
import webpack from 'webpack'
import process from 'process'

const isProduction = (process.env.NODE_ENV === 'production')

let config = {
  mode: 'production',
  // I would recommend using different config variables
  // depending on the eviroment.
  // The package 'webpack-merge' can help with that.
  // This tenary setup is just for simplicity sake.
  entry: isProduction ? {
    main: './_scripts/index.js'
  } : {
      main: [
        './_scripts/index.js',
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client'
      ]
    },
  output: {
    filename: './js/main.js',
    path: path.resolve(__dirname, '../src')

  },
  context: path.resolve(__dirname, '../src'),
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  plugins: isProduction ? [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ] : [
      new webpack.HotModuleReplacementPlugin()
    ]
}


function buildScripts() {

  return new Promise(resolve => webpack(config, (err, stats) => {

    if (err) console.log('Webpack', err)

    console.log(stats.toString({ /* stats options */ }))

    resolve()
  }))
}

module.exports = { config, buildScripts }