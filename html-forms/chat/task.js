const redChat = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );


let answer = [
    'Добрый день! До свидания!',
    'Убирайтесь',
    'Кто тут?',
    'Мы ничего не будем вам продавать!',
    'Где ваша совесть?!',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше!',
    'Вы не купили ни одного товара, чтобы так с нами разговаривать!'
];


    redChat.addEventListener('click', () => {
    redChat.classList.add('chat-widget_active');

});


input.addEventListener('focus', (e) => {


    if(input.value === ''){

        setInterval( () => {

            const date = new Date();
            const time = date.toLocaleTimeString();

            messages.innerHTML += `
            <div class="message">
                <div class="message__time">` + time + `</div>
                <div class="message__text">` + answer[2] + `</div>
            </div>
            `;   
        
            messages.lastElementChild.scrollIntoView()

        },30000)
   
    }
    
} );



input.addEventListener('keydown', (e) => {
     const type = e.code;
     const text = input.value;
     const date = new Date();
     const time = date.toLocaleTimeString();

     if(type.includes('Enter')  && text.length > 0){


        messages.innerHTML += 
        `
        <div class="message message_client">
            <div class="message__time">` + time + `</div>
            <div class="message__text">` + text + `</div>
        </div>
        `;

    

    input.value = '';

    setTimeout( () => {

        const date = new Date();
        const time = date.toLocaleTimeString();

     
         let random = Math.floor(Math.random() * 5);
      
         messages.innerHTML += `
            <div class="message">
                <div class="message__time">` + time + `</div>
                <div class="message__text">` + answer[random] + `</div>
            </div>
            `;   

        
        messages.lastElementChild.scrollIntoView();

    }, 500);




    
}

});

