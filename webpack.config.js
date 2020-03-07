const path = require("path");

module.exports = {
    entry: "./src/compare.js",
    output: {
        path: path.resolve(__dirname, "dist/playercompare"),
        filename: 'app.js' 
    },
    module: {
        rules: [{   
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }  
        }]
    }
};

