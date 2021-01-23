

// set to current day
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// var currentTime = parseInt(moment().format("HH",));

var currentTime = 12;

$(document.body).ready(function () {
    $('textarea').each(function (i) {
        var thisID = parseInt(this.id);
        if (thisID > currentTime) {
            $("#" + thisID).addClass("textarea bg-danger");
            console.log("DANGER", thisID);
        } else if (thisID < currentTime) {
            $("#" + thisID).addClass("textarea bg-secondary");
            console.log("SECONDARY", thisID);
        }
        else if (thisID === currentTime) {
            $("#" + thisID).addClass("textarea bg-success");
            console.log("SUCCESSS", thisID);
        }
        console.log(currentTime);
        console.log(thisID);
    })
});


