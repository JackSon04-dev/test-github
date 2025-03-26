// Hàm xét thoả điều kiện password hay chưa
function isPasswordValid(password) {
  let hasUpperCase = /[A-Z]/.test(password);
  let hasLowerCase = /[a-z]/.test(password);
  let hasDigit = /[0-9]/.test(password);

  return hasDigit && hasLowerCase && hasUpperCase && password.length >= 6;
}
// Hàm trả về giá trị password
function setPassword() {
  let password = prompt("Enter your password");

  if (isPasswordValid(password)) {
    alert("Your password is " + password);
    return password;
  } else if (password === null || password.trim() === "") {
    alert("You canceled the password");
  } else {
    alert(`
          Please create the password with;
          1. At least 1 uppercase character.
          2. At least 1 lowercase character.
          3. At least 1 number.
          4. 6 character or more.
      `);
    return setPassword();
  }
}
// Hàm xét thoả điều kiện username hay chưa
function isUserNameValid(username) {
  if (username.length < 5 || username.length > 20) {
    return false;
  }
  let usernameCheck = /^[a-z A-Z 0-9 _ .]+$/;
  if (!usernameCheck.test(username)) {
    return false;
  }
  if (username.trim() === "") {
    alert("Username cannot be empty.");
    return false;
  }
  return true;
}
// Hàm trả về giá trị username
function setUsername() {
  let username = prompt("Enter your username");

  if (isUserNameValid(username)) {
    alert("Your username is valid: " + username);
    return username;
  } else {
    alert(
      "Username can only contain letters, numbers, underscores, dots \n and must be between 5 and 20 characters."
    );
    return setUsername(); // Yêu cầu nhập lại nếu tên đăng nhập không hợp lệ
  }
}
//Hàm mã hóa pasword
function encryptMessage(message) {
  const a = "abcdefghijklmnopqrstuvwxyz";
  const b = "zxcvbnmasdfghjklqwertyuiop";
  let result = "";
  for (let i = 0; i < message.length; i++) {
    let char = message[i].toLowerCase(); // tạo biến char chứa kí tự cần mã hóa
    if (a.includes(char)) {
      // xem lí tự char có trong chuỗi a không
      let index = a.indexOf(char);
      result += b[index];
    } else {
      result += char;
    }
  }
  return result;
}
//Hàm xuất info
function displayUserInfo() {
  document.getElementById("demo").innerHTML =
    "Your username:  " +
    username +
    "<br>" +
    "Your encrypted password:  " +
    encryptMessage(password);
}
//Hàm đăng nhập ràng buộc sai 5 lần dừng đăng nhập
let countLogin = 0;
function login() {
  let reUsername = prompt("Enter username");
  let rePassword = prompt("Enter password");

  if (rePassword !== password || reUsername !== username) {
    countLogin++;
    if (countLogin > 5) {
      alert("Logged in is more than 5 times so must stop here");
      return false;
    }
    alert("Password or Username is incorrect");
    let chooseReLoginOrNot = prompt("Enter Yes to log back in or No to exit.");

    if (chooseReLoginOrNot === "Yes") {
      return login(username, password);
    } else {
      alert("Login is not successed");
      return false;
    }
  } else {
    alert("Login is successed ");
    return true;
  }
}
//khai báo biến đựng giá trị password and username
let username = setUsername();
let password = setPassword();
//Đăng nhập bằng username vs password
login();
//Hiện thị inf
displayUserInfo();
