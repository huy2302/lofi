var realTime = $('.real-time')
var hoursContent = $('.hours-content')
var sessionContent = $('.session-content')
var timeInfo = $('.time-info')

function getTime() {
    var curDate = new Date();
    var hours = curDate.getHours();
    var minutes = curDate.getMinutes();
    var timeNow = ""
    var sessionTime = ""

    if (hours >= 5 && hours < 12) {
        sessionTime = "Good morning  ☀️"
    } else if (hours >= 12 && hours < 18) {
        sessionTime = "Good afternoon  🌇"
    } else {
        sessionTime = "Good evening  🌙️"
    }

    if (minutes >= 0 && minutes < 10) {
        minutes = `0${minutes}`
    } else if (minutes >= 10 && minutes <= 60) {
        minutes = `${minutes}`
    }
    console.log(hours)
    if (hours <= 12) {
        hours < 10 ? timeNow += `0${hours}:${minutes} AM` : timeNow += `${hours}:${minutes} AM`
    } else if (hours > 12 && hours <= 24) {
        hours < 22 ? timeNow += `0${hours - 12}:${minutes} PM` : timeNow += `${hours - 12}:${minutes} PM`
    }
    hoursContent.innerHTML = timeNow
    realTime.innerHTML = timeNow
    sessionContent.innerHTML = sessionTime
}

setInterval(getTime, 1000)

function getRealTime() {
    var currentDay = new Date().getDay()
    var currentMonth = new Date().getMonth()
    var currentYear = new Date().getFullYear()
    yearName = currentYear.toString()[2] + currentYear.toString()[2]
    var dayName = ''
    var monthName = ''
    switch (currentDay) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
    }
    switch (currentMonth) {
        case 1:
            monthName = "Monday";
            break;
        case 2:
            monthName = "Tuesday";
            break;
        case 3:
            monthName = "Wednesday";
            break;
        case 4:
            monthName = "Thursday";
            break;
        case 5:
            monthName = "Friday";
            break;
        case 6:
            monthName = "Saturday";
            break;
        case 7:
            monthName = "Thursday";
            break;
        case 8:
            monthName = "Friday";
            break;
        case 9:
            monthName = "Saturday";
            break;
        case 10:
            monthName = "Thursday";
            break;
        case 11:
            monthName = "Friday";
            break;
        case 12:
            monthName = "Saturday";
            break;
    }
    timeName = `It's ${dayName}, ${monthName} ${yearName}`
    timeInfo.innerHTML = timeName

}
setInterval(getRealTime, 1000)

$('.real-time').onclick = function () {
    if ($('.realtime-content').classList.contains('realtime-active')) {
        $('.realtime-content').classList.remove('realtime-active')
    } else {
        $('.realtime-content').classList.add('realtime-active')
    }
}

dragElement(document.getElementById("realtime-content"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("realtime-content").onmousedown = dragMouseDown;
    
  

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    console.log(pos1, pos2, pos3, pos4)
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
  
}