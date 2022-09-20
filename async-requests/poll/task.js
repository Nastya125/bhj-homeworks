const title = document.getElementById('poll__title')
const answers = document.getElementById('poll__answers') 


let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
    let question = xhr.response.data.title;
    title.textContent = question;

    let arrAnswers = xhr.response.data.answers;

    for(let answer of arrAnswers){
        const button = `<button class="poll__answer">${answer}</button>`
        answers.insertAdjacentHTML('beforeend', button);  
    }
}