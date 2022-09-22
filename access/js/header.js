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

    if (hours >= 5 && hours < 10) {
        sessionTime = "Good morning  ☀️"
    } else if (hours >= 10 && hours < 14) {
        sessionTime = "Good noon  ☀️"
    } else if (hours >= 14 && hours < 18) {
        sessionTime = "Good afternoon  ☀️"
    } else {
        sessionTime = "Good evening  🌙️"
    }

    if (minutes >= 0 && minutes < 10) {
        minutes = `0${minutes}`
    } else if (minutes >= 10 && minutes <= 60) {
        minutes = `${minutes}`
    }

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