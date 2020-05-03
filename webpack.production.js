const gabung = require("webpack-merge");
const config = require("./webpack.config") 

module.exports = gabung(config , {
    mode:"production"
})