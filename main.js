function isValidPassword(a) {
  let hasLower = /[a-z]/.test(a);
  let hasUpper = /[A-Z]/.test(a);
  let hasNumber = /[0-9]/.test(a);
  return hasLower && hasUpper && hasNumber && a.length >= 6;
  ds;
}
let a = prompt("Mời nhập mật khẩu");
while (!isValidPassword(a)) {
  alert(` Vui lòng nhập mật khẩu có:
    1. Ít nhất 1 chữ thường.
    2. Ít nhất 1 chữ hoa.
    3. Ít nhất 1 số.
    4. Ít nhất 6 kí tự.
    `);
  a = prompt("Mời nhập lại mật khẩu");
}

alert("Mật khẩu là " + a);
console.log(a);
