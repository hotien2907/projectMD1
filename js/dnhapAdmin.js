let errorUser = document.getElementById("errorUser");
let errorPassword = document.getElementById("errorPassword");
let btnRegister = document.getElementById("btn-register");
let user = document.getElementById("username");
let password = document.getElementById("password");
console.log(user, password, btnRegister, errorPassword, errorUser);

// Validate dữ liẹu đầu vào
let validateData = function () {
  let userValue = user.value;
  let passwordValue = password.value;

  let error = [];
  if (!userValue) {
    errorUser.innerHTML = "Tên không được để trống";
    error.push("Tên không được để trống");
  } else if (!passwordValue) {
    errorPassword.innerHTML = "Mật khẩu không được để trống";
    error.push("Mật khẩu không được để trống");
  } else {
    errorUser.innerHTML = "";
    errorPassword.innerHTML = "";
  }
  if (error.length > 0) {
    return false;
  } else {
    return true;
  }
};
let dangnhapAdmin = [{ name: "tien", password: "300701" }];
localStorage.setItem("dangnhapAdmin", JSON.stringify(dangnhapAdmin));
let getUsers = JSON.parse(localStorage.getItem("dangnhapAdmin"));
console.log(getUsers);
//Khi click vào button đăg ký
btnRegister.addEventListener("click", function (e) {
  e.preventDefault();
  // gán gía trị cho hàm validateData
  let valid = validateData();
  if (valid) {
    //Lặp qua từng phần tử của mảng user trên local
    for (let i = 0; i < getUsers.length; i++) {
      if (
        getUsers[i].name === username.value &&
        getUsers[i].password === password.value
      ) {
        window.location = "http://127.0.0.1:5500/html/admin.html";
        break;
      } else {
        ("vui lòng nhập lại mật khẩu");
        break;
      }
    }
  }
});
