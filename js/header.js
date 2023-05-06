let profile = document.getElementById("profile");



  profile.innerHTML = `

    <span class="span-header span-header-logout">Đăng xuất </span>
  `;


let logoutElement = document.querySelector(".span-header-logout");
logoutElement.addEventListener("click", function () {
  profile.innerHTML  = `
  <a href="../html/dangky-nhap.html"
  ><ion-icon name="person-sharp"></ion-icon
></a>
  `;
});
