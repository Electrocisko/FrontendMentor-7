const arrows = document.getElementsByClassName("arrow");
const h2 = document.querySelectorAll('h2');
const answer = document.getElementsByClassName('answer');




for (let i=0; i < arrows.length; i++){
   arrows[i].addEventListener('click', (e) => {
    h2[i].classList.toggle('active');
    answer[i].classList.toggle('hiden');
   })
}