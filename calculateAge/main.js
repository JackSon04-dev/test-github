function calculateYear(inputYear) {
  let yearOfBirth = Number(inputYear);
  if (!Number.isInteger(yearOfBirth) || yearOfBirth <= 0) {
    alert("Năm sinh không hợp lệ");
    return;
  }
  let currentYear = new Date().getFullYear();
  alert(`Số tuổi của bạn là ${currentYear - yearOfBirth}`);
}

let a = prompt("Nhập năm sinh");
calculateYear(a);
