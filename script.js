document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "Project Alpha",
            imageUrl: "https://example.com/path/to/image1.jpg",
            link: "https://example.com/project-alpha",
            description: "This project involves creating an advanced alpha algorithm."
        },
        {
            title: "Beta Exploration",
            imageUrl: "https://example.com/path/to/image2.jpg",
            link: "https://example.com/beta-exploration",
            description: "A deep dive into the beta environment exploration studies."
        },
        {
            title: "Gamma Development",
            imageUrl: "https://example.com/path/to/image3.jpg",
            link: "https://example.com/gamma-development",
            description: "Developing new solutions within the gamma sector."
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
        const description = document.createElement('p');
        description.textContent = project.description;

        article.appendChild(title);
        article.appendChild(description);
        card.appendChild(thumb);
        card.appendChild(article);

        return card;
    }
});
