const path = require('path');

module.exports = {
 resolve:{
    extensions: ['.js', '.jsx'],


  },
  module: {  
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
                                                       
},
output: {
 filename: 'bundle.js',
 path: path.resolve(__dirname, 'dist'),    

},

};  

