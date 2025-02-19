const inputContainer = document.getElementById("userEmailContainer");
const input = document.getElementById("userEmail");
const form = document.getElementById("newsletterForm");

form.onsubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);

    const email = values.userEmail;
    const isEmailValid = emailRegex.test(email);

    if(!isEmailValid){
        return inputContainer.classList.add("error");
    };

    return window.location.href = "/success-message/index.html";
};

input.onfocus = () => inputContainer.classList.remove("error");