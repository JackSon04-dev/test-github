//Bài 1
/*let n;
while (true) {
  n = Number(prompt("Vui long nhap so luong mang la số nguyên >0 "));
  if (Number.isInteger(n) && n > 0) {
    break;
  }
}
alert(`Mảng có ${n} phần tử`);
let M1 = [];
for (let i = 0; i < n; i++) {
  let input = prompt("Nhập value của phần tử thứ " + (i + 1) + ": ");
  M1.push(input);
}
console.log(M1);*/

//Bài 2
function randomValueOfArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}
let n;
while (true) {
  n = Number(prompt("Vui long nhap so luong mang la số nguyên >0 "));
  if (Number.isInteger(n) && n > 0) {
    break;
  }
}
console.log(`Mảng có ${n} phần tử`);
// hứng mảng và xuất
let randomArray = randomValueOfArray(n);
console.log("Mảng random: " + randomArray.join());
// tạo 1 mảng mới hứng giá trị đảo ngược
function reverseArray(arr) {
  return arr.reverse();
}
let reverseRandomArray1 = reverseArray([...randomArray]);
console.log("Mảng random đã được đảo ngược 1: " + reverseRandomArray1);
let reverseRandomArray2 = randomArray.slice().reverse();
console.log("Mảng random đã được đảo ngược 2: " + reverseRandomArray2);
// sắp xếp và hứng value trong mảng mới
function softArray(arr) {
  return arr.sort((a, b) => a - b);
}
let softedRandomArray1 = softArray([...randomArray]); // clone mảng gốc
console.log("Mảng random đã được xắp xếp 1: " + softedRandomArray1);
let softedRandomArray2 = randomArray.slice().sort((a, b) => a - b);
console.log("Mảng random đã được xắp xếp 2: " + softedRandomArray2);
// Tổng phần tử mảng
let sumValuesOfRandomArray = randomArray.reduce(
  (accumulate, currentValue) => accumulate + currentValue
);
console.log("Tổng các phần tử = " + sumValuesOfRandomArray);
// nhập value xét index của nó trong array
let checkValue = prompt("Vui long nhập value tìm kiếm trong mảng");
// xét nếu isNaN thì là dữ liệu chuỗi
let convertedValue = isNaN(checkValue) ? checkValue : Number(checkValue);
let arrCheck = [];
for (let i = 0; i < randomArray.length; i++) {
  if (randomArray[i] === convertedValue) {
    arrCheck.push(i);
  }
}
if (arrCheck.length === 0) {
  console.log(`${convertedValue} không tồn tại trong mảng`);
} else {
  console.log(
    `Giá trị ${convertedValue} xuất hiện trong mảng tại vị trí index: ${arrCheck.join()}`
  );
}
