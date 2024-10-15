---
layout: base
title: Student Home 
description: Home Page
image: /images/mario_animation.png
hide: true
---

## Home

This blog contains my journey into Coding.

### Development Environment

> Coding starts with tools, explore these tools and procedures with a click.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="https://github.com/Parallaxes/lucas_2025">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
    </a>
    <a href="https://parallaxes.github.io/lucas_2025/">
        <img src="https://img.shields.io/badge/GitHub%20Pages-327FC7?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages">
    </a>
    <a href="https://vscode.dev/">
        <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VSCode">
    </a>
</div>

<br>

### Game Progress

> Here is my progress through game coding, click to see these online

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="{{site.baseurl}}/snake" style="text-decoration: none;">
        <div style="background-color: #00FF00; color: black; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Snake Game
        </div>
    </a>
    <a href="{{site.baseurl}}/type" style="text-decoration: none;">
        <div style="background-color: #FF0000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Typing Game
        </div>
    </a>
    <a href="{{site.baseurl}}/rpg" style="text-decoration: none;">
        <div style="background-color: #FF8800; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Quantum Coast v0.0
        </div>
    </a>
    <a href="{{site.baseurl}}/rpg2" style="text-decoration: none;">
        <div style="background-color: #FFFF00; color: black; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Quantum Coast v0.1
        </div>
    </a>
</div>

<br>

### College Articulation

> Here is my preparation for college topics, click to review my blogs

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="{{site.baseurl}}/csse/javascript/fundamentals/variables" style="text-decoration: none;">
        <div style="background-color: #000000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Variables I/O
        </div>
    </a>
    <a href="{{site.baseurl}}/csse/javascript/fundamentals/data-types/" style="text-decoration: none;">
        <div style="background-color: #FF0000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Data Types
        </div>
    </a>
    <a href="{{site.baseurl}}/docs/rpg-game/" style="text-decoration: none;">
        <div style="background-color: #FF0000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            RPG Game Docs
        </div>
    </a>
    <a href="{{site.baseurl}}/game/intro/" style="text-decoration: none;">
        <div style="background-color: #FF0000; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Game Docs
        </div>
    </a>
</div>

<br>
<br>
<!-- Liquid:  statements -->

<!-- Include submenu from _includes to top of pages -->
{% include nav/home.html %}
<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %}

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->
<style>

  /*CSS style rules for the id and class of the sprite...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /*background position of sprite element
  */
  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px);
  }
</style>

<!--- Embedded executable code--->
<script>
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    }
  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

</script>

<!-- Description of the website -->

# About this site

<p style="font-size: 1.5em;">Welcome to my portfolio!</p>

<p style="font-size: 1.5em;">
Hi, I'm Lucas, a Computer Science student @ DNHS '28! Read more about me in my <a href="/lucas_2025/about/">about page</a>.
</p>

# What I'm currently working on

### Building machine learning models with PyTorch!
![PyTorch](https://miro.medium.com/v2/resize:fit:1200/1*aqNgmfyBIStLrf9k7d9cng.jpeg)

### Learning Rust!
![Rust](https://miro.medium.com/v2/resize:fit:709/0*Eqqrv9zVpH99X726.png)

### Developing scripts for CyberPatriot!
![CyberPatriot](https://mma.prnewswire.com/media/1996884/CYBERPATRIOT_Education_Program_blue_Logo.jpg?p=facebook)

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

# HTML Hacks!


<div style="border: 4px solid blue; padding: 20px;">
  <p style="border: 4px solid red; font-size: 1.5em; padding: 10px;">Warlock Class</p>
  <button style="border: 4px solid green; font-size: 1.5em; padding: 10px;">Cast Nova Bomb</button>
</div>

<br>
<br>

<div style="border: 4px solid white; padding: 20px;">
  <a style="border: 4px solid blue; font-size: 1.5em; padding: 10px; display: block; width: 25%" href="https://www.destinypedia.com/Hunter">Hunter Class</a>
  <a style="border: 4px solid blue; font-size: 1.5em; padding: 10px; display: block; width: 25%" href="https://www.destinypedia.com/Titan_(class)">Titan Class</a>
  <p style="border: 4px solid red; font-size: 1.5em; padding: 10px;">Behold, the other two classes!</p>
</div>



<script src="https://utteranc.es/client.js"
        repo="parallaxes/lucas_2025"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>