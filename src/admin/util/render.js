import nunjucks from 'nunjucks'

export default function renderNjk(templateStr, data) {
    return nunjucks.renderString(
        `${templateStr.replace(/---(.|\n)*---/, '')}`,
        {
            ...data,
        }
    )
}
