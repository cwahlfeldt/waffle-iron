import CMS from 'netlify-cms-app'
import React from 'react'
import nunjucks from 'nunjucks'
import removeMd from 'remove-markdown'
import blogTemplate from '../theme/blog.html'
import postTemplate from '../theme/posts.html'
import createPreview from './util/preview'
import renderNjk from './util/render'
import preview from './util/preview'

CMS.init()

CMS.registerPreviewStyle('/static/css/prism-tomorrow.css')
CMS.registerPreviewStyle('/static/css/style.css')

nunjucks.configure('/admin/theme')

const BlogPreview = (props) => {
    const data = { title: 'title dude', ...props }
    return preview(blogTemplate, {
        content: renderNjk(postTemplate, {
            title: 'cool',
            description: 'cccol pro',
            author: 'cool dude',
        }),
    })
}

CMS.registerPreviewTemplate('blog', BlogPreview)
