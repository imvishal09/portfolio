const projects = [
  {
    name: 'Tableau-Dashboard',
   // image: 'https://raw.githubusercontent.com/imvishal09/Tableau-Dashboard/main/OVERVIEW.png',
    description: 'A detailed Tableau dashboard visualizing various datasets.',
    link: 'https://github.com/imvishal09/Tableau-Dashboard'
  },
  {
    name: 'image-classification',
    // Ensure this URL points to an actual image in your repository.
    image: 'https://raw.githubusercontent.com/imvishal09/your-repository/main/no-image-placeholder.png',
    description: 'A machine learning project focused on classifying images into distinct categories.',
    link: 'https://github.com/imvishal09/image-classification'
  },
  {
    name: 'Netflix-Stock-Price-Trend-Prediction',
    image: 'https://raw.githubusercontent.com/imvishal09/Netflix-Stock-Price-Trend-Prediction/main/Ouput.png',
    description: 'A data analysis project predicting Netflix stock price trends.',
    link: 'https://github.com/imvishal09/Netflix-Stock-Price-Trend-Prediction'
  }
];

const container = document.getElementById('projects-container');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'card';
  const imageElement = project.image ? `<img class="card-image" src="${project.image}" alt="${project.name} Image">` : '';
  card.innerHTML = `
    ${imageElement}
    <div class="card-content">
      <h2 class="card-title">${project.name}</h2>
      <p class="card-description">${project.description}</p>
      <a href="${project.link}" class="card-link">View Project</a>
    </div>
  `;
  container.appendChild(card);
});
