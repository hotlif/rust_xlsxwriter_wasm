import HtmlWebpackPlugin from 'html-webpack-plugin'

const config = {
    mode: 'development',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ],
        alias: {
        }
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true
    },
    experiments: {
        asyncWebAssembly: true,
    },
    plugins: [new HtmlWebpackPlugin({
        template: './config/document.ejs'
    })]
}

export default config
