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

//Function for colors to change based on time

var currentHour = moment().format("H");

var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]

var timeBlockArray = $(".form-control");
console.log(timeBlockArray);

function compareTime() {
    console.log(hoursArray[0])
    for (var i = 0; i < hoursArray.length; i++){
        console.log(timeBlockArray[i]);
    console.log(currentHour);
        if (hoursArray[i] == currentHour) {
            console.log('currentTime')
            timeBlockArray[i].setAttribute('style', 'background-color: #ff6961');
        } else if (hoursArray[i] < currentHour) {
            console.log('past')
            timeBlockArray[i].setAttribute('style', 'background-color: #d3d3d3');
    } else if (hoursArray[i] > currentHour) {
        console.log('future')
        timeBlockArray[i].setAttribute('style', 'background-color: #77dd77');
    }
}
}
compareTime();
