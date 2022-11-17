var currentDay = $("#currentDay")
var block9El = $("#hr9")
var block10El = $("#hr10")
var block11El = $("#hr11")
var block12El = $("#hr12")
var block13El = $("#hr13")
var block14El = $("#hr14")
var block15El = $("#hr15")
var block16El = $("#hr16")
var block17El = $("#hr17")
$("#text9").val(localStorage.getItem("text9"))
$("#text10").val(localStorage.getItem("text10"))
$("#text11").val(localStorage.getItem("text11"))
$("#text12").val(localStorage.getItem("text12"))
$("#text13").val(localStorage.getItem("text13"))
$("#text14").val(localStorage.getItem("text14"))
$("#text15").val(localStorage.getItem("text15"))
$("#text16").val(localStorage.getItem("text16"))
$("#text17").val(localStorage.getItem("text17"))


$("#save9").click(function(){
    console.log("Button clicked!")
    localStorage.setItem("text9", $("#text9").val());
    console.log("saved data as", localStorage.getItem("text9"));
});
$("#save10").click(function(){
    console.log("Button clicked!")
    localStorage.setItem("text10", $("#text10").val());
});
$("#save11").click(function(){
    console.log("Button clicked!")
    localStorage.setItem("text11", $("#text11").val());
});
$("#save12").click(function(){
    console.log("Button clicked!")
    localStorage.setItem("text12", $("#text12").val());
});
$("#save13").click(function(){
    console.log("Button clicked!")
    localStorage.setItem("text13", $("#text13").val());
});
$("#save14").click(function(){
    console.log("Button clicked!")
    localStorage.setItem("text14", $("#text14").val());
});
$("#save15").click(function(){
    console.log("Button clicked!")
    localStorage.setItem("text15", $("#text15").val());
});
$("#save16").click(function(){
    console.log("Button clicked!")
    localStorage.setItem("text16", $("#text16").val());
});
$("#save17").click(function(){
    console.log("Button clicked!")
    localStorage.setItem("text17", $("#text17").val());
});

$("#currentDay").text(moment().format("MMM, Do, YYYY"))

console.log(moment().hours());

var currentHour = moment().hours();

if (currentHour<9) {
    $(".timeblock").addClass("future");
    $(".timeblock").removeClass("past");
    $(".timeblock").removeClass("present");
}
if (currentHour===9) {
    block9El.addClass("present");
    block9El.removeClass("future");
    block10El.addClass("future");
    block11El.addClass("future");
    block12El.addClass("future");
    block13El.addClass("future");
    block14El.addClass("future");
    block15El.addClass("future");
    block16El.addClass("future");
    block17El.addClass("future");
}
if (currentHour===10) {
    block9El.addClass("past");
    block9El.removeClass("present");
    block10El.addClass("present");
    block10El.removeClass("future");
    block11El.addClass("future");
    block12El.addClass("future");
    block13El.addClass("future");
    block14El.addClass("future");
    block15El.addClass("future");
    block16El.addClass("future");
    block17El.addClass("future");
}
if (currentHour===11) {
    block9El.addClass("past");
    block10El.addClass("past");
    block10El.removeClass("present");
    block11El.addClass("present");
    block11El.removeClass("future");
    block12El.addClass("future");
    block13El.addClass("future");
    block14El.addClass("future");
    block15El.addClass("future");
    block16El.addClass("future");
    block17El.addClass("future");
}
if (currentHour===12) {
    block9El.addClass("past");
    block10El.addClass("past");
    block11El.removeClass("present");
    block11El.addClass("past");
    block12El.removeClass("future");
    block12El.addClass("present");
    block13El.addClass("future");
    block14El.addClass("future");
    block15El.addClass("future");
    block16El.addClass("future");
    block17El.addClass("future");
}
if (currentHour===13) {
    block9El.addClass("past");
    block10El.addClass("past");
    block11El.addClass("past");
    block12El.removeClass("present");
    block12El.addClass("past");
    block13El.addClass("present");
    block13El.removeClass("future");
    block14El.addClass("future");
    block15El.addClass("future");
    block16El.addClass("future");
    block17El.addClass("future");
}
if (currentHour===14) {
    block9El.addClass("past");
    block10El.addClass("past");
    block11El.addClass("past");
    block12El.addClass("past");
    block13El.addClass("past");
    block13El.removeClass("present");
    block14El.addClass("present");
    block14El.removeClass("future");
    block15El.addClass("future");
    block16El.addClass("future");
    block17El.addClass("future");
}
if (currentHour===15){
    block9El.addClass("past");
    block10El.addClass("past");
    block11El.addClass("past");
    block12El.addClass("past");
    block13El.addClass("past");
    block14El.addClass("past");
    block14El.removeClass("present");
    block15El.addClass("present");
    block15El.removeClass("future");
    block16El.addClass("future");
    block17El.addClass("future");
}
if (currentHour===16) {
    block9El.addClass("past");
    block10El.addClass("past");
    block11El.addClass("past");
    block12El.addClass("past");
    block13El.addClass("past");
    block14El.addClass("past");
    block15El.addClass("past");
    block15El.removeClass("present");
    block16El.addClass("present");
    block16El.removeClass("future");
    block17El.addClass("future");
}
if (currentHour===17) {
    block9El.addClass("past");
    block10El.addClass("past");
    block11El.addClass("past");
    block12El.addClass("past");
    block13El.addClass("past");
    block14El.addClass("past");
    block15El.addClass("past");
    block16El.removeClass("present");
    block16El.addClass("past");
    block17El.removeClass("future");
    block17El.addClass("present");
}
if (currentHour>17) {
    $(".timeblock").addClass("past");
    $(".timeblock").removeClass("future");
    $(".timeblock").removeClass("present");
}