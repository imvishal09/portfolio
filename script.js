const projects = [
    {
        title: "Tableau Dashboard",
        imageUrl: "https://github.com/imvishal09/Tableau-Dashboard/blob/main/OVERVIEW.png",
        link: "https://github.com/imvishal09/Tableau-Dashboard",
        description: "This is the US Consumer Finance Complaints Dashboard"
    },
    {
        title: "Netflix Stock Trend",
        imageUrl: "https://github.com/imvishal09/Netflix-Stock-Price-Trend-Prediction/blob/main/Ouput.png",
        link: "https://github.com/imvishal09/Netflix-Stock-Price-Trend-Prediction",
        description: "This is trend prediction for the netflix stock."
    },
    {
        title: "Image Classification",
        imageUrl: "",
        link: "https://github.com/imvishal09/image-classification",
        description: "Recognises the object using ML"
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
        card.target = "_blank"; // Opens link in a new tab

        const thumb = document.createElement('div');
        thumb.className = 'thumb';
        thumb.style.backgroundImage = `url(${project.imageUrl})`;

        const article = document.createElement('article');
        const title = document.createElement('h1');
        title.textContent = project.title;
        const author = document.createElement('span');
        author.textContent = project.author;

        article.appendChild(title);
        article.appendChild(author);
        card.appendChild(thumb);
        card.appendChild(article);

        return card;
    }
});
