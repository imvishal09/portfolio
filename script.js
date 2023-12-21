document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            name: 'Tableau-Dashboard',
            thumbnail: 'https://raw.githubusercontent.com/imvishal09/Tableau-Dashboard/main/OVERVIEW.png'
        },
        {
            name: 'image-classification',
            thumbnail: 'https://github.com/imvishal09/portfolio/blob/main/no%20preview%20image'
        {
            name: 'Netflix-Stock-Price-Trend-Prediction',
            thumbnail: 'https://raw.githubusercontent.com/imvishal09/Netflix-Stock-Price-Trend-Prediction/main/Ouput.png'
        }
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        const projectTitle = document.createElement('h2');
        projectTitle.className = 'project-title';
        projectTitle.textContent = project.name;

        const projectImage = document.createElement('img');
        // Check if thumbnail URL is provided before setting src
        if (project.thumbnail) {
            projectImage.src = project.thumbnail;
        } else {
            projectImage.alt = 'No image available';
        }

        projectDiv.appendChild(projectImage);
        projectDiv.appendChild(projectTitle);

        document.getElementById('projects').appendChild(projectDiv);
    });
});
