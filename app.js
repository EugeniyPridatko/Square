let btnOne = document.querySelector('.btn1');
let btnTwo = document.querySelector('.btn2');
let div = document.querySelectorAll('div');


btnOne.addEventListener('click', function (evt) {
    evt.preventDefault();
    for (let i = 0; i < div.length; i++) {

        div[i].classList.add('red');
    }

});

btnTwo.addEventListener('click', function (evt) {
    evt.preventDefault();
    for (let i = 0; i < div.length; i++) {

        div[i].classList.add('green');
    }
});

for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        div[i].classList.add('size');

    });
}