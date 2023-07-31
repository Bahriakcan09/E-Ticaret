const listItems = document.querySelectorAll("#left-bar .list-group-item");

listItems.forEach(item => {
  item.addEventListener("click", function(e) {
    listItems.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
  });
});


const addBtn=document.getElementById("add");
let showElement=(item)=>item.setAttribute("style","display:flex !important");
let hideElement=(item)=>item.setAttribute("style","display:none !important");
const cancelBtn=document.getElementById("cancel");
const productAdd=document.querySelector("#productAdd");


cancelBtn.addEventListener("click",(e)=>{
    hideElement(productAdd);
    e.preventDefault();
})
addBtn.addEventListener("click",(e)=>{
    
    showElement(productAdd);
    e.preventDefault();
})
const mainCategories=document.querySelectorAll("#left-category button");

mainCategories.forEach(button => {
  button.addEventListener("click", function(e) {
    mainCategories.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
  });
});