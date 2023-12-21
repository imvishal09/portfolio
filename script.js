document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            name: 'Tableau-Dashboard',
            thumbnail: 'https://github.com/imvishal09/Tableau-Dashboard/blob/main/OVERVIEW.png'
        },
        {
            name: 'image-classification',
            thumbnail: 'https://raw.githubusercontent.com/imvishal09/image-classification/master/image-classification-thumbnail.png'
        },
        {
            name: 'Netflix-Stock-Price-Trend-Prediction',
            thumbnail: 'https://github.com/imvishal09/Netflix-Stock-Price-Trend-Prediction/blob/main/Ouput.png'
        }
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        const projectTitle = document.createElement('h2');
        projectTitle.className = 'project-title';
        projectTitle.textContent = project.name;

        const projectImage = document.createElement('img');
        projectImage.src = project.thumbnail;

        projectDiv.appendChild(projectImage);
        projectDiv.appendChild(projectTitle);

        document.getElementById('projects').appendChild(projectDiv);
    });
});
