// let dataNu = [
//   {
//     img: "../img/nu1.jpg",
//     content: "Đầm hai dây Hồng",
//     giatien: 2330000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//     idk: 1,
//   },
//   {
//     img: "../img/nu2.jpg",
//     content: "Đầm hai dây Đỏ",
//     giatien: 2530000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//     idk: 2,
//   },
//   {
//     img: "../img/nu3.jpg",
//     content: "Đầm Maxi tay hến",
//     giatien: 2380000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//     idk: 3,
//   },
//   {
//     img: "../img/nu4.jpg",
//     content: "Đầm lụa Đen",
//     giatien: 1330000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//     idk: 4,
//   },
//   {
//     img: "../img/nu5.jpg",
//     content: "Đầm lụa Hoa",
//     giatien: 1830000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//     idk: 5,
//   },
//   {
//     img: "../img/nu6.jpg",
//     content: "Đầm lua bay phối họa tiết",
//     giatien: 2900000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//     idk: 6,
//   },
//   {
//     img: "../img/nu7.jpg",
//     content: "Đầm lua xếp tầng Đen ",
//     giatien: 2730000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//     idk: 7,
//   },
//   {
//     img: "../img/nu8.jpg",
//     content: "Đầm lua xếp tầng Xanh",
//     giatien: 2830000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//     idk: 8,
//   },
// ];


let dataNu = JSON.parse(localStorage.getItem("dataNu"));
console.log(dataNu);

let total = document.getElementsByClassName("total");
let main = document.getElementById("main");
let render = function () {
  main.innerHTML = "";
  total.innerHTML = "";
  sum = 0;
  for (let i = 0; i < dataNu.length; i++) {
    main.innerHTML =
      main.innerHTML +
      `<div class="imgcontent" id="${dataNu[i].id}">
           <img
           onclick = "getInfor(${dataNu[i].id})"
          class="image"
          id="image"
          src="${dataNu[i].img}"
          alt=""
           />
        <div class="noi-dung">
        <p class="name" >${dataNu[i].content}</p>
       
         <div class="directional">
        <div> <P class="money">${dataNu[i].giatien}vnd</P></div>
          <div class="icon-cart">
          <div >
          <ion-icon name="cart-outline"  class="btn-add" id="${dataNu[i].id}"></ion-icon></div>
          </div>
          </div>
        </div>
        </div>`;
  }
  localStorage.setItem("dataNu", JSON.stringify(dataNu));
};
render();

//lưu trênlocalStorage

// let data = JSON.parse(localStorage.getItem("data"));

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
    let a = Number(e.target.id);
    for (let i = 0; i < dataNu.length; i++) {
      if (a == dataNu[i].id) {
        check = i;
      }
    }
    let checkCart = -1;
    for (let i = 0; i < cart.length; i++) {
      if (dataNu[check].idk == cart[i].idk) {
        checkCart = i;
      }
    }
    if (checkCart == -1) {
      cart.push(dataNu[check]);
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
