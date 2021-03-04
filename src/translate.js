const { pikazI18nLang, pikazI18nTranslate } = require('pikaz-translate')

/**
 * @description: 翻译
 * @param {String} dir/需要翻译的目录或文件
 * @param {String} zh/需写入的中文json文件路径
 * @param {String} en/需写入的英文json文件路径
 * @return {type} 
 */
const translate = async (dir, zh, en, ja) => {
    await pikazI18nLang(dir, zh)
    await pikazI18nTranslate(zh, en)
}

translate('src',
    'src/i18n/zh.json',
    'src/i18n/en.json'
)