const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

  mode: 'development', //modo desarrollo 

  entry: {
    main : './src/js/index.js',
    admin: './src/js/admin.js',
    panel_clientes: './src/js/panel_clientes.js'
  },

  output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
  /*
  output: {
    path: path.resolve(__dirname, 'dist'), //Dist es la carpeta donde se generara el archivo bundle.js
    filename: 'bundle.js' //nombre del archivo de salida
  },
  */
  //entry: './src/js/index.js', //nombre del archivo de origen,

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      
    ],
  },
  
  devServer: {
      open: true
  },

  plugins: [
                new CleanWebpackPlugin(), 

                new HtmlWebpackPlugin({
                  template: 'src/index.html',
                  filename: 'index.html',
                  chunks: ['main'],
                }),
                
                new HtmlWebpackPlugin({
                  template: 'src/admin.html',
                  filename: 'admin.html',
                  chunks: ['admin']
                }),

                new HtmlWebpackPlugin({
                  template: 'src/panel_clientes.html',
                  filename: 'panel_clientes.html',
                  chunks: ['panel_clientes']
                }),

                new CopyPlugin([
                  { from: './src/images', to: 'images' },
                  { from: './src/css', to: 'css' },
                ]),
  ]
};