let dataNu = [
  {
    img: "../img/nu1.jpg",
    content: "Đầm hai dây Hồng",
    giatien: 2330000,
    id: Math.floor(Math.random() * 1000000),
    amount: 1,
  },
  {
    img: "../img/nu2.jpg",
    content: "Đầm hai dây Đỏ",
    giatien: 2530000,
    id: Math.floor(Math.random() * 1000000),
    amount: 1,
  },
  {
    img: "../img/nu3.jpg",
    content: "Đầm Maxi tay hến",
    giatien: 2380000,
    id: Math.floor(Math.random() * 1000000),
    amount: 1,
  },
  {
    img: "../img/nu4.jpg",
    content: "Đầm lụa Đen",
    giatien: 1330000,
    id: Math.floor(Math.random() * 1000000),
    amount: 1,
  },
  {
    img: "../img/nu5.jpg",
    content: "Đầm lụa Hoa",
    giatien: 1830000,
    id: Math.floor(Math.random() * 1000000),
    amount: 1,
  },
  {
    img: "../img/nu6.jpg",
    content: "Đầm lua bay phối họa tiết",
    giatien: 2900000,
    id: Math.floor(Math.random() * 1000000),
    amount: 1,
  },
  {
    img: "../img/nu7.jpg",
    content: "Đầm lua xếp tầng Đen ",
    giatien: 2730000,
    id: Math.floor(Math.random() * 1000000),
    amount: 1,
  },
  {
    img: "../img/nu8.jpg",
    content: "Đầm lua xếp tầng Xanh",
    giatien: 2830000,
    id: Math.floor(Math.random() * 1000000),
    amount: 1,
  },
];

// let dataNu = JSON.parse(localStorage.getItem("dataNu"));
let tbody = document.getElementById("body");
let Edelete = document.getElementById("delete");
let mainForm = document.getElementById("main-form");

function render() {
  tbody.innerHTML = "";

  for (let i = 0; i < dataNu.length; i++) {
    tbody.innerHTML += `<tr id="${dataNu[i].id}">
        <td>${i + 1}</td>
        <td> <img src=${dataNu[i].img} alt=""; ></td>
        <td>${dataNu[i].content}</td>
        <td>${dataNu[i].giatien}</td>
        <td>${dataNu[i].amount}</td>

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
  dataNu.push(newData);
  localStorage.setItem("dataNu", JSON.stringify(dataNu));
  console.log(localStorage.setItem("dataNu", JSON.stringify(dataNu)));
  render();
};

//thực hiện tính năng xóa
console.log(dataNu);
tbody.onclick = function (e) {
  if (e.target.classList.contains("delete")) {
    console.log(e.target.classList.contains("delete"));
    let id = Number(e.target.parentElement.parentElement.id);
    console.log(id);
    let check = -1;
    for (let i = 0; i < dataNu.length; i++) {
      if (id == dataNu[i].id) {
        check = i;
      }
    }
    console.log(check);
    if (check != -1) {
      console.log("haha");
      dataNu.splice(check, 1);
    }
    localStorage.setItem("dataNu", JSON.stringify(dataNu));
    render();
  }

  // Edit
  if (e.target.classList.contains("update")) {
    console.log(dataNu);
    let id = Number(e.target.parentElement.parentElement.id);
    console.log(id);
    let check = -1;
    for (let i = 0; i < dataNu.length; i++) {
      if (id === dataNu[i].id) {
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

    dataNu[updateIndex] = {
      ...dataNu[updateIndex],
      img: newImage,
      content: newName,
      giatien: newGiatien,
    };
    console.log(newImage, newName, newGiatien);
    localStorage.setItem("dataNu", JSON.stringify(dataNu));

    render();
  }
};
render();
