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
            "A journey of a thousand miles begins with a single step.",
            "To be or not to be, that is the question."
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

