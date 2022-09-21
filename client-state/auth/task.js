const button = document.getElementById('signin__btn');

button.addEventListener('click', ()=> {
    const form = document.getElementById('signin');
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

})
