const path = require('path');

//webpack.config.js
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: { //module. Jego zadanie polega na wpływaniu na moduły, które bezpośrednio ładujemy jako zależności naszej aplikacji. Przeważnie jedynym parametrem, który będzie wpływał na moduły, będzie parametr rules. 
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    }
};