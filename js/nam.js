// let dataNam = [
//   {
//     img: "../img/nanbolo1.jpg",
//     content: "Áo Polo caro",
//     giatien: 2300000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//     idk: 9,
//   },
//   {
//     img: "../img/nambolo2.jpg",
//     content: "Áo Polo caro Kẻ ngang ",
//     giatien: 2400000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//     idk: 10,
//   },
//   {
//     img: "../img/nambolo3.jpg",
//     content: " Áo Polo trắng",
//     giatien: 2350000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//     idk: 11,
//   },
//   {
//     img: "../img/nambolo4.jpg",
//     content: " Áo Polo kẻ Dọc",
//     giatien: 2300000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//     idk: 12,
//   },
//   {
//     img: "../img/nambolo5.jpg",
//     content: " Áo Polo kẻ Ngang",
//     giatien: 2220000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//     idk: 13,
//   },
//   {
//     img: "../img/nambolo6.jpg",
//     content: " Áo Polo Trắng",
//     giatien: 2330000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//     idk: 14,
//   },
//   {
//     img: "../img/nambolo7.jpg",
//     content: " Áo Polo Nâu ",
//     giatien: 2000000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//     idk: 15,
//   },
//   {
//     img: "../img/nambolo8.jpg",
//     content: " Áo Polo Đỏ",
//     giatien: 2500000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//     idk: 16,
//   },
// ];
// localStorage.setItem("dataNam", JSON.stringify(dataNam));
let dataNam = JSON.parse(localStorage.getItem("dataNam"));
let main = document.getElementById("main");
let render = function () {
  main.innerHTML = "";
  for (let i = 0; i < dataNam.length; i++) {
    main.innerHTML =
      main.innerHTML +
      `<div class="imgcontent" id="${dataNam[i].id}">
      <img
      onclick = "getInfor(${dataNam[i].id})"
     class="image"
     id="image"
     src="${dataNam[i].img}"
     alt=""
      />
        <div class="noi-dung">
        <p class="name" >${dataNam[i].content}</p>
       
         <div class="directional">
        <div> <P class="money">${dataNam[i].giatien}</P></div>
          <div class="icon-cart">
          <div>
          <ion-icon name="cart-outline" class="btn-add" id="${dataNam[i].id}" ></ion-icon>
          </div>
          </div>
          </div>
        </div>
        </div>`;
  }
};
render();

//lưu trênlocalStorage
let jonString = localStorage.setItem("dataNam", JSON.stringify(dataNam));

//render chi tiết sản phẩm
function getInfor(id) {
  console.log(id);
  localStorage.setItem("ids", JSON.stringify(id));
  window.location = "http://127.0.0.1:5500/html/chitietsp.html";
}

//thêm vào giỏ hàng
let cart = JSON.parse(localStorage.getItem("cart")) || [];
// let btngiohang = document.getElementById("btn-giohang");
let check = -1;
main.onclick = function (e) {
  if (e.target.classList.contains("btn-add")) {
    console.log("hah");
    let a = Number(e.target.id);
    for (let i = 0; i < dataNam.length; i++) {
      if (a == dataNam[i].id) {
        check = i;
      }
    }
    let checkCart = -1;
    for (let i = 0; i < cart.length; i++) {
      if (dataNam[check].idk == cart[i].idk) {
        checkCart = i;
      }
    }
    if (checkCart == -1) {
      cart.push(dataNam[check]);
    } else if (checkCart != -1) {
      console.log(checkCart);
      console.log(cart[checkCart].amount);
      cart[checkCart].amount += 1;
    }
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    swal({
      title: "Thành công!",
      text: "Thêm vào giỏ hàng!",
      icon: "success",
      button: "OK",
    });
  }
};
