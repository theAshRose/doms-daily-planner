let currentHour = moment().format("H");
function yolo() {
  for (x = 9; x < 18; x++) {
    if (x < currentHour) {
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
$(".saveBtn").on("click", function () {
  for (x = 9; x < 18; x++) {
    var agendaItem = [];
    agendaItem = $("#" + x).val();
    localStorage.setItem("#" + x, agendaItem);
  }
});
let populatePlanner = function () {
  for (x = 9; x < 18; x++) {
    let frisbee = localStorage.getItem("#" + x) || [];
    let target = $("#" + x)
    $(target).text(frisbee);
  }
}
populatePlanner();
$("#currentDay").text(moment().format("MMMM Do YYYY"));
