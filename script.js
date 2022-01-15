//current date and time
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


//input into local storage
$('.btn').on('click', function(event){
    event.preventDefault();
    var toDo = $('.form-control');
    console.log($('.form-control')[0].value);
    for (var i = 0; i < toDo.length; i++) {
        var dataStorage = 'hour' + i
        console.log(dataStorage);
        var currentData = toDo[i].value;
        console.log(currentData);
        localStorage.setItem(dataStorage, currentData);
    }
})

//retrieve from local storage
function retrievedUserData() {
    var taskEl = $('.form-control');
    for (var i = 0; i < taskEl.length; i++) {
        var dataStorage = 'hour' + i;
        taskEl[i].value = localStorage.getItem(dataStorage);
    }
} 
retrievedUserData();
