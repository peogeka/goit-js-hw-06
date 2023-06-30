const inputEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");
 const valueEl = inputEl.value;

const changeSize = () => {
    
    textEl.style.fontSize = valueEl + "px";
    
}

inputEl.addEventListener("input", changeSize)