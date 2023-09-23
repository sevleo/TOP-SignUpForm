const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const submitButton = document.querySelector('button[type="submit"]');

passwordInput.addEventListener("input", handlePassword);
confirmPasswordInput.addEventListener("input", handleConfirmPassword);
submitButton.addEventListener("click", handleSubmitButton);

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

function handleSubmitButton(e) {
    let inputFields = document.querySelectorAll('input');
    let redirect = true;
    inputFields.forEach(field => {
        if ((!field.validity.valid && field.id !== 'confirm-password')
            || field.classList.contains('invalid') || 
            (field.id === 'confirm-password' && field.value === '')) {
            redirect = false;
            field.classList.add('animated');
            field.animate(
                [
                    { transform: 'translateX(0px)' },
                    { transform: 'translateX(10px)' },
                    { transform: 'translateX(-10px)' },
                    { transform: 'translateX(0px)' },
                    { transform: 'translateX(10px)' },
                    { transform: 'translateX(-10px)' },
                    { transform: 'translateX(0px)' }
                ],
                {
                    duration: 300,
                    easing: 'ease-in-out'
                }
            );
            field.nextElementSibling.animate(
                [
                    { transform: 'translateX(0px)' },
                    { transform: 'translateX(10px)' },
                    { transform: 'translateX(-10px)' },
                    { transform: 'translateX(0px)' },
                    { transform: 'translateX(10px)' },
                    { transform: 'translateX(-10px)' },
                    { transform: 'translateX(0px)' }
                ],
                {
                    duration: 300,
                    easing: 'ease-in-out'
                }
            )
            setTimeout(() => {
                field.classList.remove('animated');
            }, 300);
        }
    });
    if (redirect) {
        window.location.href = 'thank-you.html';
    }
}

