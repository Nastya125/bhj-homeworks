let count = 60;
let countSecond = new Date(count * 1000).toISOString().substr(11, 8);


let interval = setInterval(() => {
    if(--count === 0){
        alert("Вы победили в конкурсе!")
        return clearInterval(interval);
    }
let elementId = document.getElementById("status");
elementId.textContent = `До окончания конкурса осталось секунд: ${new Date(count * 1000).toISOString().substr(11, 8)}`;
}, 1000 )