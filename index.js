let deleteButtons = document.querySelectorAll('.delete-button'); 
let cards = document.querySelectorAll('.card'); 

deleteButtons.forEach(function(button, index) {
    button.addEventListener('mouseenter', function() {
        alert("Haqiqatdan o'chirmoqchimisiz?");
    });

    button.addEventListener('mouseleave', function() {
        alert("Rasm o'chirilmadi!");
    });

    button.addEventListener('click', function() {
        cards[index].remove();
    });
});





