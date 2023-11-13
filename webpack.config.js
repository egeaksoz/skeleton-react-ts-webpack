const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
    {
        entry: "./src/index.tsx",
        mode: "development",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js",
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
            }),
        ],
        resolve: {
            extensions: ['.js', '.ts', '.tsx', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [ 
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript',
                            ],
                        },
                    },
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: ['sass-loader', 'css-loader']
                },
                {
                    test: /\.(png|svg)$/i,
                    type: "asset/",
                  },                
            ]
        }
    }
]