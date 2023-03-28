import React from 'react'
import renderNjk from './render'
import baseTemplate from '../../theme/default.html'

const createPreview = (callback) => {
    return React.createElement('div', {
        dangerouslySetInnerHTML: {
            __html: callback(),
        },
    })
}

const preview = (templateStr, data) => {
    return createPreview(() => {
        const wtf = renderNjk(baseTemplate, {
            ...data,
            content: renderNjk(templateStr, { ...data }),
        })
        return wtf
    })
}

export default preview
