let saveButton = $(".saveBtn");
let signUpHour = $(".hour");
let currentHour = moment().format("H");
let textInputClass = $("textarea");
console.log(currentHour);
console.log($("#9").val());


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



saveButton.on("click", function(){
    for (x = 9; x < 18; x++){
      var agendaItem = [];
      agendaItem = $("#" + x).val();
      // .val()
      // .trim()
      localStorage.setItem("#" + x, JSON.stringify(agendaItem));

      console.log(agendaItem)
      
    }
 });

 let populatePlanner = function(event){
       for (x = 9; x < 18; x++){
     let frisbee = localStorage.getItem("#" + x) || [];
     let target = $("#" + x)
     $(target).text(frisbee);
 }
 }

 populatePlanner();
 
// let displayTime = function () {
//     let currentDay = moment().format("[TODAY IS], dddd MMMM do YYYY:h:mm:ss a")
//     $("#today").text(currentDay)
// }
// setInterval(displayTime, 1000);
   
$("#currentDay").text(moment().format("MM DD YYYY"));


// TIMEBLOCKS LISTED


// COLOR CODED PAST-PRESENT-FUTURE TIMEBLOCKS


// CLICK TIMEBLOCK TO ENTER EVENT


// EVENTS GET SAVED IN LOCAL STORAGE


// SAVED EVENTS PERSIST WITH PAGE REFRESH

//USE DATE LIBRARY FOR DATE AND TIME
