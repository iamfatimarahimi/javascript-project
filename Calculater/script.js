const input = document.querySelector('input');
const button = document.querySelectorAll('button');
button.addEventListener('click',()=>{
    input.innerHTML = button.values;
})