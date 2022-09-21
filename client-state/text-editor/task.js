const textarea = document.getElementById('editor');
const button = document.getElementById('clear');


textarea.addEventListener('keyup', () => {
    const text = textarea.value;
    console.log(text)
    localStorage.setItem('text', text);
})

let showText = localStorage.getItem('text');
textarea.value = showText;

button.addEventListener('click', () => {
    localStorage.removeItem('text');
    textarea.value = "";
})
