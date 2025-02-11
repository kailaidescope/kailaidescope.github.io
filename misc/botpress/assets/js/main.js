const articleSuperContainer = document.querySelector('#article-super-container');
fetch('./assets/html/navbar.html')
    .then(response => response.text())
    .then(navBarText => {
        articleSuperContainer.insertAdjacentHTML('afterbegin', navBarText);
        const navBar = document.querySelector('.sidebar');

        const defaultArticleButton = navBar.querySelector(".nav-button");
        
        setArticle(defaultArticleButton);
    });



function clickNav(button) {
    setArticle(button);
}

function setArticle(articleButton) {
    let articleHref = '';
    if (articleButton.hasAttribute('href')) {
        articleHref = articleButton.getAttribute('href');
    }
    
    const contentContainer = document.querySelector('.content');
    if (articleHref == '') {
        contentContainer.innerHTML = '<h1>Error</h1><p>Article not found</p>';
        return;
    } else {
        fetch(articleHref).then(response => {
            if (response.status == 200) {
                return response.text()
            } else {
                return '<h1>Error</h1><p>Article not found</p>';
            }
        }).then(articleText => {
            contentContainer.innerHTML = articleText;
        });
    }
}