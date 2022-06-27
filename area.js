const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");
function calculateArea(a,b){
    const areaTriangle = 1/2* a * b;
    return areaTriangle;
}
function calculateAreaOfTriangle(){
    const areaOfTriangle = calculateArea(Number(sides[0].value), Number(sides[1].value));
    outputEl.innerText = "The area of the triangle is" + areaOfTriangle ;
}
areaBtn.addEventListener("click",calculateAreaOfTriangle);