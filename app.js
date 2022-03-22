
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

var target_date = new Date(2022, 5, 18, 10, 15, 0)


// update the tag with span id "day" and "hours" and "minutes" and "seconds"
var x = setInterval(function () {

    // find the amount of "seconds" between now and target
    var t = getTimeRemaining(target_date);

    // format the string in HH:MM:SS
    var days = t.days;
    var hours = t.hours;
    var minutes = t.minutes;
    var seconds = t.seconds;
    if (days < 10) {
        days = "0" + days;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (t.total <= 0) {
        clearInterval(x);
        document.getElementById("cd-day").innerHTML = "00";
        document.getElementById("cd-hour").innerHTML = "00";
        document.getElementById("cd-minute").innerHTML = "00";
        document.getElementById("cd-second").innerHTML = "00";
    }
    else {
        document.getElementById("cd-day").innerHTML = days;
        document.getElementById("cd-hour").innerHTML = hours;
        document.getElementById("cd-minute").innerHTML = minutes;
        document.getElementById("cd-second").innerHTML = seconds;
    }
}, 1000);