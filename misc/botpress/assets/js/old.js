const articleSuperContainer = document.querySelector('#article-super-container');
fetch('./assets/html/navbar.html')
    .then(response => response.text())
    .then(navBarText => {
        articleSuperContainer.insertAdjacentHTML('afterbegin', navBarText);
        const navBar = document.querySelector('.sidebar');

        const defaultArticleButton = navBar.querySelector(".nav-button");
        
        setArticle(defaultArticleButton);
    });



function clickNav(button, event) {
    event.preventDefault();
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
            generateTableOfContents();
        });
    }
}

function generateTableOfContents() {
    // Select the Table of Contents container
    const tocList = document.querySelector(".content-navigation ul");

    // Find all section headers
    const sectionHeaders = document.querySelectorAll(".section-header h1");

    sectionHeaders.forEach((header, index) => {
        // Create an ID for the header if it doesn't have one
        let id = header.textContent.trim().toLowerCase().replace(/\s+/g, "-");
        header.id = id;

        // Create a new list item with a link
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `#${id}`;
        link.textContent = header.textContent;

        // Append link to list item and list item to ToC
        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });
}