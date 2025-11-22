document.addEventListener('DOMContentLoaded', function() {
    fetch('/changelog.json')
        .then(response => response.json())
        .then(data => {
            const version = data.version;
            const lastUpdated = new Date(data.last_updated);
            const year = lastUpdated.getUTCFullYear();

            const footer = document.querySelector('footer');
            if (footer) {
                footer.innerHTML = `&copy; ${year} | Version ${version}`;
            }
        })
        .catch(error => {
            console.error('Error fetching changelog:', error);
            const footer = document.querySelector('footer');
            if (footer) {
                footer.innerHTML = '&copy;';
            }
        });
});
