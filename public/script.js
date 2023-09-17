// Function to display current time on screen
const renderTime = () => {
    const currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var zone = (hours >= 12) ? "PM" : "AM";
    if (hours > 12) {
      hours = hours % 12;
    }
    if (minutes / 10 < 1) {
        minutes = "0" + minutes;
      }
      if (seconds / 10 < 1) {
        seconds = "0" + seconds;
      }
    document.getElementById("current-time").innerHTML = hours+":"+minutes+":"+seconds+" "+zone;
  };

// Update time every second
setInterval(renderTime, 1000);//call the function for every 1000 milli second


var alarmSound = new Audio();
alarmSound.src = "audio.mp3";
var alarmTimer;
function setAlarm() {
  document.getElementById("display").innerHTML="The alarm is Set";
  var ms = document.getElementById("alarmTime").valueAsNumber;
  var alarm = new Date(ms);
  var alarmTime = new Date(
    alarm.getUTCFullYear(),
    alarm.getUTCMonth(),
    alarm.getUTCDate(),
    alarm.getUTCHours(),
    alarm.getUTCMinutes(),
    alarm.getUTCSeconds()
  );
  var differenceInMs = alarmTime.getTime() - new Date().getTime();
  alarmTimer = setTimeout(initAlarm, differenceInMs);
  button.innerText = "Cancel Alarm";
  button.setAttribute("onclick", "cancelAlarm(this);");
}

function cancelAlarm(button) {
  clearTimeout(alarmTimer);
  button.innerText = "Set Alarm";
  button.setAttribute("onclick", "setAlarm(this);");
  document.getElementById("display").innerHTML="";
}

function initAlarm() {
  alarmSound.play();
  document.getElementById("alarmOptions").style.display = "";
}

function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  document.getElementById("alarmOptions").style.display = "none";
  cancelAlarm(document.getElementById("alarmButton"));
  document.getElementById("display").innerHTML="";
}

function snooze() {
  stopAlarm();
  alarmTimer = setTimeout(initAlarm, 300000); 
  document.getElementById("display").innerHTML="Alarm will ring after 5 minutes";
}
  