document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            name: 'Tableau-Dashboard',
            thumbnail: 'https://raw.githubusercontent.com/imvishal09/Tableau-Dashboard/main/OVERVIEW.png'
        },
        {
            name: 'image-classification',
            thumbnail: 'https://img.freepik.com/premium-photo/image-file-icon-3d-render-illustration_567294-3212.jpg?size=626&ext=jpg&ga=GA1.1.261165820.1697800352&semt=ais'
        },
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
