const content = document.querySelector('#article-super-container');
fetch('./assets/html/navbar.html')
    .then(response => response.text())
    .then(data => {
        content.insertAdjacentHTML('afterbegin', data);
    });
