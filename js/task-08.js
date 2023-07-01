const formLogin = document.querySelector(".login-form")
formLogin.addEventListener("submit", handlerSubmit);
function handlerSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements
    if (!email.value.trim() || !password.value.trim()){
        const message = "insert all feld";
        alert(message)
} else {
    const data = {
        email: email.value,
        password: password.value
    }
        console.log(data)
}
event.target.reset();
}