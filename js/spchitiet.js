let dataNam = JSON.parse(localStorage.getItem("dataNam"));
console.log(dataNam);

let description = document.getElementById("description");
console.log(description);

let getId = JSON.parse(localStorage.getItem("ids"));
console.log(getId);

let check = -1;
for (let i = 0; i < dataNam.length; i++) {
  if (getId == dataNam[i].id) {
    check = i;
    console.log(check);
  }
}

if (check !== -1) {
  description.innerHTML = `
  <div class="content-top">
  <div class="img-big">
    <img  src="${dataNam[check].img}"
     alt="" />
  </div>
 </div>
 <div class="content-right">
  <div>
    <h1>${dataNam[check].content}</h1>
  </div>
  <div class="icon-star">
    <p>SKU: 45S2751 <span><ion-icon name="star-outline"> </ion-icon>
    <ion-icon name="star-outline"> </ion-icon>
    <ion-icon name="star-outline"> </ion-icon>
    <ion-icon name="star-outline"></ion-icon></span> (0 đánh giá)</p>
  </div>
  <div style="color: black; font-size: 30px"><b>${dataNam[check].giatien}</b></div>
  <div class="size">
  <button class="size-btn">S</button>
  <button class="size-btn">M</button>
  <button class="size-btn">L</button>
  <button class="size-btn">XL</button>
  <br /><br />
  <p>Kiểm tra size của bạn</p>
</div>
<div class="quantity">
  <p>Số lượng</p>
  <input id="quantityInput" type="number" min="0" max="10" value="0" />
</div>
<div class="button">
  <button onclick="validateInputs()">Mua hàng</button>
</div>
  `;
}

function validateInputs() {
  let sizeButtons = document.querySelectorAll(".size-btn");
  let sizeSelected = false;
  for (let i = 0; i < sizeButtons.length; i++) {
    if (sizeButtons[i].classList.contains("selected")) {
      sizeSelected = true;
      break;
    }
  }
  let quantityInput = document.getElementById("quantityInput");
  let quantityValue = parseInt(quantityInput.value);
  if (!sizeSelected) {
    alert("Vui lòng chọn size.");
  } else if (quantityValue <= 0 || quantityValue > 10) {
    alert("Vui lòng nhập số lượng hợp lệ.");
  } else {
    swal({
      title: "MUA HÀNG!",
      text: "THÀNH CÔNG!",
      icon: "success",
      button: "OK",
    });
  }
}

let sizeButtons = document.querySelectorAll(".size-btn");
console.log(sizeButtons);
for (let i = 0; i < sizeButtons.length; i++) {
  sizeButtons[i].addEventListener("click", function () {
    for (let j = 0; j < sizeButtons.length; j++) {
      sizeButtons[j].classList.remove("selected");
    }
    this.classList.add("selected");
  });
}

let dataTrecon = JSON.parse(localStorage.getItem("dataTrecon"));
console.log(dataTrecon);
let description2 = document.getElementById("description2");
console.log(description2);
let check2 = -1;
for (let i = 0; i < dataTrecon.length; i++) {
  if (getId == dataTrecon[i].id) {
    check2 = i;
    console.log(check2);
  }
}

if (check2 !== -1) {
  description2.innerHTML = `
  <div class="content-top">
  <div class="img-big">
    <img  src="${dataTrecon[check2].img}"
     alt="" />
  </div>
 </div>
 <div class="content-right">
  <div>
    <h1>${dataTrecon[check2].content}</h1>
  </div>
  <div class="icon-star">
    <p>SKU: 45S2751 <span><ion-icon name="star-outline"> </ion-icon>
    <ion-icon name="star-outline"> </ion-icon>
    <ion-icon name="star-outline"> </ion-icon>
    <ion-icon name="star-outline"></ion-icon></span> (0 đánh giá)</p>
  </div>
  <div style="color: black; font-size: 30px"><b>${dataTrecon[check2].giatien}</b></div>
  <div class="size">
  <button class="size-btn">S</button>
  <button class="size-btn">M</button>
  <button class="size-btn">L</button>
  <button class="size-btn">XL</button>
  <br /><br />
  <p>Kiểm tra size của bạn</p>
</div>
<div class="quantity">
  <p>Số lượng</p>
  <input id="quantityInput" type="number" min="0" max="10" value="0" />
</div>
<div class="button">
  <button onclick="validateInputs()">Mua hàng</button>
</div>
  `;
}

let dataNu = JSON.parse(localStorage.getItem("dataNu"));
console.log(dataNu);
let description1 = document.getElementById("description1");
console.log(description1);
let check1 = -1;
for (let i = 0; i < dataNu.length; i++) {
  if (getId == dataNu[i].id) {
    check1 = i;
    console.log(check1);
  }
}

if (check1 !== -1) {
  description1.innerHTML = `
  <div class="content-top">
  <div class="img-big">
    <img  src="${dataNu[check1].img}"
     alt="" />
  </div>
 </div>
 <div class="content-right">
  <div>
    <h1>${dataNu[check1].content}</h1>
  </div>
  <div class="icon-star">
    <p>SKU: 45S2751 <span><ion-icon name="star-outline"> </ion-icon>
    <ion-icon name="star-outline"> </ion-icon>
    <ion-icon name="star-outline"> </ion-icon>
    <ion-icon name="star-outline"></ion-icon></span> (0 đánh giá)</p>
  </div>
  <div style="color: black; font-size: 30px"><b>${dataNu[check1].giatien}</b></div>
  <div class="size">
  <button class="size-btn">S</button>
  <button class="size-btn">M</button>
  <button class="size-btn">L</button>
  <button class="size-btn">XL</button>
  <br /><br />
  <p>Kiểm tra size của bạn</p>
</div>
<div class="quantity">
  <p>Số lượng</p>
  <input id="quantityInput" type="number" min="0" max="10" value="0" />
</div>
<div class="button">
  <button onclick="validateInputs()">Mua hàng</button>
</div>
  `;
}
