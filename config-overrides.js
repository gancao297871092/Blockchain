const { override, addWebpackAlias, fixBabelImports } = require("customize-cra")

const path = require("path")

module.exports = override(
    // fixBabelImports('import', {
    //     libraryName: 'antd-mobile',
    //     style: 'css',
    // }),
    //引入插件写相关配置
    addWebpackAlias({
        '@': path.join(__dirname, "src/")
    })
)
