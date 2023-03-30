export default function Base(data) {
    return /*html*/ `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{{ title }}</title>
                {% if description %}
                <meta name="description" content="{{ description }}" />
                {% endif %} {% block head %}{% endblock %}
                <link rel="stylesheet" type="text/css" href="/static/css/style.css" />
                {% if prism == true %}
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/static/css/prism-tomorrow.css"
                />
                {% endif %}
            </head>
            <body>
                <header>{% include "./partials/navbar.html" %}</header>

                <main id="content">${content}</main>

                <footer>{% include "./partials/footer.html" %}</footer>

                {% if path == "home" %}
                <script
                    type="text/javascript"
                    src="https://identity.netlify.com/v1/netlify-identity-widget.js"
                ></script>
                {% endif %}
            </body>
        </html>
    `
}
