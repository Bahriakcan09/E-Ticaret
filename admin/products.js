const addBtn=document.getElementById("add");
let showElement=(item)=>item.setAttribute("style","display:flex !important");
let hideElement=(item)=>item.setAttribute("style","display:none !important");

addBtn.addEventListener("click",()=>{
    const productAdd=document.querySelector("#productAdd");
    showElement(productAdd);

})