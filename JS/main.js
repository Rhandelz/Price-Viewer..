import data from "./data.js";

const input = document.querySelector("#srch");

const ul = document.getElementById("lagnat");

data.map((data) => {
  ul.innerHTML += `
      <li value=${data.price}>
      <div>
      </div>
      <h5>${data.name}</h5>
      <p>${data.discripion}</p>
      </li>
      `;
});

input.addEventListener("input", (e) => {
  for (let i = 0; i < ul.children.length; i++) {
    if (
      ul.children[i].children[1].textContent
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
            <li value=${data.price}>
            <div>
            </div>
            <h5>${data.name}</h5>
            <p>${data.discripion}</p>
            </li>
            `;
  });
});

btn_sick.addEventListener("click", () => {
  ul.innerHTML = "";

  data.map((data) => {
    if (data.type === "sick") {
      ul.innerHTML += `
        <li value=${data.price}>
        <div>
        </div>
        <h5>${data.name}</h5>
        <p>${data.discripion}</p>
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
          <li value=${data.price}>
          <div>
          </div>
          <h5>${data.name}</h5>
          <p>${data.discripion}</p>
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
          <li value=${data.price}>
          <div>
          </div>
          <h5>${data.name}</h5>
          <p>${data.discripion}</p>
          </li>
          `;
    }
  });
});

let anchor = document.querySelector(".anchor");

let active = document.querySelectorAll(".anc");

let item = document.getElementById("item");
let c_item = document.getElementById("count_item");
let total = document.getElementById("price");

let count = 0;
let sum = 0;
let price = [];

anchor.addEventListener("click", (e) => {
  for (let i = 0; i < active.length; i++) {
    if (e.target == active[i]) {
      active[i].classList.add("active");
    } else {
      active[i].classList.remove("active");
    }
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    item.style.transform = "scale(1)";
    console.log(e.target);
    count++;
    item.innerHTML = count;
    c_item.innerHTML = count;
    price.push(e.target.value);
    sum += e.target.value;
    total.innerHTML = `${sum}.0  ₱`;
  }
});

//Add some buy product that will he Ui on the nav
