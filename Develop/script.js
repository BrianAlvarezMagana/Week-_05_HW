// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add code to display the current date in the header of the page.
function currentTime () {
  // pool of variables for getting date and time displayed
  let date = new Date();
  let month = date.getMonth();
  let dd = date.getDate();
  let year = date.getFullYear();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let session = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
  
  let currentDate = month + "/" + dd + "/" + year;
  let time = hh + ":" + mm + " " + session;
  document.getElementById("clock").innerText = time;
  document.getElementById("date").innerText = currentDate;
};

currentTime();











const saveBtn = document.getElementsByClassName('saveBtn');

document.getElementById('hour-11').addEventListener("click", function() {
console.log('Ello') 
});


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.