document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        // ... your project objects
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
        if (project.imageUrl) {
            thumb.style.backgroundImage = `url(${project.imageUrl})`;
        }

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
