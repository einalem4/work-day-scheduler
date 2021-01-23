
//current day
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

//current hour
var currentTime = parseInt(moment().format("HH",));

// loop through time and set colors according to past, present, future time
$(document.body).ready(function () {
    $('textarea').each(function (i) {
        var thisID = parseInt(this.id);
        if (thisID > currentTime) {
            $("#" + thisID).addClass("textarea bg-danger");
        } else if (thisID < currentTime) {
            $("#" + thisID).addClass("textarea bg-secondary");
        }
        else if (thisID === currentTime) {
            $("#" + thisID).addClass("textarea bg-success");
        }
    })

    //get saved items to localstorage
    function savedText() {
        $("textarea").each(function () {
            var input = $(this).attr("id");
            $(this).val(localStorage.getItem(input));
        });
    };

    //save items to localstorage
    $(".saveBtn").click(function () {
        var schedule = $(this).siblings("textarea").val();
        var textLocation = $(this).siblings("textarea").attr("id");
        localStorage.setItem(textLocation, schedule);
    });

    savedText();
});

