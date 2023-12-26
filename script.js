document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "Tableau Dashboard",
            imageUrl: "https://raw.githubusercontent.com/imvishal09/Tableau-Dashboard/main/OVERVIEW.png",
            link: "https://github.com/imvishal09/Tableau-Dashboard",
            description: "US Consumer Complaints"
        },
         {
            title: "Netflix stock trend",
            imageUrl: "https://raw.githubusercontent.com/imvishal09/Netflix-Stock-Price-Trend-Prediction/main/Ouput.png",
            link: "https://github.com/imvishal09/Netflix-Stock-Price-Trend-Prediction",
            description: "Prediction of Netflix stock."
        },
         {
            title: "Image Classification",
            imageUrl:"",
            link: "https://github.com/imvishal09/image-classification",
            description: "Image classification using ML."
        }
    ];

    const container = document.querySelector('.band');

    projects.forEach(project => {
        const cardElement = createProjectCard(project);
        container.appendChild(cardElement);
    });

    function createProjectCard(project) {
        const card = document.createElement('a');
        card.className = 'card';
        card.href = project.link;
        card.target = "_blank";

        const thumb = document.createElement('div');
        thumb.className = 'thumb';
        thumb.style.backgroundImage = `url(${project.imageUrl})`;

        const article = document.createElement('article');
        const title = document.createElement('h1');
        title.textContent = project.title;
        const author = document.createElement('span');
        author.textContent = `By ${project.author}`;
        const description = document.createElement('p');
        description.textContent = project.description;

        article.appendChild(title);
        article.appendChild(description);
        article.appendChild(author);
        card.appendChild(thumb);
        card.appendChild(article);

        return card;
    }
});
