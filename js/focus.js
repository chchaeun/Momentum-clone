const focusForm = document.querySelector("#focus-form");
const focusInput = focusForm.querySelector("input");
const todayText = document.querySelector("#today");
const focusCheck = document.querySelector("#focus-check");
const focusText = focusCheck.querySelector("label");

const FOCUS_KEY = "focus";

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
    focusText.innerText = savedFocus;
    focusText.classList.remove(HIDDEN_CLASSNAME);
}

if(savedDate !== String(new Date().getDate())){
    localStorage.removeItem(FOCUS_KEY);
}

const savedFocus = localStorage.getItem(FOCUS_KEY);

if(savedUsername === null && savedFocus === null){
    todayText.classList.add(HIDDEN_CLASSNAME);
    focusText.classList.add(HIDDEN_CLASSNAME);
}else if(savedUsername !== null && savedFocus === null){
    focusForm.classList.remove(HIDDEN_CLASSNAME);
    focusForm.addEventListener("submit", onFocusSubmit); 
} else{
    paintFocus(savedFocus);
}