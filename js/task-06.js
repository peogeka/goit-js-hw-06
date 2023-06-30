 const input = document.getElementById('validation-input');

input.addEventListener('blur', function() {
    const desiredLength = input.getAttribute('data-length');
    const enteredLength = input.value.length;

if (enteredLength == desiredLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
} else {
        input.classList.remove('valid');
        input.classList.add('invalid');
      }
});