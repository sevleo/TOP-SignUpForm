const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');


passwordInput.addEventListener("input", handlePassword);
confirmPasswordInput.addEventListener("input", handleConfirmPassword);

function handlePassword(e) {
    if (confirmPasswordInput.value) {
        if (confirmPasswordInput.value !== e.target.value) {
            confirmPasswordInput.classList.remove('valid');
            confirmPasswordInput.classList.add('invalid');
        }
        else {
            confirmPasswordInput.classList.remove('invalid');
            confirmPasswordInput.classList.add('valid');
        }
    }
    else {
        confirmPasswordInput.classList.remove('invalid');
        confirmPasswordInput.classList.remove('valid');
    }
    if (passwordInput.value === "") {
        confirmPasswordInput.classList.remove('invalid');
        if (confirmPasswordInput.value === "") {
            confirmPasswordInput.classList.remove('valid');
        }
        else {
            confirmPasswordInput.classList.add('valid');
        }
    }
}

function handleConfirmPassword(e) {
    if (e.target.value === "") {
        confirmPasswordInput.classList.remove('invalid');
        confirmPasswordInput.classList.remove('valid');
    }
    else {
        if (passwordInput.value === "") {
            confirmPasswordInput.classList.remove('invalid');
            confirmPasswordInput.classList.add('valid');
        }
        else if (passwordInput.value !== e.target.value) {
            confirmPasswordInput.classList.remove('valid');
            confirmPasswordInput.classList.add('invalid');
        }
        else {
            confirmPasswordInput.classList.remove('invalid');
            confirmPasswordInput.classList.add('valid');
        }
    }

}

