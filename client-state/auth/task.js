const form = document.getElementById('signin__form');

const welcome = document.getElementById('welcome');
const id = document.getElementById('user_id');


form.addEventListener('submit', (e) => {
    e.preventDefault();
   
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.onload = function() { 
            let data = xhr.response;
            localStorage.setItem('data', data);
            console.log(data)
            
            if(data.success === false){
                alert('Неверный логин/пароль')
            } else {
                welcome.classList.add('welcome_active')
                id.innerHTML = data.user_id;
            }
          
    }
    xhr.send(formData);
})



