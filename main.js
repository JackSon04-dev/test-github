function checkPassWord(a) {
  let aa = false;
  let aA = false;
  let a1 = false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= "a" && a[i] <= "z") {
      aa = true;
    }
    if (a[i] >= "A" && a[i] <= "Z") {
      aA = true;
    }
    if (a[i] >= "0" && a[i] <= "9") {
      a1 = true;
    }
  }
  return aa && aA && a1 && a.length >= 6;
}
function isValidPassword(a) {
  let hasLower = /[a-z]/.test(a);
  let hasUpper = /[A-Z]/.test(a);
  let hasNumber = /[0-9]/.test(a);
  return hasLower && hasUpper && hasNumber && password.length >= 6;
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

alert("Mật khẩu vừa nhập là " + a);
