const genbutton = document.getElementById('but1')
const guessbutton = document.getElementById('butg')
const input = document.getElementById('input')
const hint = document.getElementById('hint')
const statusik = document.getElementById('status')


let randomnum = 0

genbutton.addEventListener('click',()=>{
     randomnum = Math.floor(Math.random()*1001);
    statusik.textContent='Random number generated (from 0 to 1000)'
    console.log(randomnum);
    
});

let inp = parseInt(input.value)

guessbutton.addEventListener('click', ()=>{

    let inp = parseInt(input.value)
    if (inp===randomnum){
        hint.textContent='You guessed the number!'
    }else if(inp>randomnum){
        hint.textContent='Lower'
    }else if(inp<randomnum){
        hint.textContent='Higher'
    }else{
        hint.textContent='Invalid'
    }

}); 