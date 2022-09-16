const field = document.getElementById('task__input');
const buttonAdd = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list')




buttonAdd.addEventListener('click', (e) => {
    e.preventDefault()
    addTask();
    console.log(field.value)
})



function addTask(){ 

    if(field.value !== ''){

        const div = document.createElement('div');
        div.classList.add = 'task';

        div.innerHTML = `<div class="task">
        <div class="task__title">
        `+ field.value + `
        </div>
        <a href="#" class="task__remove">&times;</a>
        </div> `

        taskList.appendChild(div);

        const buttonDelete = div.querySelector('.task__remove');

            buttonDelete.addEventListener('click', () => {
            
            console.log('клик на обработчик');
            taskList.removeChild(div)
        })

        field.value = '';

    }
}



