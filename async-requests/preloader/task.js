const items = document.getElementById('items');
const item = document.querySelector('.item')
const img = document.getElementById('loader');



let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
    let data = xhr.response;
    let valute = data.response.Valute;

    showValute(valute);

//    console.log(valute);
}

xhr.onreadystatechange = function() {
    if(xhr.readyState ===  xhr.DONE) {
         img.classList.remove('loader_active');    
     };
 };

function showValute(jsonObj){

    const divItemCode = document.createElement('div');
    divItemCode.classList.add = 'item__code';

    const divItemValue = document.createElement('div');
    divItemValue.classList.add = 'item__value';

    const divItemCurrency = document.createElement('div');
    divItemCurrency.classList.add = 'item__currency';
    divItemCurrency.textContent = 'руб.';
    
        const allValute = Object.values(jsonObj) ;
        allValute.forEach(value => {
            
            divItemCode.textContent = value.CharCode;
            divItemValue.textContent = value.Value;

            const divAdd = `<div class="item__code">${divItemCode.textContent}</div>
            <div class="item__value">${divItemValue.textContent}</div>
            <div class="item__currency">руб.</div>`


            item.appendChild('divItemCode');
            item.appendChild('divItemValue');
            item.appendChild('divItemCurrency');
          //  item.insertAdjacentHTML('beforeend', divAdd);
           
                    

        })


   // items.appendChild('divItemCode');
   // items.appendChild('divItemValue');
   // items.appendChild('divItemCurrency');


       
    }
    





        

