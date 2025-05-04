const input  = document.querySelector('input')
const button = document.getElementById('input-button')
const list = document.getElementById('list')


button.addEventListener('click',()=>{
    if (input.value.length != 0 ){
        list.innerHTML += `<li>${input.value} <button>✅</button> <button>❌</button></li>`
        input.value = ''
    }else{
        alert('Please enter a task!')
    }
});

list.addEventListener('click',(e)=>{
    if (e.target.textContent === '✅'){
        e.target.parentElement.style.textDecoration = 'line-through'
    }else if(e.target.textContent === '❌'){
        e.target.parentElement.remove()
    }
});

