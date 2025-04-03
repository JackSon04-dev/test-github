function timeSince(timestamp) {
  let now = new Date();
  console.log(`Thời gian hiện tại là ${now.getTime()}`);
  let differentTime = now - timestamp;
  let seconds = Math.floor(differentTime / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30);
  let years = Math.floor(months / 12);
  if (years > 0) {
    return `Offline ${years} năm trước`;
  }
  if (months > 0) {
    return `Offline ${months} tháng trước`;
  }
  if (days > 0) {
    return `Offline ${days} ngày trước`;
  }
  if (hours > 0) {
    return `Offline ${hours} giờ trước`;
  }
  if (minutes > 0) {
    return `Offline ${minutes} phút trước`;
  } else {
    return `Offline ${seconds} giây trước`;
  }
}

let time = 1743078420588;
console.log(timeSince(time));
