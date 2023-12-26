const projects = [
  {
    name: 'Tableau-Dashboard',
    image: 'https://raw.githubusercontent.com/imvishal09/Tableau-Dashboard/main/OVERVIEW.png',
    description: 'A detailed Tableau dashboard visualizing various datasets.',
    link: 'https://github.com/imvishal09/Tableau-Dashboard',
    author: 'Vishal'
  },
  // ... other projects
];

const container = document.getElementById('projects-container');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'item';
  
  const cardLink = document.createElement('a');
  cardLink.href = project.link;
  cardLink.className = 'card';
  
  const thumb = document.createElement('div');
  thumb.className = 'thumb';
  thumb.style.backgroundImage = `url(${project.image})`;
  
  const article = document.createElement('article');
  
  const title = document.createElement('h1');
  title.textContent = project.name;
  
  const author = document.createElement('span');
  author.textContent = project.author;
  
  const description = document.createElement('p');
  description.textContent = project.description;
  
  article.appendChild(title);
  article.appendChild(description);
  article.appendChild(author);
  
  cardLink.appendChild(thumb);
  cardLink.appendChild(article);
  
  card.appendChild(cardLink);
  
  container.appendChild(card);
});
