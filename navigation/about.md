---
layout: page
title: About Me
permalink: /about/
---


<style>
    /* Style looks pretty compact, trace grid-container and grid-item in the code */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 150px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }
</style>

<!-- This grid_container class is for the CSS styling, the id is for JavaScript connection -->
<div class="bio-container" id="bio_container">
    <!-- bio content will be added here by JavaScript -->
</div>

<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>



<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div
    var bioContainer = document.getElementById("bio_container"); // This container connects to the bio div

    // 2. Define a JavaScript object for our data rows for the Living in the World grid
    var living_in_the_world = [
        {"flag": "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png", "greeting": "Programming Language", "description": "C++ - 4 years"},
        {"flag": "https://www.competitionsciences.org/wp-content/uploads/2017/04/CYBERPATRIOT_Defense-Competition_Blue.png", "greeting": "Cybersecurity Competition", "description": "CyberPatriot - 2 years"},
        {"flag": "https://cdn.worldvectorlogo.com/logos/kali-1.svg", "greeting": "Linux Distro", "description": "Kali Linux - 3 years"},
        {"flag": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Seal_of_the_United_States_Intelligence_Community.svg", "greeting": "Open Source Intelligence", "description": "OSINT Enthusiast - 4 years"},
        {"flag": "https://www.freewear.org/images/articles/detail/FW0688_Dise%C3%B1o.png", "greeting": "Read The Friendly Manual!", "description": "RTFM! - 4 years"}
    ];

    // 3. Define a JavaScript object for the bio section
    var bio_data = {
        "bio": "Hello! I'm Lucas, a freshman attending DNHS. You'll typically find me in cybersecurity (CyberPatriot) or CTF competitions, but in my free time I enjoy building personal projects with C++ and reverse engineering programs. I'm passionate about open source software and intelligence, and in that spirit, do all of my development through Linux.",
    };

    // List of projects
    var projects = [
        { name: 'CSSE Student Repo', url: 'https://github.com/Parallaxes/lucas_2025', description: 'The repo containing my code for the Computer Science & Software Engineering course 2024 - 2025.' },
        { name: 'XALLARAP', url: 'https://github.com/Parallaxes/XALLARAP', description: 'A hardening script for Linux distros, created for the CyberPatriot competition.' },
    ];

    // 4. Function to create grid items
    function createGridItem(location) {
        // Create a div for the grid item
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";

        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = location.flag; // extract the flag URL

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        return gridItem;
    }

    function createProjectItem(project) {
        var projectItem = document.createElement('div');
        projectItem.style.width = "80%";
        projectItem.style.border = "1px solid #ccc";
        projectItem.style.margin = "10px auto";
        projectItem.style.padding = "10px";
        projectItem.style.position = "relative";
        projectItem.innerHTML = `<h2>${project.title}</h2><p>${project.description}</p>`;
        return projectItem;
    }

    // Assuming bio_data, living_in_the_world, container, and bioContainer are defined and accessible

    // Create bio item and append to bioContainer
    var bioItem = document.createElement('div');
    bioItem.style.width = "100%"; // Ensure bio section has the same width
    bioItem.style.margin = "0 auto"; // Center align with auto margins
    bioItem.innerHTML = `<p>${bio_data.bio}</p>`;
    bioContainer.appendChild(bioItem);

    // Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        var gridItem = createGridItem(location);
        container.appendChild(gridItem);
    }

    // Add implemenetation for projects. Make sure they can extend to the full width of the screen.
    var projectContainer = document.createElement('div');
    projectContainer.style.width = "75%";
    projectContainer.style.margin = "0 auto";

    // Create and append Projects header
    var projectsHeader = document.createElement('h2');
    projectsHeader.innerText = "Projects";
    projectsHeader.style.width = "75%"; // Ensure header has the same width
    projectsHeader.style.margin = "20px auto 10px"; // Center align with auto margins and add some spacing
    projectContainer.appendChild(projectsHeader);

    for (const project of projects) {
        var projectItem = createProjectItem(project);
        projectContainer.appendChild(projectItem);
    }

    document.body.appendChild(projectContainer);
</script>