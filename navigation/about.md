---
layout: post
title: About Me
permalink: /about/
---

{% include nav/home.html %}

<style>
    body {
        font-family: sans-serif;
    }
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

    .achievements-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
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
        max-height: 250px;
        object-fit: cover;
        border-radius: 5px;
    }
</style>

<div class="bio-container" id="bio_container">
    <!-- bio content will be added here by JavaScript -->
</div>

<div class="achievements-container" id="achievements_container">
    <!-- Achievements content will be added here by JavaScript -->
</div>

<div class="flex-container" id="flex_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    var container = document.getElementById("flex_container");
    var bioContainer = document.getElementById("bio_container");
    var achievementsContainer = document.getElementById("achievements_container");

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

    // First, append the images from living_in_the_world
    for (const location of living_in_the_world) {
        var flexItem = createFlexItem(location);
        container.appendChild(flexItem);
    }

    // Then, create and append the achievements section
    var markdownContent = document.createElement('div');
    markdownContent.style.width = "100%"; // Ensure markdown content has the same width
    markdownContent.style.margin = "0px auto"; // Center align with auto margins and add some spacing
    markdownContent.innerHTML = `
        <h2>My Achievements</h2>
        <ul>
            <li>5th place Linux, 10th place Overall @ CyberPatriot XVII Semifinals Open (Qualified for Nationals)</li>
            <li>1st place Linux, 22nd place Overall @ CyberPatriot XVII State Round Open</li>
            <li>1st place Linux, 95th place Overall @ CyberPatriot XVII Qual Round Open</li>
            <li>4th place @ CyberPatriot XVI Semifinals MS</li>
            <li>3rd place @ CyberPatriot XVI State Round MS</li>
            <li>1st place MS Team @ SoCal Cyber Cup Final Round (3rd place overall competing against colleges)</li>
            <li>1st place MS Team @ SoCal Cyber Cup Qualifier Round (4th place overall); competed as OSINT, Password Cracking, Forensics, Network Analysis, and Reverse Engineering expert</li>
            <li>2nd place MS Team @ Space Grand Challenge</li>
            <li>Top 3% Beat Saber player</li>
        </ul>
        <break>
        <h2>My Experience</h2>
        <ul>
            <li><b>C++</b> - 5 years exp; Competed in a substantial number of Competitive Programming competitions using C++, including USACO (Bronze), CodeForces (rated 972), and Leetcode.</li>
            <li><b>Assembly</b> - 3 years exp; Competed in multiple CTF competitions as a reverse engineer decompiling and analyzing ASM code.</li>
            <li><b>C</b> - 3 years exp; Competed in multiple CTF competitions as a reverse engineer decompiling and analyzing C code.</li>
            <li><b>Python</b> - 6 years exp; Developed large number of data projects and applications, including Krayt, a tool used to convert YouTube videos to locally downloaded files.</li>
            <li><b>Bash & CMD</b> - 3 years exp; Competed in CyberPatriot to secure systems and mitigate incidents - developed system auditing scripts using Bash (Unix) and CMD (Windows).</li>
            <li><b>Java</b> - 4 years exp; developed various programs using Java w/ OOP</li>
            <li><b>JavaScript</b> - 4 years exp; developed JavaScript code during my time in CS classes.</li>
            <li><b>Rust</b> - 0.1 years exp; Just started learning Rust!</li>
            <li><b>Go, Perl, Ruby, & R</b> - 1 year exp; languages learned during competitions for reverse engineering!</li>
        </ul>
    `;

    // Append markdown content to the achievements container
    achievementsContainer.appendChild(markdownContent);

    container.appendChild(achievementsContainer);

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

<script src="https://utteranc.es/client.js"
        repo="parallaxes/lucas_2025"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>