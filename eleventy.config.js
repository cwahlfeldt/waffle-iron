module.exports = (config) => {
    config.addPassthroughCopy({
        './src/admin': './admin/',
    })

    return {
        dir: {
            includes: 'theme',
            input: 'src',
            output: 'public',
        },
    }
}
