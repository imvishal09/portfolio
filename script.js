document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.github.com/users/imvishal09/repos')
        .then(response => response.json())
        .then(repos => {
            const projectsContainer = document.getElementById('projects');
            repos.forEach(repo => {
                const projectDiv = document.createElement('div');
                projectDiv.className = 'project';

                const projectTitle = document.createElement('h2');
                projectTitle.className = 'project-title';
                projectTitle.textContent = repo.name;

                const projectImage = document.createElement('img');
                // Replace the path below with the actual path to your thumbnails
                projectImage.src = `https://raw.githubusercontent.com/imvishal09/${repo.name}/master/thumbnail.png`; 

                projectDiv.appendChild(projectImage);
                projectDiv.appendChild(projectTitle);
                projectsContainer.appendChild(projectDiv);
            });
        })
        .catch(error => console.error('Error fetching repositories:', error));
});
