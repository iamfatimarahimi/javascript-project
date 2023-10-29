const copyBtn = document.querySelector('button');
const textarea = document.querySelector('textarea');

copyBtn.addEventListener('click', () =>{
    textarea.select()
})