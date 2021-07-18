const focusForm = document.querySelector("#focus-form");
const focusInput = focusForm.querySelector("input");
const today = document.querySelector("#today");
const focus = document.querySelector("#focus");
const focusImg = focus.querySelector("img");
const focusText = focus.querySelector("span");

const CHECKED_KEY = "checked";
const THROUGH_KEY = "through";
const FOCUS_KEY = "focus";
const UNCHECKED_PATH = "./icon/unchecked.png";
const CHECKED_PATH = "./icon/checked.png";

let isChecked = localStorage.getItem(CHECKED_KEY);

function clickedBox(){
    isChecked = localStorage.getItem(CHECKED_KEY);

    if(isChecked === null || isChecked==="0"){
        localStorage.setItem(CHECKED_KEY, "1");
    } else if (isChecked === "1"){
        localStorage.setItem(CHECKED_KEY, "0");
    }
    paintFocus();
}

focusImg.addEventListener("click", clickedBox);

function onFocusSubmit(event){
    event.preventDefault();
    focusForm.classList.add(HIDDEN_CLASSNAME);

    const newFocus = focusInput.value;
    localStorage.setItem(FOCUS_KEY, newFocus);
    localStorage.setItem(DATE_KEY, new Date().getDate());

    paintFocus();
}

function paintFocus(){
    isChecked = localStorage.getItem(CHECKED_KEY);

    if(isChecked === null || isChecked==="0"){
        focusImg.src = UNCHECKED_PATH;
        focus.classList.remove(THROUGH_KEY);

    } else if (isChecked === "1"){
        focusImg.src = CHECKED_PATH;
        focus.classList.add(THROUGH_KEY);
    }
    focusText.innerText = localStorage.getItem(FOCUS_KEY);

    today.classList.remove(HIDDEN_CLASSNAME);
    focus.classList.remove(HIDDEN_CLASSNAME);
}

if(savedDate !== String(new Date().getDate())){
    localStorage.removeItem(FOCUS_KEY);
}

const savedFocus = localStorage.getItem(FOCUS_KEY);

if(savedUsername === null && savedFocus === null){
    today.classList.add(HIDDEN_CLASSNAME);
    focus.classList.add(HIDDEN_CLASSNAME);
}else if(savedUsername !== null && savedFocus === null){
    focusForm.classList.remove(HIDDEN_CLASSNAME);
    focusForm.addEventListener("submit", onFocusSubmit); 
} else{
    paintFocus();
}