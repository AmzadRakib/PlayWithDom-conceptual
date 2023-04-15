let count = 0;
const buttonPlus = document.getElementById('btn-plus');
buttonPlus.addEventListener('click', function () {
    count++;
    const counter = document.getElementById('count');
    counter.innerText = count;
})


const buttonMinus = document.getElementById('btn-minus');
buttonMinus.addEventListener('click', function () {
    count--;
    const counter = document.getElementById('count');
    counter.innerText = count;
})