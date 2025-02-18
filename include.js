document.addEventListener("DOMContentLoaded", function() {
    // Chargement du header
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            const headerElement = document.querySelector('head');
            if (headerElement) {
                headerElement.innerHTML = data;
            } else {
                console.error('Element <header> not found.');
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Chargement du footer
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            const footerElement = document.querySelector('footer');
            if (footerElement) {
                footerElement.innerHTML = data;
            } else {
                console.error('Element <footer> not found.');
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});
