const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: 'development',
    output:{
        filename:'app.bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/index.html'
        })
    ],
    module:{
        rules:[
            {
                test:/\.js$/,//va a utilizar esta regla para todos lor archivos js
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
}