let homeScore = document.getElementById("home-number")
let guestScore = document.getElementById("guest-number")
let homeScoreTotal = 0
let guestScoreTotal = 0

const startingMinutes = 12;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000); 

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    countdownEl.innerHTML =  `${minutes}:${seconds}`;
    time --;
    
    
}

function resetTimer() {
  time = startingMinutes * 60
 
  const minutes = Math.floor(time/60);
  let seconds = time % 60;
}

function plusOneHome() {
    homeScoreTotal += 1

    homeScore.innerText = homeScoreTotal
    
    changeColorGuest()
}

function plusOneGuest() {
    guestScoreTotal += 1

    guestScore.innerText = guestScoreTotal
    
    changeColorGuest()
}


function plusTwoHome() {
    homeScoreTotal += 2

    homeScore.innerText = homeScoreTotal
    
    changeColorGuest()
}

function plusTwoGuest() {
    guestScoreTotal += 2

    guestScore.innerText = guestScoreTotal
    
    changeColorGuest()
}

function plusThreeHome() {
    homeScoreTotal += 3

    homeScore.innerText = homeScoreTotal
    
    changeColorGuest()
}

function plusThreeGuest() {
    guestScoreTotal += 3

    guestScore.innerText = guestScoreTotal
    

changeColorGuest()
}


function reset() {
    guestScore.textContent = 0
    guestScoreTotal = 0
    
    homeScore.textContent = 0
    homeScoreTotal = 0
    
   homeScore.style.textShadow = "0px 0px 0px";    
   guestScore.style.textShadow = "0px 0px 0px";     
}

function changeColorGuest() {
    
    if (homeScoreTotal < guestScoreTotal) {
    guestScore.style.textShadow = "0px 0px 20px  #ffdf00"; homeScore.style.textShadow = "0px 0px 0px";    
    } else if (homeScoreTotal > guestScoreTotal) {
    homeScore.style.textShadow = "0px 0px 20px #ffdf00";  guestScore.style.textShadow = "0px 0px 0px";    
    }
    
}


