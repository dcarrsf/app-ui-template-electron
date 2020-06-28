const { spawn } = require('child_process');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    profile: false,
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: [/node_modules/, /build/, /lib/],
                options: {
                    fix: true,
                    emitError: true,
                    failOnError: false,
                    emitWarning: true,
                    cache: true
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    devServer: {
        historyApiFallback: true,
        compress: true,
        contentBase: path.resolve(__dirname, '../', 'build'),
        port: 8888,
        host: '0.0.0.0',
        hot: true,
        stats: {
            colors: true,
            chunks: false,
            children: false
        },
        //https://medium.com/javascript-in-plain-english/how-to-create-your-first-app-with-electron-and-react-73243c87b622
        before() {
            spawn('electron', ['.'], { shell: true, env: process.env, stdio: 'inherit' })
                .on('close', code => process.exit(0))
                .on('error', spawnError => console.error(spawnError));
        }
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
};
