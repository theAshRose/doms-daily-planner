let currentHour = moment().format("H"); //keeping track of hour in military time
function yolo() { //this function measures the current text block against current hour
  for (x = 9; x < 18; x++) { //we use military time numbers, so all we have to do is
    if (x < currentHour) {    //measure them against the hour with moment.js
      $("#" + x).addClass("past");
    }
    if (x == currentHour) {
      $("#" + x).addClass("present");
    }
    if (x > currentHour) {
      $("#" + x).addClass("future");
    }
  }
};
yolo();
$(".saveBtn").on("click", function() { //simply selecting all buttons through array, measuring them like we did above, then saving them to a key that matches their ID
  for (x = 9; x < 18; x++) {
    var agendaItem = [];
    agendaItem = $("#" + x).val();
    localStorage.setItem("#" + x, agendaItem);
  }
});
let populatePlanner = function () { //this pulls the data by key and populates the info to the # matching the key :)
  for (x = 9; x < 18; x++) {
    let frisbee = localStorage.getItem("#" + x) || [];
    let target = $("#" + x)
    $(target).text(frisbee);
  }
}
populatePlanner(); //this makes sure our panner is up to date, the function above
$("#currentDay").text(moment().format("MMMM Do YYYY")); //displays current day

// console.log(($(event.target).parent().siblings(1).val('' + x)));
// if (($(this).siblings().eq(2).attr("id")) == $("#" + x)) {
  