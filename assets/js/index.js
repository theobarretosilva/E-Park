function loadContent() {
    const hash = window.location.hash.substr(1);
    const contentDiv = document.getElementById('content');

    fetch(hash + '.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Page not found');
            }
            return response.text();
        })
        .then(html => {
            contentDiv.innerHTML = html;
        })
        .catch(error => {
            contentDiv.innerHTML = '<h2>Page Not Found</h2>';
        });
}

window.addEventListener('hashchange', loadContent);

loadContent();
