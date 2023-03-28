const yaml = require('js-yaml')
const { DateTime } = require('luxon')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const htmlmin = require('html-minifier')

module.exports = function (config) {
    // Disable automatic use of your .gitignore
    config.setUseGitIgnore(false)

    // Merge data instead of overriding
    config.setDataDeepMerge(true)

    // human readable date
    config.addFilter('readableDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
            'dd LLL yyyy'
        )
    })

    // Syntax Highlighting for Code blocks
    config.addPlugin(syntaxHighlight)

    // To Support .yaml Extension in _data
    // You may remove this if you can use JSON
    config.addDataExtension('yaml', (contents) => yaml.load(contents))

    // Copy Static Files to /_Site
    config.addPassthroughCopy({
        './node_modules/prismjs/themes/prism-tomorrow.css':
            './static/css/prism-tomorrow.css',
    })

    // Copy Image Folder to /_site
    config.addPassthroughCopy('./src/static/img')
    config.addPassthroughCopy('./src/theme')

    // Copy favicon to route of /_site
    config.addPassthroughCopy('./src/favicon.ico')

    // Minify HTML
    config.addTransform('htmlmin', function (content, outputPath) {
        // Eleventy 1.0+: use this.inputPath and this.outputPath instead
        if (outputPath.endsWith('.html')) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            })
            return minified
        }

        return content
    })

    // Let Eleventy transform HTML files as nunjucks
    // So that we can use .html instead of .njk
    return {
        dir: {
            includes: 'theme',
            input: 'src',
            output: 'public',
            data: 'data',
        },
        htmlTemplateEngine: 'njk',
    }
}
