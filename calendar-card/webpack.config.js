const  HtmlWebpackPlugin  =  require('html-webpack-plugin');
const  ModuleFederationPlugin  =  require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    // other webpack config
    plugins: [
        new  HtmlWebpackPlugin({ template: "./public/index.html" }),
        new  ModuleFederationPlugin({
            name: "calendar_card",
            filename: "remoteEntry.js",
            exposes: {
                "./CalendarCard": "./src/CalendarCard"
            },
            shared: [ "react", "react-dom" ]
        })
    ]
}