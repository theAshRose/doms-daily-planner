let saveButton = $(".saveBtn");
let signUpHour = $(".hour");
let currentHour = $(moment().format("H"));


function yolo() {
     for (x = 9; x < 18; x++) {
      if (x < 14) {
        $("#" + x).addClass("past");
      }
      if (x == 14) {
        $("#" + x).addClass("present");
      }
      if (x > 14) {
        $("#" + x).addClass("future");
      }
     }
  };
yolo();



 

   
$("#currentDay").text(moment().format("MM DD YYYY, h a"));


// TIMEBLOCKS LISTED


// COLOR CODED PAST-PRESENT-FUTURE TIMEBLOCKS


// CLICK TIMEBLOCK TO ENTER EVENT


// EVENTS GET SAVED IN LOCAL STORAGE


// SAVED EVENTS PERSIST WITH PAGE REFRESH

//USE DATE LIBRARY FOR DATE AND TIME
