let email = document.getElementById("email");
console.log(email.value);
let password = document.getElementById("password");
let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");
let btnLogin = document.getElementById("btnLogin");
// Validate dữ liẹu đầu vào
let validateData = function () {
  let emailValue = email.value;
  let passwordValue = password.value;
  // Khi có lỗi validate thì sẽ push lỗi vào mảng này
  let error = [];

  // Nếu tên để trống
  // ! có thể là null, undefined, hoặc ''
  if (!emailValue) {
    errorEmail.innerHTML = "Email không được để trống";
    error.push("Email không được để trống");
  } else if (!passwordValue) {
    errorPassword.innerHTML = "Mật khẩu không được để trống";
    error.push("Mật khẩu không được để trống");
  } else {
    errorEmail.innerHTML = "";
    errorPassword.innerHTML = "";
  }
  // Nếu mảng > 0 thì return false tức là dữ liệu đang sai
  if (error.length > 0) {
    return false;
  } else {
    return true;
  }
};

// Khi click vào button đăg ký
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  // gán gía trị cho hàm validateData
  let valid = validateData();
  if (valid) {
    // Lấy dữ liệu từ local về
    let getUsers = JSON.parse(localStorage.getItem("listUser")) || []; // Sử dụng mặc định là một mảng rỗng nếu không có dữ liệu trong localStorage
    // Lặp qua từng phần tử của mảng user trên local
    for (let i = 0; i < getUsers.length; i++) {
      if (
        getUsers[i].email === email.value &&
        getUsers[i].password === password.value
      ) {
        window.location = "http://127.0.0.1:5500/html/trangchu.html";
        break;
      } else {
        window.location = "http://127.0.0.1:5500/html/dangky-nhap.html";
        break;
      }
    }  
  }
});
