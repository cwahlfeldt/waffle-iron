module.exports = (title, link = '#') => /*html*/ `
    <div class="post-list-card">
        <h2 class="post-list-card__title">
            <a href="${link}" class="post-list-card__link">
                ${title}
            </a>
        </h2>
    </div>
`
