const head = document.getElementById('head')
const startbut = document.getElementById('startbut')
const time = document.getElementById('time')
const buttons = document.querySelectorAll('.but')

let score = 0

startbut.addEventListener('click', ()=>{
    head.textContent = 'Game Started'
    startbut.style.display = 'none'
     score = 0
    startTimer()
    game()
});

function startTimer(){
    let minute = 1
    let second = 0
    const timer = setInterval(()=>{
        if (second==0){
            if (minute==0){
                clearInterval(timer);
                endGame();
                return;
            }
            minute--;
            second = 59;
        }else{
            second--
        }

        const formattedTime = `${minute < 10 ? '0' + minute :minute}:${second < 10 ? '0' + second : second}`;
        time.textContent = formattedTime
 
    }, 1000)   
}


function endGame(){
    if (activeButton) {
        activeButton.style.backgroundColor = 'rgb(200, 193, 236)';
        activeButton.onclick = null;
    }

    head.textContent = `Game Over! Your Score :${score}`
    startbut.style.display = 'block'
}


let activeButton = null 



function game(){
    if (activeButton) {
        activeButton.style.backgroundColor = 'rgb(200, 193, 236)';
        activeButton.onclick = null;
    }


    let randombutnum = Math.floor(Math.random() * buttons.length)
    let randombut = buttons[randombutnum]
    randombut.style.backgroundColor = 'pink'
    randombut.onclick = function(){
        score++
        randombut.style.backgroundColor = 'rgb(200, 193, 236)'
        randombut.onclick = null
        game()

    };

    activeButton = randombut;
}




