const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.getAttribute('data-length');
const checkInputValueLength = (event) => {
        const CurrentValue = event.currentTarget.value
        if (Number(dataLength) === Number(CurrentValue.length)) {
                inputEl.classList.add("valid")
        } else {
                inputEl.classList.add("invalid")
        }
}
inputEl.addEventListener("blur", checkInputValueLength)