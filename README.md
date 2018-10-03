# Webpack-config

a) Instalacja Node.js

1: npm init  // inicjalizacja NPMa w projekcie
3: Add gitignore file
4: npm install webpack webpack-cli --save-dev  //Instalacja Webpacka oraz webpacka-cli (ang. Command Line Interface)
5: 

// Wersja południowa: dodać skrypt w packade.json: 

"scripts": {
    "start": "webpack ./app.js --output app.bundle.js"
}

// Wersja pro- wykorzystanie pliku konfiguracyjnego Webpacka

a) Stworzenie pliku: webpack.config.js
utworzenie struktury katalogów np: src -dla ver roboczej, build- dla końcowej.

b) dodanie kodu w webpack.config.js 

const path = require('path');

//webpack.config.js
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    }
};

c) dodanie do jsona skryptu uruchamiajacego konfig:

"scripts": {
    "start": "webpack"
},

d) Mozna uruchomic skrypt w konsoli za pomocą: npm start
i sprawdzic za pomocą: node build/app.bundle.js czy śmiga
