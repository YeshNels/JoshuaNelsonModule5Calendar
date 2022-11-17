var currentDay = $("#currentDay")

$("#currentDay").text(moment().format("MMM, Do, YYYY"))

console.log(moment().hours());

var currentHour = moment().hours();

if (currentHour<9) {
    $(".timeblock").addClass("future");
    $(".timeblock").removeClass("past");
    $(".timeblock").removeClass("present");
}
if (currentHour>17) {
    $(".timeblock").addClass("past");
    $(".timeblock").removeClass("future");
    $(".timeblock").removeClass("present");
}