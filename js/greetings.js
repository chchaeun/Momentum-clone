const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
//const todoForm = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);
    focusForm.classList.remove(HIDDEN_CLASSNAME);
    focusForm.addEventListener("submit", onFocusSubmit);
}

function paintGreetings(username){
    const greets = [
        "night", "morning", "afternoon", "evening", 
    ]
    const hour = new Date().getHours();
    let greet;
    if((hour >= 0 && hour <= 5) || hour >= 22){
        greet = greets[0];
    }
    else if(hour >= 6 && hour <= 11){
        greet = greets[1];
    }
    else if(hour >= 12 && hour <= 17){
        greet = greets[2];
    }
    else if(hour >= 18 && hour <= 21){
        greet = greets[3];
    }
    greeting.innerText = `Good ${greet}, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    // show the greetings
    paintGreetings(savedUsername);
}