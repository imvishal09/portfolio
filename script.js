document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: " LLaMA 3.2 - 3B Brompt",
            imageUrl: "https://cdn-lfs-us-1.hf.co/repos/3d/eb/3deb85e47dd46823ff1787158a5b8df358863dfa6f41cd49a6bdad439a833093/24e4243c535fee67b3ed2e5575bd502ba20002d2c49d7c4d421d565d040af44d?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27Screenshot%2525202025-02-15%252520at%2525206.29.29%2525E2%252580%2525AFpm.png%3B+filename%3D%22Screenshot%25202025-02-15%2520at%25206.29.29%25E2%2580%25AFpm.png%22%3B&response-content-type=image%2Fpng&Expires=1739609914&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczOTYwOTkxNH19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmhmLmNvL3JlcG9zLzNkL2ViLzNkZWI4NWU0N2RkNDY4MjNmZjE3ODcxNThhNWI4ZGYzNTg4NjNkZmE2ZjQxY2Q0OWE2YmRhZDQzOWE4MzMwOTMvMjRlNDI0M2M1MzVmZWU2N2IzZWQyZTU1NzViZDUwMmJhMjAwMDJkMmM0OWQ3YzRkNDIxZDU2NWQwNDBhZjQ0ZD9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSomcmVzcG9uc2UtY29udGVudC10eXBlPSoifV19&Signature=OGK2Ij7JUAJ-TT7xmPloAF8lrBUufm-JO1wDiPEfDmgBMOW4Yg3RaIBDjkPnA-FGtbEIJ5HZqvuicmOa2Pv8Fr2DmO093Hprl9dfHxfAaCiK%7Eq3RnE3qk8G7T-cwhzpmW5O%7ERDHjes8P8oFAvrcynAI0rjLpsooYLdmPvgMjFYaWBFxlTHv6rCNFtz5-mO1yrSsTsrQpYrmAXQp7tOAdcN4P-1950gAqBYn7JHX7ybXZYH-j7viURzUbCMBvHaUO4agWxGazemzSYuvZyZCeYYFTNAH-pfs%7EV7MImpeU9H%7ENG4a1yAuiHBSlzmIjpKa%7EwfvdbbvL462weLCQo-Xahg__&Key-Pair-Id=K24J24Z295AEI9",
            link: "https://huggingface.co/imvshal09/llama-3.2-3b-Brompt",
            description: "This is a fine-tuned LLaMA 3.2 - 3B model designed to refine and enhance user prompts. It instantly makes prompts clearer, more detailed, and well-structured."
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
