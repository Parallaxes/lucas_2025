---
layout: page
title: JS Typing Speed
permalink: /type/
---

{% include nav/home.html %}

<style>
    #typing-app {
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 20px auto;
        text-align: center;
    }

    #user-input {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        margin-top: 10px;
    }

    #start-btn {
        margin-top: 10px;
        padding: 10px 20px;
        font-size: 16px;
    }

    #wpm-result, #accuracy-result {
        margin-top: 20px;
        font-size: 18px;
    }

    .correct {
        background-color: lightgreen;
    }

    .incorrect {
        background-color: lightcoral;
    }
</style>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const promptTextElement = document.getElementById("prompt-text");
        const userInput = document.getElementById("user-input");
        const startBtn = document.getElementById("start-btn");
        const wpmDisplay = document.getElementById("wpm");
        const accuracyDisplay = document.getElementById("accuracy");
        
        let startTime, endTime, timerRunning = false;
        let promptText = promptTextElement.textContent;

        const texts = [
            "The quick brown fox jumps over the lazy dog.",
            "Give a man a gun and he can rob a bank, but give a man a bank, and he can rob the world... I like it for the same reason many people hate it, because to me it means that power belongs to the people that take it.",
            "It's one thing to question your mind; it's another to question your eyes and ears. But then again, isn't it all the same, our senses just mediocre inputs for our brain? Sure, we rely on them, trust they accurately portray the real world around us, but what if the haunting truth is they can't?",
            "The world is a dangerous place, Elliott, not because of those who do evil, but because of those who look on and do nothing.",
            "A bug is never just a mistake. It represents something bigger. An error of thinking that makes you who you are.",
            "I never want to be right about my hacks, but people always find a way to disappoint.",
            "Hello friend. Hello friend? That's lame. Maybe I should give you a name. But that's a slippery slope, you're only in my head, we have to remember that. Shit, this actually happened, I'm talking to an imaginary person. What I'm about to tell you is top secret. A conspiracy bigger than all of us. There's a powerful group of people out there that are secretly running the world. I'm talking about the guys no one knows about, the ones that are invisible. The top 1% of the top 1%, the guys that play God without permission. And now I think they're following me.",
            "Though she's a psychologist she's really bad at reading people but I'm good at reading people. My secret? I look for the worst in them.",
            "People are all just people, right? When it gets down to it, everyone's the same. They love something. They want something. They fear something. Specifics help, but specifics don't change the way that everyone is vulnerable. It just changes the way that we access those vulnerabilities."
        ];

        function getRandomText() {
            return texts[Math.floor(Math.random() * texts.length)];
        }

        function updatePromptText() {
            promptText = getRandomText();
            promptTextElement.textContent = promptText;
        }

        startBtn.addEventListener("click", function() {
            if (!timerRunning) {
                updatePromptText();
                userInput.disabled = false;
                userInput.value = '';
                userInput.classList.remove("correct", "incorrect");
                userInput.focus();
                startTime = new Date();
                timerRunning = true;
                startBtn.textContent = "Stop";
            } else {
                endTime = new Date();
                const timeDiff = (endTime - startTime) / 1000 / 60; // time difference in minutes
                const wordCount = userInput.value.split(/\s+/).filter(word => word.length > 0).length;
                const wpm = Math.round(wordCount / timeDiff);
                
                wpmDisplay.textContent = wpm;
                timerRunning = false;
                startBtn.textContent = "Start";
                userInput.disabled = true;
            }
        });

        userInput.addEventListener("input", function() {
            const inputText = userInput.value;
            let correctChars = 0;
            let coloredText = '';

            for (let i = 0; i < promptText.length; i++) {
                if (i < inputText.length) {
                    if (inputText[i] === promptText[i]) {
                        correctChars++;
                        coloredText += `<span class="correct">${promptText[i]}</span>`;
                    } else {
                        coloredText += `<span class="incorrect">${promptText[i]}</span>`;
                    }
                } else {
                    coloredText += promptText[i];
                }
            }

            promptTextElement.innerHTML = coloredText;

            const accuracy = Math.round((correctChars / promptText.length) * 100);
            accuracyDisplay.textContent = accuracy + "%";

            if (inputText.length === promptText.length) {
                endTime = new Date();
                const timeDiff = (endTime - startTime) / 1000 / 60; // time difference in minutes
                const wordCount = inputText.split(/\s+/).filter(word => word.length > 0).length;
                const wpm = Math.round(wordCount / timeDiff);
                
                wpmDisplay.textContent = wpm;
                timerRunning = false;
                startBtn.textContent = "Start";
                userInput.disabled = true;
            }
        });
    });
</script>

<div id="typing-app">
  <h2>Typing Test</h2>
  <p id="prompt-text">The quick brown fox jumps over the lazy dog.</p>
  <textarea id="user-input" rows="5" cols="50" placeholder="Start typing here..." disabled></textarea>
  <br>
  <button id="start-btn">Start</button>
  <p id="wpm-result">WPM: <span id="wpm">0</span></p>
  <p id="accuracy-result">Accuracy: <span id="accuracy">0%</span></p>
</div>

