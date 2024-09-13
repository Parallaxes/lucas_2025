---
layout: page
title: Projects
permalink: /projects/
---

{% include nav/home.html %}

<style>
    body {
        font-family: Arial, sans-serif !important;
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
        max-height: 250px;
        object-fit: cover;
        border-radius: 5px;
    }
</style>

<div id="container">
    <div class="projects-container"></div>
</div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        var container = document.getElementById("container");
        var projectsContainer = document.querySelector(".projects-container");

        var projects = [
            {
                name: 'XALLARAP',
                url: 'https://github.com/Parallaxes/XALLARAP',
                description: 'A hardening script for Linux distros, created for the CyberPatriot competition. Current features include user auditing, package auditing, kernel hardening, hash integrity checkers, and policy hardening for Ubuntu/Debian systems. CLOSED SOURCE.',
                images: ['{{site.baseurl}}/images/about/xallarapTitle.png', '{{site.baseurl}}/images/about/xallarapUsers.png', '{{site.baseurl}}/images/about/xallarapHash.png']
            },
            {
                name: 'Krayt',
                url: 'https://github.com/Parallaxes/krayt',
                description: 'Tool to convert YouTube videos to locally downloadable files. (Totally not just a wrapper for a Python library that already automates everything) Planning to rewrite the program from scratch using Rust! This is my most developed project (besides some closed source ones for CyberPatriot). Supports both Windows and Linux systems, but with some streaming issues due to video encoding -- a bug I still have yet to fix. You can, however, mitigate this by filtering streams for progressive tags (which unfortunately usually only allows 360p). Nonetheless, still a great tool with plenty of development to come!',
                media: [
                    'https://github.com/Parallaxes/krayt/raw/main/media/kraytDemo.mp4'
                ]
            },
            {
                name: 'SPOJ Solutions',
                url: 'https://github.com/Parallaxes/SPOJ',
                description: 'A general collection of my Sphere Online Judge (SPOJ) solutions.',
                images: ['https://miro.medium.com/v2/resize:fit:1400/0*XvhNyVt7B79rr81x.png', '{{site.baseurl}}/images/about/spojDemo1.png', '{{site.baseurl}}/images/about/spojDemo2.png']
            },
            {
                name: 'CSSE Student Repo',
                url: 'https://github.com/Parallaxes/lucas_2025',
                description: 'Repository containing my student code portfolio.',
                images: ['https://avatars.githubusercontent.com/u/66652504?s=200&v=4']
            }
        ];

        for (const project of projects) {
            var projectItem = document.createElement('div');
            projectItem.className = "project-item";
            projectItem.innerHTML = `
                <a href="${project.url}" target="_blank" style="text-decoration: none; color: inherit;">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <div class="image-gallery">
                        ${project.images ? project.images.map(image => `
                            <img src="${image}" alt="${project.name}" class="gallery-image">`).join('') : ''}
                        ${project.media ? project.media.map(media => {
                            if (media.endsWith('.mp4')) {
                                return `<video controls width="100%">
                                            <source src="${media}" type="video/mp4">
                                            Your browser does not support the video tag.
                                        </video>`;
                            } else {
                                return `<img src="${media}" alt="${project.name}" class="gallery-image">`;
                            }
                        }).join('') : ''}
                    </div>
                </a>
            `;
            projectsContainer.appendChild(projectItem);
        }
    });
</script>



<script src="https://utteranc.es/client.js"
        repo="parallaxes/lucas_2025"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>