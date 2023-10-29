const copyBtn = document.querySelector('button');
const textarea = document.querySelector('textarea');

copyBtn.addEventListener('click', () =>{
    textarea.select()
    let textValue = textarea.value;
    navigator.clipboard.writeText(textValue)
    copyBtn.innerText = "Text Copied!";
    copyBtn.style.background = '#03A9F4';

    setTimeout(()=>{
        copyBtn.innerText = "Copy";
        copyBtn.style.background = '#83E5FC';
    },1500)
})