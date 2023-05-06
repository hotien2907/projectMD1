const cart = JSON.parse(localStorage.getItem("cart"));
let total = document.getElementById("total");
let total2 = document.getElementById("total2");
let total3 = document.getElementById("total3");
console.log(cart);
let tbody = document.getElementById("body");

function renderCart() {
  tbody.innerHTML = "";

  sum = 0;
  sum1 = 0;
  for (let i = 0; i < cart.length; i++) {
    tbody.innerHTML += `<tr id="${cart[i].id}">
        <td>${i + 1}</td>
        <td> <img src=${cart[i].img} alt=""; ></td>
        <td>${cart[i].content}</td>
        <td>${cart[i].giatien}</td>
        <td>${cart[i].amount}</td>
        <td>
        <ion-icon name="trash-outline" class="btn-delete" id="${
          cart[i].id
        }" ></ion-icon>
        </td>
        </tr>
    `;
    sum = sum + Number(cart[i].giatien) * Number(cart[i].amount);
    sum1 = sum1 + Number(cart[i].amount);
  }
}
renderCart();
console.log(sum);
tbody.onclick = function (e) {
  if (e.target.classList.contains("btn-delete")) {
    console.log("haha");
    let id = Number(e.target.parentElement.parentElement.id);
    console.log(id);

    let check = -1;
    for (let i = 0; i < cart.length; i++) {
      if (id == cart[i].id) {
        check = i;
      }
    }
    console.log(check);
    if (check != -1) {
      cart.splice(check, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
  renderCart();
};

total.textContent = `${sum.toLocaleString()}vnd
`;
total2.textContent = `${sum.toLocaleString()}vnd
`;
total3.textContent = `${sum1} sp`;

function muahang() {
  if (cart.length == 0) {
    alert("ko có sản phẩm trong giỏ hàng");
  } else {
    swal({
      title: "Thành công!",
      text: "ĐẶT HÀNG!",
      icon: "success",
      button: "OK",
    });
    localStorage.removeItem("cart");
    // Chuyển hướng trang sau 2 giây
    setTimeout(function () {
      window.location = "http://127.0.0.1:5500//html/trangchu.html";
    }, 3000);
  }
}
