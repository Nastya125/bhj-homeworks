const title = document.getElementById('poll__title')
const answers = document.getElementById('poll__answers') 
const buttons = document.querySelectorAll('.poll__answer')


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
    const question = xhr.response.data.title;
    title.textContent = question;

    const arrAnswers = xhr.response.data.answers;



    for(let answer of arrAnswers){

        const button = document.createElement('button');
        button.classList.add = 'poll__answer';
        button.textContent = answer;
        answers.appendChild(button);

        button.addEventListener('click', () => {
            alert('Спасибо! Ваш ответ засчитан.')
        } )
    }
            

}

