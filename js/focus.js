const focusForm = document.querySelector("#focus-form");
const focusInput = focusForm.querySelector("input");
const todayText = document.querySelector("#today");
const focus = document.querySelector("#focus");
const FOCUS_KEY = "focus";
const UNCHECKED_PATH = "./icon/unchecked.png";
const CHECKED_PATH = "./icon/checked.png";


function checkedFocus(){
    const isChecked = localStorage.getItem("checked");
    const focusImg = focus.querySelector("img");
    if(isChecked === null || isChecked==="0"){
        focusImg.src = CHECKED_PATH;
        focus.classList.add("through");
        localStorage.setItem("checked", "1");

    } else if (isChecked === "1"){
        focusImg.src = UNCHECKED_PATH;
        focus.classList.remove("through");
        localStorage.setItem("checked", "0");
    }
}

// problem: 새로고침하면 무조건 unchecked 상태됨

function onFocusSubmit(event){
    event.preventDefault();
    focusForm.classList.add(HIDDEN_CLASSNAME);

    const newFocus = focusInput.value;
    localStorage.setItem(FOCUS_KEY, newFocus);
    localStorage.setItem(DATE_KEY, new Date().getDate());
    paintFocus(newFocus);
}

function paintFocus(savedFocus){
    todayText.classList.remove(HIDDEN_CLASSNAME);
    const checkbox = document.createElement("img");
    checkbox.src = UNCHECKED_PATH;
    checkbox.addEventListener("click", checkedFocus);
    const span = document.createElement("span");
    span.innerText = savedFocus;
    focus.appendChild(checkbox);
    focus.appendChild(span);
    focus.classList.remove(HIDDEN_CLASSNAME);
}

if(savedDate !== String(new Date().getDate())){
    localStorage.removeItem(FOCUS_KEY);
}

const savedFocus = localStorage.getItem(FOCUS_KEY);

if(savedUsername === null && savedFocus === null){
    todayText.classList.add(HIDDEN_CLASSNAME);
    focus.classList.add(HIDDEN_CLASSNAME);
}else if(savedUsername !== null && savedFocus === null){
    focusForm.classList.remove(HIDDEN_CLASSNAME);
    focusForm.addEventListener("submit", onFocusSubmit); 
} else{
    paintFocus(savedFocus);
}