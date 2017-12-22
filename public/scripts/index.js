//INDEX
var accountButton = document.getElementById('hasAccount');
var connect = document.getElementById('connection');
var accountDiv = document.getElementById('accountDiv');

/*
accountButton.addEventListener('click', function (e) {
    e.preventDefault();
    connect.classList.add('invisible');
    accountDiv.classList.remove('invisible');
});
*/



//CONNECT
$('.inputConnect').on('change', function () {
    if( ($('#pseudo').val() == '' && $('#password').val() == " ") ){
        $('#connectButton').addClass('disabled');

}else {
        $('#connectButton').removeClass('disabled');
    }
});

$('#numeroButton').on('click', function () {
    console.log('allo');
    connect.classList.add('invisible');
    accountDiv.classList.remove('invisible');
});