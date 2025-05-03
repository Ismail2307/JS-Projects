const wordBank = [
    "apple", "car", "elephant", "flower", "hat", "moon", "notebook", "penguin", "queen", "tree",
    "run", "jump", "swim", "write", "fly", "cook", "drive", "read", "sleep", "laugh",
    "quick", "lazy", "bright", "dark", "happy", "sad", "loud", "quiet", "soft", "hard",
    "quickly", "lazily", "brightly", "happily", "sadly", "loudly", "softly", "rarely", "often", "silently",
    "build", "destroy", "curious", "angrily", "dream", "explode", "fast", "gently", "huge", "ice",
    "jungle", "kick", "lemon", "magic", "neatly", "open", "play", "question", "runny", "shine",
    "tight", "under", "vanish", "wave", "xenial", "yell", "zoom", "above", "below", "crash",
    "dance", "enjoy", "focus", "glide", "hope", "ignite", "jog", "kneel", "lift", "march",
    "nod", "observe", "pretend", "quarrel", "roar", "sprint", "travel", "unfold", "vanish", "wander"
];

function getRandomWords(wordList, count = 10) {
    const result = [];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        result.push(wordList[randomIndex]);
    }
    return result;
}

const wordDisplay = document.getElementById('lorem');
const textArea = document.getElementById('input-box');
const timerDisplay = document.getElementById('time');
const statusDisplay = document.getElementById('status');
const wpmDisplay = document.getElementById('wpm');
const restart = document.getElementById('restart');

let time = 0;
let intervalId = null;
let typingStarted = false;
let typingFinished = false;


document.querySelectorAll('.btnWord').forEach(btn => {
    btn.addEventListener('click', () => {
        const count = parseInt(btn.dataset.count);
        const randomWords = getRandomWords(wordBank, count);
        wordDisplay.textContent = randomWords.join(' ');
        resetTest();
    });
});

function startTimer() {
    intervalId = setInterval(() => {
        time++;
        timerDisplay.textContent = time;
    }, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
}

function resetTest() {
    textArea.value = '';
    stopTimer();
    time = 0;
    timerDisplay.textContent = '0';
    intervalId = null;
    typingStarted = false;
    typingFinished = false;
    statusDisplay.textContent = '';
    wpmDisplay.textContent = 'WPM: 0';
}


textArea.addEventListener('input', () => {
    if (!typingStarted && textArea.value.length > 0) {
        typingStarted = true;
        startTimer();
    }

    if (!typingFinished && textArea.value.trim() === wordDisplay.textContent.trim()) {
        typingFinished = true;
        stopTimer();

        const charactersTyped = textArea.value.length;
        const minutes = time / 60;
        const wpm = Math.round((charactersTyped / 5) / minutes);
        wpmDisplay.textContent = `WPM: ${wpm}`;
    } else {
        statusDisplay.textContent = 'Type...';
    }
});


restart.addEventListener('click', () => {
    wordDisplay.textContent = '';
    resetTest();
});
