
function parseDateTime() {
    var year, month, day, hour, minute, second;

    var inputDateTime = document.getElementById("datetime").value;

    var dateObj = new Date(inputDateTime);

    year = dateObj.getFullYear();
    month = dateObj.getMonth(); 
    day = dateObj.getDate();
    hour = dateObj.getHours();
    minute = dateObj.getMinutes();
    second = dateObj.getSeconds();

    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var monthName = month !== undefined ? monthNames[month] : "";

    document.getElementById("year").textContent = "Year: " + (year !== undefined ? year : "");
    document.getElementById("month").textContent = "Month: " + monthName;
    document.getElementById("day").textContent = "Day: " + (day !== undefined ? day : "");
    document.getElementById("hour").textContent = "Hour: " + (hour !== undefined ? hour : "");
    document.getElementById("minute").textContent = "Minute: " + (minute !== undefined ? minute : "");
    document.getElementById("second").textContent = "Second: " + (second !== undefined ? second : "");

    return dateObj;
}

function updateCountdown(){
    let enddat = parseDateTime();

    let yr = enddat.getFullYear();
    let mn = enddat.getMonth() ;
    let dt = enddat.getDate();
    let hr = enddat.getHours();
    let mnt = enddat.getMinutes();
    let sec = enddat.getSeconds();

    let endDate = new Date (yr,mn,dt,hr,mnt,sec);
        // console.log(endDate);

    let x = setInterval(function(){
        let now = new Date().getTime();
        let distance = endDate.getTime() - now;

        let d = Math.floor(distance / (1000 * 60 * 60 * 24));
        let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = d + "<br><span>Days</span>";
        document.getElementById('hours').innerHTML = h + "<br><span>Hours</span>";
        document.getElementById('minutes').innerHTML = m + "<br><span>Minutes</span>";
        document.getElementById('seconds').innerHTML = s + "<br><span>Seconds</span>";

        let dd = document.getElementById('dd');
        let hh = document.getElementById('hh');
        let mm = document.getElementById('mm');
        let ss = document.getElementById('ss');

        let circumference = 2 * Math.PI * parseFloat(dd.getAttribute("r"));

        dd.style.strokeDasharray = circumference;
        dd.style.strokeDashoffset = circumference - (circumference * d) / 365;

        hh.style.strokeDasharray = circumference;
        hh.style.strokeDashoffset = circumference - (circumference * h) / 24;

        mm.style.strokeDasharray = circumference;
        mm.style.strokeDashoffset = circumference - (circumference * m) / 60;

        ss.style.strokeDasharray = circumference;
        ss.style.strokeDashoffset = circumference - (circumference * s) / 60;

        if (distance < 0){
            clearInterval(x);
            document.getElementById("time").style.display = "none";
        }
    })
}

let countdownInterval; 

function pauseResumeTimer() {
    let pauseBtn = document.getElementById('pause');
    let btnText = pauseBtn.innerText;

    if (btnText === "Pause") {
        clearInterval(countdownInterval); // Pause the countdown timer
        pauseBtn.innerText = "Resume"; // Change button text to "Resume"
    } else {
        countdownInterval = setInterval(updateCountdown, 1000); // Resume the countdown timer
        pauseBtn.innerText = "Pause"; // Change button text back to "Pause"
    }
}

function stopTimer() {
    clearInterval(countdownInterval); // Stop the countdown timer
    resetCountdownDisplay(); // Reset countdown display
    document.getElementById('pause').innerText = "Pause"; // Reset pause button text
}

function resetCountdownDisplay() {
    // Reset countdown display to initial values
    document.getElementById('days').innerText = "0";
    document.getElementById('hours').innerText = "0";
    document.getElementById('minutes').innerText = "0";
    document.getElementById('seconds').innerText = "0";

    // Reset the stroke dash offsets of the circles
    let dd = document.getElementById('dd');
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let circumference = 2 * Math.PI * parseFloat(dd.getAttribute("r"));
    dd.style.strokeDashoffset = circumference;
    hh.style.strokeDashoffset = circumference;
    mm.style.strokeDashoffset = circumference;
    ss.style.strokeDashoffset = circumference;
}


function updateCountdowno() {
    let enddat = parseDateTime();
    let yr = enddat.getFullYear();
    let mn = enddat.getMonth();
    let dt = enddat.getDate();
    let hr = enddat.getHours();
    let mnt = enddat.getMinutes();
    let sec = enddat.getSeconds();

    let endDate = new Date(yr, mn, dt, hr, mnt, sec);

    // Start the countdown timer
    countdownInterval = setInterval(updateCountdown, 1000);
}
