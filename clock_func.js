function updateClock() {
  var currentDateTime = new Date();
	var dateString = currentDateTime.toDateString();
  var timeOfDay;

  var currentHours = currentDateTime.getHours();
  if (currentHours < 12) {
    timeOfDay = "AM";
  } else {
    currentHours -= 12;
    timeOfDay = "PM";
  }

  var currentMins = currentDateTime.getMinutes();
  if (currentMins < 10) {
    currentMins = "0" + currentMins;
  }
  var currentSecs = currentDateTime.getSeconds();
  if (currentSecs < 10) {
    currentSecs = "0" + currentSecs;
  }

  var currentTimeString = dateString + ",\n " + currentHours + ":" + currentMins + ":" + currentSecs + " " + timeOfDay;

  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}

document.getElementById("clock").onload = setInterval(updateClock, 1000);

updateClock();
debug();
