let errorUser = document.getElementById("errorUser");
let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");
let btnRegister = document.getElementById("btn-register");
let user = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let listUser = [];

// Kiểm tra định dạng email
let validateEmail = function (email) {
  let filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (filter.test(email)) {
    return true;
  } else {
    return false;
  }
};

// Validate dữ liẹu đầu vào
let validateData = function () {
  let userValue = user.value;
  let emailValue = email.value;
  let passwordValue = password.value;
  // Khi có lỗi validate thì sẽ push lỗi vào mảng này
  let error = [];

  // Nếu tên để trống
  // ! có thể là null, undefined, hoặc ''
  if (!userValue) {
    errorUser.innerHTML = "Tên không được để trống";
    error.push("Tên không được để trống");
  } else if (!emailValue) {
    errorEmail.innerHTML = "Email không được để trống";
    error.push("Email không được để trống");
  } else if (!validateEmail(emailValue)) {
    errorEmail.innerHTML = "Email không đúng định dạng";
    error.push("Email không đúng định dạng");
  } else if (!passwordValue) {
    errorPassword.innerHTML = "Mật khẩu không được để trống";
    error.push("Mật khẩu không được để trống");
  } else {
    errorUser.innerHTML = "";
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
btnRegister.addEventListener("click", function (e) {
  e.preventDefault();
  // Tạo ra đối tượng user để gửi lên local
  let userLocal = {
    username: user.value,
    password: password.value,
    email: email.value,
  };
  // gán gía trị cho hàm validateData
  let valid = validateData();
  if (valid) {
    // Lấy dữ liệu từ local về
    let getUsers = JSON.parse(localStorage.getItem("listUser")) || []; 
    // Sử dụng mặc định là một mảng rỗng nếu không có dữ liệu trong localStorage
    getUsers.push(userLocal); // Thêm giá trị mới vào mảng
    localStorage.setItem("listUser", JSON.stringify(getUsers));
     // Lưu mảng mới vào localStorage
    
    window.location = "http://127.0.0.1:5500/html/dangky-nhap.html";
  }
});
