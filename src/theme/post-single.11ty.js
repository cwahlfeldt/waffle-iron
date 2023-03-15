exports.data = { layout: 'html' }
exports.render = (data) => /*html*/ `
    <div>
        <h1>${data.title}</h1>

        <div>
            ${data.content}
        </div>
    </div>
`
