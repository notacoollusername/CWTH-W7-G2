function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const checkpassword = document.getElementById("checkpassword").value;

    const nameError = document.getElementById("name-error");

    const emailError = document.getElementById(
        "email-error"
    );
    const passwordError = document.getElementById(
        "password-error"
    );
    const checkpasswordError = document.getElementById(
        "checkpassword-error"
    );
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    checkpassword.textContent="";


    let isValid = true;

    if (name === "") {
        nameError.textContent =
            "نام خود را وارد کنید";
        isValid = false;
    }
    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "ایمیل خود را وارد کنید";
        isValid = false;
    }
    if (password === "" ) {
        passwordError.textContent =
            "رمز را وارد کنید ";
        isValid = false;
    }
    if (password != checkpassword) {
        checkpasswordError.textContent=
        "از صحت رمز مظمعن شوید"
        isValid = false;

    }
    return isValid;
}