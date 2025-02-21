document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "LLaMA 3.2 - 3B Brompt",
            imageUrl: "https://raw.githubusercontent.com/imvishal09/portfolio/refs/heads/main/Brompt%20ss.jpg",
            link: "https://huggingface.co/imvshal09/llama-3.2-3b-Brompt",
            description: "This is a fine-tuned LLaMA 3.2 - 3B model designed to refine and enhance user prompts. It instantly makes prompts clearer, more detailed, and well-structured."
        },
        {
            title: "Course Feedback System",
            imageUrl: "https://raw.githubusercontent.com/imvishal09/portfolio/refs/heads/main/NSW%20Youth%20Dashboard.jpg",
            link: "",
            description: "As part of my group capstone project, I helped build a Course Feedback System for Youth Justice NSW. This web application makes it easier to collect and review feedback from training courses. Administrators can add and manage courses, while users can browse available courses and submit feedback. The system includes useful features like QR codes for quick access and a simple dashboard to view feedback. It is designed to be easy to use, making the process smoother for both trainers and participants. This project highlights my skills in web development, database management, and creating user-friendly applications."
        },
        {
            title: "Tableau-Dashboard: US Consumer Finance Complaints",
            imageUrl: "https://raw.githubusercontent.com/imvishal09/Tableau-Dashboard/main/OVERVIEW.png",
            link: "https://github.com/imvishal09/Tableau-Dashboard",
            description: "Created a Tableau Dashboard on US Consumer Finance Complaints."
        },
        {
            title: "Visual-Analysis-of-American-Unicorn-Investment-Networks",
            imageUrl: "https://raw.githubusercontent.com/imvishal09/Visual-Analysis-of-American-Unicorn-Investment-Networks/main/Graph%20Visulaisation%201.jpg",
            link: "https://github.com/imvishal09/Visual-Analysis-of-American-Unicorn-Investment-Networks",
            description: "This project explores the relationships between American unicorn companies and their investors using a visual network analysis approach. By analyzing the connections within the investment ecosystem, the project uncovers industry patterns, potential partnerships, and key influencers."
        },
        {
            title: "Neo4j-Project",
            imageUrl: "https://raw.githubusercontent.com/imvishal09/Neo4j-Project/main/Example%202.jpg",
            link: "https://github.com/imvishal09/Neo4j-Project",
            description: "This project showcases the use of Neo4j for graph-based analysis of an airport network. It involves designing a schema, importing data and executing workloads to extract meaningful insights."
        },
        {
            title: "Netflix-Stock-Price-Trend-Prediction",
            imageUrl: "https://raw.githubusercontent.com/imvishal09/Netflix-Stock-Price-Trend-Prediction/main/Ouput.png",
            link: "https://github.com/imvishal09/Netflix-Stock-Price-Trend-Prediction",
            description: "Netflix Stock Price Prediction Using LSTM (RNN)."
        },
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
