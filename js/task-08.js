const form = document.querySelector('.login-form');
    
function handleSubmit(evt) {
evt.preventDefault();
const { email, password } = evt.currentTarget.elements;

if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены");
    return;
}

const formData = {
    mail: email.value,
    password: password.value,
};

console.log(formData);

evt.currentTarget.reset();
}

form.addEventListener("submit", handleSubmit);
