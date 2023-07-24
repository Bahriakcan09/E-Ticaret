const buttonGroup=document.querySelector("#butonGrup");
const yemekOdasiBtn=document.querySelector("#btn1");
const oturmaOdasiBtn=document.querySelector("#btn2");
const calismaOdasiBtn=document.querySelector("#btn3");
const yatakOdasiBtn=document.querySelector("#btn4");

const yemekOdasiAlan=document.querySelector("#yemekOdasi");
const oturmaOdasiAlan=document.querySelector("#oturmaOdasi");
const calismaOdasiAlan=document.querySelector("#calismaOdasi");
const yatakOdasiAlan=document.querySelector("#yatakOdasi");

eventListeners();
function eventListeners(){
    yemekOdasiBtn.addEventListener("click",yemekOdasiEvent);
    oturmaOdasiBtn.addEventListener("click",oturmaOdasiEvent);
    calismaOdasiBtn.addEventListener("click",calismaOdasiEvent);
    yatakOdasiBtn.addEventListener("click",yatakOdasiEvent);
}

function yemekOdasiEvent(e){
oturmaOdasiAlan.setAttribute("style","display:none");
calismaOdasiAlan.setAttribute("style","display:none");
yatakOdasiAlan.setAttribute("style","display:none");
yemekOdasiAlan.setAttribute("style","display:block");
}

function oturmaOdasiEvent(e){
    yemekOdasiAlan.setAttribute("style","display:none");
    calismaOdasiAlan.setAttribute("style","display:none");
    yatakOdasiAlan.setAttribute("style","display:none");
oturmaOdasiAlan.setAttribute("style","display:block");
}

function calismaOdasiEvent(e){
    yemekOdasiAlan.setAttribute("style","display:none");
    oturmaOdasiAlan.setAttribute("style","display:none");
    yatakOdasiAlan.setAttribute("style","display:none");
    calismaOdasiAlan.setAttribute("style","display:block");
}

function yatakOdasiEvent(e){
    yemekOdasiAlan.setAttribute("style","display:none");
    oturmaOdasiAlan.setAttribute("style","display:none");
    calismaOdasiAlan.setAttribute("style","display:none");
    yatakOdasiAlan.setAttribute("style","display:block");
}