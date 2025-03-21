document.addEventListener("DOMContentLoaded", function () {

    const superEverything = document.querySelector('#super-everything');
    if (superEverything == null) {
        console.log('Body not found');
        return;
    }
    // Get save and remove inner html of body
    const articleContent = superEverything.innerHTML;
    superEverything.innerHTML = '';

    
    if (articleContent == '') {
        console.log('Article content not found');
        return;
    }

    // Set header content
    fetch('../../assets/html/header.html')
        .then(response => response.text())
        .then(headerText => {
            //console.log(headerText);
            superEverything.innerHTML = headerText;
            //console.log(superEverything.innerHTML);

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

                    // Set footer content
                    const footerContainer = document.querySelector('.content-text');
                    if (footerContainer == null) {
                        console.log('Footer container not found');
                        return;
                    }
                    fetch('../../assets/html/footer_buttons.html')
                        .then(response => response.text())
                        .then(footerText => {
                            footerContainer.insertAdjacentHTML('beforeend', footerText);
                            
                            setFooterContent();
                        });
                });
        });
});

function setFooterContent() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar == null) {
        console.log('Sidebar not found for footer content');
        return;
    }
    const articleTitleContainer = document.querySelector('.content-header');
    if (articleTitleContainer == null) {
        console.log('Article title container not found for footer content');
        return;
    }
    const articleTitle = articleTitleContainer.querySelector('h1');
    if (articleTitle == null) {
        console.log('Article title not found for footer content');
        return;
    }
    //console.log(articleTitle.textContent);
    
    const links = sidebar.querySelectorAll('a');
    links.forEach((link, index) => {
        if (link.textContent != articleTitle.id) {
            return;
        }
        //console.log(link.textContent);

        // Set previous article
        if (index > 0) {
            const previousLink = links[index - 1];
            const previousArticleTitle = previousLink.textContent;
            const previousArticleUrl = previousLink.href;
            const previousArticleButton = document.querySelector('#previous-button');
            if (previousArticleButton == null) {
                console.log('Previous article button not found');
                return;
            }
            previousArticleButton.href = previousArticleUrl;
            previousArticleButton.textContent = previousArticleTitle;
        } else {
            const previousArticleButton = document.querySelector('#previous-button');
            if (previousArticleButton == null) {
                console.log('Previous article button not found');
                return;
            }
            previousArticleButton.parentElement.style.display = 'none';
        }

        // Set next article
        if (index < links.length - 1) {
            const nextLink = links[index + 1];
            const nextArticleTitle = nextLink.textContent;
            const nextArticleUrl = nextLink.href;
            const nextArticleButton = document.querySelector('#next-button');
            if (nextArticleButton == null) {
                console.log('Next article button not found');
                return;
            }
            nextArticleButton.parentElement.parentElement.style.justifySelf = 'end';    
            nextArticleButton.href = nextArticleUrl;
            nextArticleButton.textContent = nextArticleTitle;
        } else {
            const nextArticleButton = document.querySelector('#next-button');
            if (nextArticleButton == null) {
                console.log('Next article button not found');
                return;
            }
            nextArticleButton.parentElement.style.display = 'none';
        }
    });
}

function setArticleContent(articleContent) {
    //console.log(document.body.innerHTML);
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

        const subHeaders = header.parentElement.parentElement.querySelectorAll("h3");
        //console.log(subHeaders);
        const sublist = document.createElement("ul");
        subHeaders.forEach((subHeader, index) => {
            // Create an ID for the header if it doesn't have one
            let subId = subHeader.textContent.trim().toLowerCase().replace(/\s+/g, "-");
            subHeader.id = subId;

            // Create a new list item with a link
            const subListItem = document.createElement("li");
            const subLink = document.createElement("a");
            subLink.href = `#${subId}`;
            subLink.textContent = subHeader.textContent;

            // Append link to list item and list item to ToC
            subListItem.appendChild(subLink);
            sublist.appendChild(subListItem);
            });

        // Append link to list item and list item to ToC
        listItem.appendChild(link);
        listItem.appendChild(sublist);
        tocList.appendChild(listItem);
    });
}

// You'll never guess what this function does
function toggleShowGrommit() {
    const grommit = document.querySelector('#grommit');
    if (grommit == null) {
        console.log('Grommit not found');
        return;
    }

    if (grommit.style.display == 'block') {
        grommit.style.display = 'none';
        console.log("Grommit is hidden");
        return;
    } else {
        grommit.style.display = 'block';
        console.log("Grommit is shown");
    }    
}