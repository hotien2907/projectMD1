let dataTrecon = JSON.parse(localStorage.getItem("dataTrecon"));
console.log(dataTrecon);
let tbody = document.getElementById("body");
let Edelete = document.getElementById("delete");
let mainForm = document.getElementById("main-form");

function render() {
  tbody.innerHTML = "";

  for (let i = 0; i < dataTrecon.length; i++) {
    tbody.innerHTML += `<tr id="${dataTrecon[i].id}">
        <td>${i + 1}</td>
        <td> <img src=${dataTrecon[i].img} alt=""; ></td>
        <td>${dataTrecon[i].content}</td>
        <td>${dataTrecon[i].giatien}</td>
        <td>${dataTrecon[i].amount}</td>

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
  dataTrecon.push(newData);
  localStorage.setItem("dataTrecon", JSON.stringify(dataTrecon));
  console.log(localStorage.setItem("dataTrecon", JSON.stringify(dataTrecon)));
  render();
};

//thực hiện tính năng xóa
console.log(dataTrecon);
tbody.onclick = function (e) {
  if (e.target.classList.contains("delete")) {
    console.log(e.target.classList.contains("delete"));
    let id = Number(e.target.parentElement.parentElement.id);
    console.log(id);
    let check = -1;
    for (let i = 0; i < dataTrecon.length; i++) {
      if (id == dataTrecon[i].id) {
        check = i;
      }
    }
    console.log(check);
    if (check != -1) {
      console.log("haha");
      dataTrecon.splice(check, 1);
    }
    localStorage.setItem("dataTrecon", JSON.stringify(dataTrecon));
    render();
  }

  // Edit
  if (e.target.classList.contains("update")) {
    console.log(dataTrecon);
    let id = Number(e.target.parentElement.parentElement.id);
    console.log(id);
    let check = -1;
    for (let i = 0; i < dataTrecon.length; i++) {
      if (id === dataTrecon[i].id) {
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

    dataTrecon[updateIndex] = {
      ...dataTrecon[updateIndex],
      img: newImage,
      content: newName,
      giatien: newGiatien,
    };
    console.log(newImage, newName, newGiatien);
    localStorage.setItem("dataTrecon", JSON.stringify(dataTrecon));

    render();
  }
};
render();
