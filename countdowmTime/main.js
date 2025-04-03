function countdownTime(minutes) {
  alert(`Thời gian làm bài là ${minutes} phút `);
  let seconds = minutes * 60;

  let countdownInterval = setInterval(function () {
    let minutesLeft = Math.floor(seconds / 60); // vd: 65/60 = 1.083 => lấy nguyên lớn nhất là 1
    let secondsLeft = seconds % 60; // vd: 65%60 = 5 lấy second = 5
    let refixSecondFormat = secondsLeft < 10 ? "0" : "";
    console.log(`${minutesLeft}:${refixSecondFormat}${secondsLeft}`);

    if (seconds <= 0) {
      clearInterval(countdownInterval);
      alert("Hết thời gian");
    } else {
      seconds -= 3;
    }
  }, 3000);
}

let timeInput = prompt("Mời nhập số phút");
countdownTime(timeInput);
