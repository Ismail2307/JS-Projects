

function getNumberRandom(){
    const randomNum = Math.floor(Math.random()*6)+1
 
 
    return randomNum
}

const first = document.getElementById('firstdice')
const second = document.getElementById('secondice')
const button = document.getElementById('but')
const hed = document.getElementById('hed')


button.addEventListener('click', ()=>{
    const firstnum = getNumberRandom()
    first.textContent = `First dice: ${firstnum}`
    const secondnum = getNumberRandom()
    second.textContent = `First dice: ${secondnum}`

    hed.innerText = `Total: ${firstnum+secondnum}`

});