// select All elements first

const formSelect = document.querySelector("form");
const ulSelect = document.querySelector("ul");
const inputSelector = document.querySelector("input");
const buttonSelect = document.querySelector(".delete");
// const container = document.querySelector(".container")
// const ul = document.querySelector("ul")

// create a function for submit form

const savetodo = (e) => {
  e.preventDefault();

  // create element
  let listSelector = document.createElement("li");
  const buttonSelector = document.createElement("button");
  buttonSelector.innerHTML = '<i class="fa-solid fa-trash"></i>';

  // inser in element
  listSelector.innerText = inputSelector.value;
  listSelector.className = "list-group-item ";

  buttonSelector.className = "btn btn-sm btn-danger lidel float-end";

  listSelector.appendChild(buttonSelector);
  ulSelect.appendChild(listSelector);

  // console.log(listSelector)
  formSelect.reset();
};

formSelect.addEventListener("submit", savetodo);

const todoDeleted = (e) => {
  if (e.target.className.includes("lidel"));
  {
    let listSelector = e.target.parentElement;
    ulSelect.removeChild(listSelector);
    // console.log(e.target.className);
  }
};

ulSelect.addEventListener("click", todoDeleted);

const clearAll = (e) => {
  if (e.target.className.includes("delete"));
  {
    let allList = document.querySelectorAll("li");
    ulSelect.remove();
  }
};

buttonSelect.addEventListener("click", clearAll);

// buttonSelect.addEventListener("click" , ()=>{
//   console.log(ul.children)
//   let alllist = document.querySelectorAll("li")
//   ulSelect.remove()
// })
