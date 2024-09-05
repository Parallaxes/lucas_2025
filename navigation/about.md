---
layout: page
title: About
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
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our data rows for the Living in the World grid
    // var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [
        {"flag": "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png", "greeting": "Programming Language", "description": "C++ - 4 years"},
        {"flag": "https://www.competitionsciences.org/wp-content/uploads/2017/04/CYBERPATRIOT_Defense-Competition_Blue.png", "greeting": "Infosec Competition", "description": "CyberPatriot - 2 years"},
        {"flag": "https://cdn.worldvectorlogo.com/logos/kali-1.svg", "greeting": "Linux distro", "description": "Kali Linux - 3 years"},
        {"flag": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Seal_of_the_United_States_Intelligence_Community.svg", "greeting": "Open Source Intelligence", "description": "OSINT Enthusiast - 4 years"},
        {"flag": "https://media.discordapp.net/attachments/764275236022779944/1281083203444281345/image-removebg-preview_1.png?ex=66da6d35&is=66d91bb5&hm=f0e397692e7b89cd1e8cf94e3530fe8691d7398bb54eb791cb11d9c77c120bec&=&format=webp&quality=lossless&width=350&height=350", "greeting": "Read the fantastic manual!", "description": "RTFM! - 4 years"}
    ]; 
    
    // Function to create a grid item
    function createGridItem(location) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements

        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = location.flag; // use the full URL for the flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

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

    // 3. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        var gridItem = createGridItem(location);
        container.appendChild(gridItem);
    }
</script>
