let a = prompt("Nhập 1 số nguyên a");
while (isNaN(a) || a % 1 !== 0 || a <= 0) {
  a = Number(prompt("Nhập lại số nguyên a "));
}
console.log("Số mày nhập là " + a);

let sum = 0;
for (let n = 1; n <= a; n++) {
  let gt = 1;
  for (let i = 1; i <= n; i++) {
    gt *= i;
  }
  sum += gt;
  console.log("Giai thừa " + n + " là " + gt);
}

console.log(sum);
