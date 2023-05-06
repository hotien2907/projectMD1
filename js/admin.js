// let dataNam = [
//   {
//     img: "../img/nu1.jpg",
//     content: "Đầm hai dây Hồng",
//     giatien: 2330000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//   },
//   {
//     img: "../img/nu2.jpg",
//     content: "Đầm hai dây Đỏ",
//     giatien: 2530000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//   },
//   {
//     img: "../img/nu3.jpg",
//     content: "Đầm Maxi tay hến",
//     giatien: 2380000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//   },
//   {
//     img: "../img/nu4.jpg",
//     content: "Đầm lụa Đen",
//     giatien: 1330000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//   },
//   {
//     img: "../img/nu5.jpg",
//     content: "Đầm lụa Hoa",
//     giatien: 1830000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//   },
//   {
//     img: "../img/nu6.jpg",
//     content: "Đầm lua bay phối họa tiết",
//     giatien: 2900000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//   },
//   {
//     img: "../img/nu7.jpg",
//     content: "Đầm lua xếp tầng Đen ",
//     giatien: 2730000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//   },
//   {
//     img: "../img/nu8.jpg",
//     content: "Đầm lua xếp tầng Xanh",
//     giatien: 2830000,
//     id: Math.floor(Math.random() * 1000000),
//     amount: 1,
//   },
// ];

let dataNam = JSON.parse(localStorage.getItem("dataNam"));
let tbody = document.getElementById("body");
let Edelete = document.getElementById("delete");
let mainForm = document.getElementById("main-form");

function render() {
  tbody.innerHTML = "";

  for (let i = 0; i < dataNam.length; i++) {
    tbody.innerHTML += `<tr id="${dataNam[i].id}">
        <td>${i + 1}</td>
        <td> <img src=${dataNam[i].img} alt=""; ></td>
        <td>${dataNam[i].content}</td>
        <td>${dataNam[i].giatien}</td>
        <td>${dataNam[i].amount}</td>

      <td><button type="button" class="btn btn-primary update">Update</button>
       <button type="button" class="btn btn-secondary delete">Delete</button>
        </tr>
    `;
  }
}
render();

// Thực hiện tính năng thêm
mainForm.onsubmit = function (e) {
  console.log("haha");
  e.preventDefault();
  let newData = {
    img: mainForm.image.value,
    content: mainForm.name.value,
    giatien: mainForm.giatien.value,
    id: Math.floor(Math.random() * 10000),
    amount: mainForm.soluong.value,
  };
  dataNam.push(newData);
  localStorage.setItem("dataNam", JSON.stringify(dataNam));
  render();
};

//thực hiện tính năng xóa
console.log(dataNam);
tbody.onclick = function (e) {
  if (e.target.classList.contains("delete")) {
    console.log(e.target.classList.contains("delete"));
    let id = Number(e.target.parentElement.parentElement.id);
    console.log(id);
    let check = -1;
    for (let i = 0; i < dataNam.length; i++) {
      if (id == dataNam[i].id) {
        check = i;
      }
    }
    console.log(check);
    if (check != -1) {
      console.log("haha");
      dataNam.splice(check, 1);
    }
    localStorage.setItem("data", JSON.stringify(data));
    render();
  }

  // Edit
  if (e.target.classList.contains("update")) {
    console.log(data);
    let id = Number(e.target.parentElement.parentElement.id);
    console.log(id);
    let check = -1;
    for (let i = 0; i < dataNam.length; i++) {
      if (id === dataNam[i].id) {
        check = i;
      }
    }
    if (check != -1) {
      updateIndex = check;
      document.getElementById(id).innerHTML = `<tr>
      <th scope="row">${check + 1}</th>
      <td> <input type="text" class="form-control" id="image" name="image" placeholder="Nhập link hình ảnh"></td>
      <td> <input type="text" class="form-control" id="name" name="name" placeholder="Nhập tên sản phẩm"></td>
      <td> <input type="text" class="form-control" id="giatien" name="giatien" placeholder="Nhập giá tiền"></td>
      <td> </td>

      <td>
        <button class="btn btn-primary btn-confirm" id=${check}>Confirm</button>
        <button class="btn btn-secondary btn-delete" id=${check}>Delete</button>
      </td>
    </tr>`;
    }
  }
  console.log("haha");

  if (e.target.classList.contains("btn-confirm")) {
    let newImage =
      e.target.parentElement.parentElement.children[1].children[0].value;
    let newName =
      e.target.parentElement.parentElement.children[2].children[0].value;
    let newGiatien =
      e.target.parentElement.parentElement.children[3].children[0].value;

    dataNam[updateIndex] = {
      ...data[updateIndex],
      img: newImage,
      content: newName,
      giatien: newGiatien,
    };
    console.log(newImage, newName, newGiatien);
    localStorage.setItem("data", JSON.stringify(data));

    render();
  }
};
render();
