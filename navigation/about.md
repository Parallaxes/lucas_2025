---
layout: page
title: About Me
permalink: /about/
---


<style>
    /* Container for Flexbox-based layout */
    .flex-container {
        display: flex;
        justify-content: center; /* Center items horizontally */
        flex-wrap: wrap; /* Allow wrapping of items */
        gap: 25px; /* Add space between items */
        margin-top: 20px;
    }
    .flex-item {
        text-align: center;
        flex-basis: calc(25% - 20px); /* Make items take up 25% of the container width */
    }
    .flex-item img {
        width: 100%;
        height: 150px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .flex-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }
    /* Flexbox container for projects section */
    .projects-container {
        display: flex;
        flex-direction: column; /* Align items vertically */
        width: 100%; /* Ensure the projects section spans the full width */
        align-items: center; /* Center-align the project items */
        margin-top: 20px;
    }
    .project-item {
        width: 100%; /* Ensure project item spans the full width */
        max-width: 875px; /* Set a max width to avoid items being too wide */
        margin-bottom: 20px; /* Add some space between projects */
        padding: 15px;
        background-color: #333; /* Optional: Add a background color for clarity */
        border-radius: 8px;
        text-align: left; /* Align text to the left */
        color: #fff; /* Set text color */
    }
    .project-item {
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        padding: 20px;
        margin: 10px;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .project-item:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }
    .project-item h3 {
        margin-top: 0;
        text-align: left;
    }
    .projects-container h2 {
        text-align: left;
        margin-left: 0;
        width: 100%;
    }

    .footer {
        text-align: center;
        padding: 20px;
        background-color: #f1f1f1;
        border-top: 1px solid #24292e;
        margin-top: 20px;
        width: 100%;
        background-color: #121212;
    }

    .footer a {
        margin: 0 10px;
        text-decoration: none;
        background-color: #121212;
    }

    .footer img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition: transform 0.3s ease;
    }

    .footer img:hover {
        transform: scale(1.1);
    }

    .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        }

    .image-gallery img {
        max-height: 200px;
        object-fit: cover;
        border-radius: 5px;
    }
</style>

<div class="bio-container" id="bio_container">
    <!-- bio content will be added here by JavaScript -->
</div>

<div class="flex-container" id="flex_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    var container = document.getElementById("flex_container");
    var bioContainer = document.getElementById("bio_container");

    var living_in_the_world = [
        {"flag": "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png", "greeting": "Programming Language", "description": "C++ - 4 years"},
        {"flag": "https://www.competitionsciences.org/wp-content/uploads/2017/04/CYBERPATRIOT_Defense-Competition_Blue.png", "greeting": "Cybersecurity Competition", "description": "CyberPatriot - 2 years"},
        {"flag": "https://cdn.worldvectorlogo.com/logos/kali-1.svg", "greeting": "Linux Distro", "description": "Kali Linux - 3 years"},
        {"flag": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Seal_of_the_United_States_Intelligence_Community.svg", "greeting": "Open Source Intelligence", "description": "OSINT Enthusiast - 4 years"},
        // {"flag": "https://www.freewear.org/images/articles/detail/FW0688_Dise%C3%B1o.png", "greeting": "Read The Friendly Manual!", "description": "RTFM! - 4 years"}
    ];

    var bio_data = {
        "bio": "Hello! I'm Lucas, a freshman attending DNHS. You'll typically find me in cybersecurity (CyberPatriot) or CTF competitions, but in my free time I enjoy building personal projects with C++ and reverse engineering programs. I'm passionate about open source software and intelligence, and in that spirit, do all of my development through Linux.",
    };

    var projects = [
        {
            name: 'XALLARAP',
            url: 'https://github.com/Parallaxes/XALLARAP',
            description: 'A hardening script for Linux distros, created for the CyberPatriot competition. Current functioning features include hash checking, user auditing, password auditing, logging, and kernel hardening.',
            images: ['{{site.baseurl}}/images/about/xallarapTitle.png', ]
        },
        {
            name: 'SPOJ Solutions',
            url: 'https://github.com/Parallaxes/SPOJ',
            description: 'A general collection of my Sphere Online Judge (SPOJ) solutions. WIP',
            images: ['{{site.baseurl}}/images/about/SPOJ.png']
        },
        {
            name: 'CSSE Student Repo',
            url: 'https://github.com/Parallaxes/lucas_2025',
            description: 'Repository containing my student code portfolio for the Computer Science & Software Engineering course 2024 - 2025.',
            images: ['https://avatars.githubusercontent.com/u/66652504?s=200&v=4']
        },
        
    ];

    function createFlexItem(location) {
        var flexItem = document.createElement("div");
        flexItem.className = "flex-item";

        var img = document.createElement("img");
        img.src = location.flag;

        var description = document.createElement("p");
        description.textContent = location.description;

        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;

        flexItem.appendChild(img);
        flexItem.appendChild(description);
        flexItem.appendChild(greeting);

        return flexItem;
    }

    var bioItem = document.createElement('div');
    bioItem.style.width = "100%";
    bioItem.style.margin = "0 auto";
    bioItem.innerHTML = `<p>${bio_data.bio}</p>`;
    bioContainer.appendChild(bioItem);

    for (const location of living_in_the_world) {
        var flexItem = createFlexItem(location);
        container.appendChild(flexItem);
    }

    var projectsContainer = document.createElement('div');
    projectsContainer.className = "projects-container";
    projectsContainer.innerHTML = "<h2>Projects</h2>";

    for (const project of projects) {
        var projectItem = document.createElement('div');
        projectItem.className = "project-item";
        projectItem.innerHTML = `
            <a href="${project.url}" target="_blank" style="text-decoration: none; color: inherit;">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="image-gallery">
                    ${project.images.map(image => `<img src="${image}" alt="${project.name}" class="gallery-image">`).join('')}
                </div>
            </a>
        `;
        projectsContainer.appendChild(projectItem);
    }

    container.appendChild(projectsContainer);

    // Create footer section
    var footer = document.createElement('div');
    footer.className = "footer";
    footer.innerHTML = `
        <a href="https://github.com/Parallaxes" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub">
        </a>
    `;

    container.appendChild(footer);
</script>