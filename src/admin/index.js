import CMS from 'netlify-cms-app'

CMS.init()

CMS.registerPreviewStyle('/static/css/prism-tomorrow.css')
CMS.registerPreviewStyle('/static/css/style.css')

// nunjucks.configure('/admin/theme')

// const BlogPreview = (props) => {
//     const data = { title: 'title dude', ...props }
//     return preview(blogTemplate, {
//         content: renderNjk(postTemplate, {
//             title: 'cool',
//             description: 'cccol pro',
//             author: 'cool dude',
//         }),
//     })
// }

// CMS.registerPreviewTemplate('blog', BlogPreview)
