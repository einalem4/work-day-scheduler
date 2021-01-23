

// set to current day
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

var currentTime = parseInt(moment().format("HH"));

$(document.body).ready(function () {
    $('textarea').each(function (i) {
        parseInt(this.id);
        if (this.id > currentTime) {
            $(this.id).addClass("textarea bg-danger");
        } else if (this.id < currentTime) {
            $(this.id).addClass("textarea bg-warning");
        }
        else if (this.id === currentTime) {
            $(this.id).addClass("textarea bg-success");
        }
        console.log(currentTime);
        console.log(this.id);
    })
});


