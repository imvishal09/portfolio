const projects = [
  {
    name: 'Tableau-Dashboard',
    image: 'https://raw.githubusercontent.com/imvishal09/Tableau-Dashboard/main/OVERVIEW.png',
    description: 'A detailed Tableau dashboard visualizing various datasets.',
    link: 'https://github.com/imvishal09/Tableau-Dashboard',
    author: 'Vishal'
  },
  // Add more projects here
];

const container = document.getElementById('projects-container');

projects.forEach(project => {
  const item = document.createElement('div');
  item.className = 'item';
  
  const card = document.createElement('a');
  card.href = project.link;
  card.className = 'card';
  
  const thumb = document.createElement('div');
  thumb.className = 'thumb';
  thumb.style.backgroundImage = `url(${project.image})`;
  
  const article = document.createElement('article');
  
  const title = document.createElement('h1');
  title.textContent = project.name;
  
  const description = document.createElement('p');
  description.textContent = project.description;
  
  const author = document.createElement('span');
  author.textContent = project.author;
  
  article.appendChild(title);
  article.appendChild(description);
  article.appendChild(author);
  
  card.appendChild(thumb);
  card.appendChild(article);
  
  item.appendChild(card);
  
  container.appendChild(item);
});
