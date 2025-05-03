const textarea = document.getElementById('textarea')
const result = document.getElementById('chars')


textarea.addEventListener('input',()=>{
    const chars = textarea.value.length;
    result.textContent=`Character count: ${chars}`;
});

