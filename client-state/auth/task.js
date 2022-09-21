const form = document.getElementById('signin__form');

const welcome = document.getElementById('welcome');
const id = document.getElementById('user_id');


form.addEventListener('submit', (e) => {
    e.preventDefault();
   
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.onload = function() {
        if (xhr.status != 200) { 
            alert(`Ошибка`); 
          } else { 
            let data = JSON.parse(this.responseText);
            localStorage.setItem('data', data);
            
            if(data.success === false){
                alert('Неверный логин/пароль')
            } else {
                welcome.classList.add('welcome_active')
                id.innerHTML = data.user_id;
            }
          }
    }
    xhr.send(formData);
})



