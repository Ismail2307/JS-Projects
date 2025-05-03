const paperurl = './imgs/paper.jpg'
const rockurl = './imgs/6-61708_rock-rock-paper-scissors-clipart.png'
const scissorsurl = './imgs/111-1114370_rock-paper-scissors-rock-paper-scissors-clipart.png'


const array = [paperurl, scissorsurl, rockurl]
const rock = document.getElementById('rock')
const scissors = document.getElementById('scissors')
const paper = document.getElementById('paper')
const you = document.getElementById('you')
const bot = document.getElementById('bot')
const tet = document.getElementById('tet')




function getElement(){
    const randomIndex = Math.floor(Math.random()*3);
    bot.src = array[randomIndex]

}

function getFilename(path) {
    return path.substring(path.lastIndexOf('/') + 1);
}

function check() {
    const youChoice = getFilename(you.src);
    const botChoice = getFilename(bot.src);

    if (botChoice === youChoice) {
        tet.textContent = 'Draw';
    } else if (youChoice === '111-1114370_rock-paper-scissors-rock-paper-scissors-clipart.png' && botChoice === 'paper.jpg') {
        tet.textContent = 'You Won!';
    } else if (youChoice === '6-61708_rock-rock-paper-scissors-clipart.png' && botChoice === '111-1114370_rock-paper-scissors-rock-paper-scissors-clipart.png') {
        tet.textContent = 'You Won!';
    } else if (youChoice === 'paper.jpg' && botChoice === '6-61708_rock-rock-paper-scissors-clipart.png') {
        tet.textContent = 'You Won!';
    } else {
        tet.textContent = 'You Lost :(';
    }
}


paper.addEventListener('click', ()=>{
    getElement()
    you.src= paperurl
    check()
});

scissors.addEventListener('click', ()=>{
    getElement()
    you.src = scissorsurl
    check()
});


rock.addEventListener('click', ()=>{
    getElement()
    you.src = rockurl
    check()
});