document.addEventListener("DOMContentLoaded", function () {

    const superEverything = document.querySelector('#super-everything');
    if (superEverything == null) {
        console.log('Body not found');
        return;
    }
    // Get save and remove inner html of body
    const articleContent = document.body.innerHTML;
    superEverything.innerHTML = '';

    
    if (articleContent == '') {
        console.log('Article content not found');
        return;
    }

    // Set header content
    fetch('../../assets/html/header.html')
        .then(response => response.text())
        .then(headerText => {
            console.log(headerText);
            superEverything.innerHTML = headerText;
            console.log(superEverything.innerHTML);

            // Set article content
            setArticleContent(articleContent)

            // Set navbar content
            const articleSuperContainer = document.querySelector('#article-super-container');
            if (articleSuperContainer == null) {
                console.log('Article super container not found');
                return;
            }
            fetch('../../assets/html/navbar.html')
                .then(response => response.text())
                .then(navBarText => {
                    articleSuperContainer.insertAdjacentHTML('afterbegin', navBarText);
                });
        });

});

function setArticleContent(articleContent) {
    console.log(document.body.innerHTML);
    const contentContainer = document.querySelector('.content');
    if (contentContainer == null) {
        console.log('Content container not found');
        return;
    } 

    contentContainer.innerHTML = articleContent;
    generateTableOfContents();
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