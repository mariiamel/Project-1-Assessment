// console.log('heyy');
let buttonPlus = document.querySelector('.plus');
let buttonMinus = document.querySelector('.minus');
let resultInput = document.querySelector('.resultInput');
let inputValue = document.querySelector('.mainInput');
let result = 0;

//initial view in browser
initialize = () => {
    resultInput.innerText = '0';
    inputValue.innerText = '1';
}

/* Event Listeners */
buttonPlus.addEventListener('click', function(){
    result = inputValue.value + 1;
    resultInput.appendChild(result);
    resultInput.innerText = result;
})

buttonMinus.addEventListener('click', function(){
    result = inputValue.value - 1;
    resultInput.appendChild(result);
    resultInput.innerText = result;
})

document.addEventListener('DOMContentLoaded', initialize)
