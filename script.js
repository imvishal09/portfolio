document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "International Artist Feature: Malaysia",
            author: "Mary Winkler",
            imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg",
            link: "https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852",
            description: "A feature on Malaysian artists."
        },
        // Add more projects here
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
