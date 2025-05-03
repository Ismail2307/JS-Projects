const clock = document.getElementById('time')

function updateClock(){
    const clock = document.getElementById('time')

    const time = new Date()
    
    let hours = String(time.getHours()).padStart(2 , '0')
    let minutes = String(time.getMinutes()).padStart(2 , '0')
    let seconds = String(time.getSeconds()).padStart(2 , '0')
    
    clock.textContent=`${hours} : ${minutes} : ${seconds}`
    
    
}


setInterval(updateClock, 1000)


const button = document.getElementById('but')
const body = document.querySelector('body')
const heading = document.querySelector('h1')


button.addEventListener('click', ()=>{
   if (body.style.backgroundColor==='white'){
        body.style.backgroundColor='black';
        heading.style.color = 'white';
        clock.style.color = 'white'
   }else{
        body.style.backgroundColor='white';
        heading.style.color = 'black';
        clock.style.color = 'black'
   }
});