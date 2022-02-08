var message = document.querySelector('.snackbar');
var btn = document.querySelector('.btn');

function showMessage(msg){
    message.innerHTML = msg;
    message.classList.add('show');

    setTimeout(function(){message.classList.remove('show')} , 1000);
}