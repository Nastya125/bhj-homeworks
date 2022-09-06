const buttons = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');


for (let button of buttons){
    button.onclick = function() {
        
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');

        button.classList.add('font-size_active');

    if(button.classList.contains('font-size_small')) {
        book.classList.add('book_fs-small');
    } else if (button.classList.contains('font-size_big')) {
        book.classList.add('book_fs-big');
    }
    return false;

    }   


}




