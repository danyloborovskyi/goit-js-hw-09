const formData = {
    email: "",
    message: ""
}

const localStorageKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");

form.addEventListener("submit", handleSubmit);
form.addEventListener("input", handleInput)

function handleInput() {
    
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim()
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
    }
    

populate();

function populate() {
    const message = localStorage.getItem(localStorageKey);
    if (message) {
        const parsedData = JSON.parse(message);
        form.elements.email.value = parsedData.email || "";
        form.elements.message.value = parsedData.message || "";
    }
}

function handleSubmit(event) { 
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (email === "" || message === "") {
        return alert("Fill please all fields")
    } 

    console.log({ email, message});
    event.currentTarget.reset();
    localStorage.removeItem(localStorageKey);  
}

