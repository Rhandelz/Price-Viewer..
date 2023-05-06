import data from "./data.js";

const input = document.querySelector("#srch");

const ul = document.getElementById("lagnat");

data.map((data) => {
  ul.innerHTML += `
  <li value=${data.price} name="${data.name}">
  <div class="label">
    <span class="material-symbols-outlined"> pill </span>
    <h5>${data.name}</h5>
  </div>
  <div class="img_div">
    <img src="../bg_icon/${data.url}" alt="" />
  </div>

  <div class="info">
    <span class="material-symbols-outlined"> prescriptions </span>
    <h5 class="about">About</h5>
  </div>
  <div class="items">
    <span>${data.type}</span>
    <span>${data.isKid ? "Kids" : "Adult"}</span>
    <span>${data.price}.0₱</span>
  </div>
</li>
      `;
});

input.addEventListener("input", (e) => {
  console.log(ul.children[1].children[0].children[1].textContent === "DayQuil");

  for (let i = 0; i < ul.children.length; i++) {
    if (
      ul.children[i].children[0].children[1].textContent
        .toLowerCase()
        .includes(input.value.toLowerCase())
    ) {
      ul.children[i].style.display = "";
      ul.children[i].style.transform = "scale(1)";
    } else {
      ul.children[i].style.transform = "scale(0)";
      setTimeout(() => {
        ul.children[i].style.display = "none";
      }, 200);
    }

    ul.children[i].textContent;
  }
  console.log(ul.children[0].children[1].textContent);
});

function search(value) {}

let btn_all = document.getElementById("all");
let btn_sick = document.getElementById("sick");
let btn_cold = document.getElementById("cold");
let btn_cough = document.getElementById("cough");

btn_all.addEventListener("click", () => {
  ul.innerHTML = "";
  data.map((data) => {
    ul.innerHTML += `
    <li value=${data.price} name="${data.name}">
    <div class="label">
      <span class="material-symbols-outlined"> pill </span>
      <h5>${data.name}</h5>
    </div>
    <div class="img_div">
      <img src="../bg_icon/${data.url}" alt="" />
    </div>

    <div class="info">
      <span class="material-symbols-outlined"> prescriptions </span>
      <h5 class="about">About</h5>
    </div>
    <div class="items">
      <span>${data.type}</span>
      <span>${data.isKid ? "Kids" : "Adult"}</span>
      <span>${data.price}.0₱</span>
    </div>
  </li>
            `;
  });
});

btn_sick.addEventListener("click", () => {
  ul.innerHTML = "";

  data.map((data) => {
    if (data.type === "sick") {
      ul.innerHTML += `
      <li value=${data.price} name="${data.name}">
      <div class="label">
        <span class="material-symbols-outlined"> pill </span>
        <h5>${data.name}</h5>
      </div>
      <div class="img_div">
        <img src="../bg_icon/${data.url}" alt="" />
      </div>
    
      <div class="info">
        <span class="material-symbols-outlined"> prescriptions </span>
        <h5 class="about">About</h5>
      </div>
      <div class="items">
        <span>${data.type}</span>
        <span>${data.isKid ? "Kids" : "Adult"}</span>
        <span>${data.price}.0₱</span>
      </div>
    </li>
        `;
    }
  });
});
btn_cold.addEventListener("click", () => {
  ul.innerHTML = "";

  data.map((data) => {
    if (data.type === "cold") {
      ul.innerHTML += `
      <li value=${data.price} name="${data.name}">
      <div class="label">
        <span class="material-symbols-outlined"> pill </span>
        <h5>${data.name}</h5>
      </div>
      <div class="img_div">
        <img src="../bg_icon/${data.url}" alt="" />
      </div>
    
      <div class="info">
        <span class="material-symbols-outlined"> prescriptions </span>
        <h5 class="about">About</h5>
      </div>
      <div class="items">
        <span>${data.type}</span>
        <span>${data.isKid ? "Kids" : "Adult"}</span>
        <span>${data.price}.0₱</span>
      </div>
    </li>
          `;
    }
  });
});
btn_cough.addEventListener("click", () => {
  ul.innerHTML = "";

  data.map((data) => {
    if (data.type === "cough") {
      ul.innerHTML += `
      <li value=${data.price} name="${data.name}">
      <div class="label">
        <span class="material-symbols-outlined"> pill </span>
        <h5>${data.name}</h5>
      </div>
      <div class="img_div">
        <img src="../bg_icon/${data.url}" alt="" />
      </div>
    
      <div class="info">
        <span class="material-symbols-outlined"> prescriptions </span>
        <h5 class="about">About</h5>
      </div>
      <div class="items">
        <span>${data.type}</span>
        <span>${data.isKid ? "Kids" : "Adult"}</span>
        <span>${data.price}.0₱</span>
      </div>
    </li>
          `;
    }
  });
});

let anchor = document.querySelector(".anchor");

let active = document.querySelectorAll(".anc");

let inv = document.getElementById("inventory");

let price = document.getElementById("total_price");
let item = document.getElementById("count");

//btn
let btn_undo = document.getElementById("undo");

//use to add item and add price
let cou = 0;
let sum = 0;

//place he last valu for UNDO
let undo_arr = [];

anchor.addEventListener("click", (e) => {
  for (let i = 0; i < active.length; i++) {
    if (e.target == active[i]) {
      active[i].classList.add("active");
    } else {
      active[i].classList.remove("active");
    }
  }
});

//make a empty array tha will hold h epush value
let nameOfMed = [];
//obj hat make the value to increament then display to our pages
let ObjPlace = {};

ul.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    inv.style.height = "100px";
    inv.style.padding = "5px 20px";

    nameOfMed.push(e.target.children[0].children[1].textContent);
    //setting the item count
    cou++;
    item.textContent = `${cou} x`;
    //setting the total price
    sum += e.target.value;
    price.textContent = `${sum}.0 ₱`;

    //push to array
    undo_arr.push(e.target.value);
  }
});

btn_undo.addEventListener("click", () => {
  //minusing  the count >> putting to if else to it will never ge he negative value
  if (cou > 0) {
    console.log("co");
    cou--;
    console.log("oo");
    item.textContent = `${cou} x`;
  }
  //minusing th price and count >> putting to if else to it will never ge he negative value
  if (sum > 0) {
    sum -= undo_arr[undo_arr.length - 1];
    price.textContent = `${sum}.0 ₱`;
    undo_arr.pop(undo_arr[undo_arr.length - 1]);
  }
});

//for the modal

let done = document.getElementById("btn_print");
let modal = document.querySelector(".modal");

let pic = document.querySelector(".pic");

let sold = document.getElementById("sold_list");

let tots = document.getElementById("total");

let dwnld = document.getElementById("download_btn");

done.addEventListener("click", () => {
  modal.style.display = "flex";

  tots.innerHTML = sum + "₱";

  for (let i = 0; i < nameOfMed.length; i++) {
    const val = nameOfMed[i];
    if (ObjPlace[val]) {
      ObjPlace[val]++;
    } else {
      ObjPlace[val] = 1;
    }
  }

  let place = []; //place holde hat push the string tha is already generated

  for (const key in ObjPlace) {
    place.push(`${key}: ${ObjPlace[key]}`);
  }

  sold.innerHTML = "";

  place.forEach((d) => {
    sold.innerHTML += `<li>${d}</li>`;
  });
});

modal.addEventListener("click", (e) => {
  e.stopPropagation();

  if (e.target.className !== "pic") {
    /* modal.style.display = "none"; */
  }
});

let dwd = document.getElementById("download_btn");

dwnld.addEventListener("click", () => {
  htmlToImage
    .toPng(pic)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      img.setAttribute("id", "img");
      modal.appendChild(img);
      dwd.href = dataUrl;
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
});

//Add some buy product that will he Ui on the nav
