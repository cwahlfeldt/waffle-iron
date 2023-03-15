const postListCard = require('./components/post-list-card.js')

exports.data = { layout: 'html' }
exports.render = (data) => /*html*/ `
  <div class="posts">
    ${data.collections.post
        .map(({ data, page }) => postListCard(data.title, page.url))
        .join('\n')}
  </div>
`
