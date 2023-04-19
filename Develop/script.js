
$(document).ready(function() {
  function currentTime () {
    // pool of variables for getting date and time displayed
    let now = dayjs();
    //format date and time using dayjs 
    let date = now.format("dddd, MMMM D");
    let time = now.format("h:mm:ss A")

    // display clock and date
    document.getElementById("clock").innerText = time;
    document.getElementById("date").innerText = date;
  }

  function updateTime() {
    currentTime();
    updateTimeBlocks();
  }

  updateTime();

  setInterval(updateTime, 1000);

  function updateTimeBlocks() {
    let currentTime = dayjs().hour();
    //grab all elements w/ row classes and run this function to them
    $(".row").each(function () {
      let hour = parseInt($(this).attr("id"));
      // add id to row and based on that determine if Past,Present, or Future.
      if (hour < currentTime) {
        $(this).addClass("past");
      } else if (hour === currentTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  // Save button functions and loading
  let saveBtn = document.querySelectorAll('.saveBtn');

  // Looks for what button was pressed and saves it to the corresponding time block id
  saveBtn.forEach(button => {
    button.addEventListener('click', function() {
      // looks for closest parent w/ time-block class and gets its id
      const hourId = this.closest('.time-block').id;

      // gets value of what was input by the user and saves to local storage 
      const description = this.previousElementSibling.value;
      localStorage.setItem(hourId, description);
    });
  });

  // Load saved text from local storage
  $(".description").each(function () {
    let eventId = $(this).parent().attr("id");
    let savedEvent = localStorage.getItem(eventId);
    if (savedEvent !== null) {
      $(this).val(savedEvent);
    }
  });
});



  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.!DONE!

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage? !DONE!
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? !!!!!!! WORKING !!!!!
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this? !DONE!
  //
  // TODO: Add code to display the current date in the header of the page. !DONE!