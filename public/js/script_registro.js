let signUpForm = document.getElementById("signup_form");

let nombre_feedback = document.getElementById("nombre_feedback");
let apellido_feedback = document.getElementById("apellido_feedback");
let username_feedback = document.getElementById("username_feedback");
let email_feedback = document.getElementById("email_feedback");
let fecha_nacimiento_feedback = document.getElementById("fecha_nacimiento_feedback");
let password_feedback = document.getElementById("password_feedback");
let password_confirmation = document.getElementById("confirmPassword_feedback");

signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmacion = document.getElementById("confirmPassword").value.trim();
    let role = document.getElementById("role").value.trim();

    let user = JSON.parse(localStorage.getItem("user " + username)) || {};

    console.log(user);

    if (nombre === "") {
        nombre_feedback.innerText = "El nombre no puede estar vacío.";
        nombre_feedback.style.display = "block";

        setTimeout(() => {
            nombre_feedback.style.display = "none";
        }, 3500);
    }

    else if (apellido === "") {
        apellido_feedback.innerText = "El apellido no puede estar vacío.";
        apellido_feedback.style.display = "block";

        setTimeout(() => {
            apellido_feedback.style.display = "none";
        }, 3500);
    }
    else if (username === "") {
        username_feedback.innerText = "El nombre de usuario no puede estar vacío";
        nombre_feedback.style.display = "block";

        setTimeout(() => {
            nombre_feedback.style.display = "none";
        }, 3500);
    }
    else if (username === user.username) {
        username_feedback.innerText = "El nombre de usuario ya existe. Por favor, elige otro.";
        username_feedback.style.display = "block";
        setTimeout(() => {
            nombre_feedback.style.display = "none";
        }, 3500);
    }
    else if (email === "") {
        email_feedback.innerText = "El email no valido";
        email_feedback.style.display = "block";
        setTimeout(() => {
            email_feedback.style.display = "none";
        }, 3500);
    }
    else if (!email.includes("@") || !email.includes(".")) {
        email_feedback.innerText = "El email no es válido.";
        email_feedback.style.display = "block";
        setTimeout(() => {
            email_feedback.style.display = "none";
        }, 3500);
    }
    else if (email === user.email) {
        email_feedback.innerText = "El email ya está registrado. Por favor, elige otro.";
        email_feedback.style.display = "block";
        setTimeout(() => {
            email_feedback.style.display = "none";
        }, 3500);
    }
    else if (fecha_nacimiento === "") {
        fecha_nacimiento_feedback.innerText = "La fecha de nacimiento no puede estar vacía.";
        fecha_nacimiento_feedback.style.display = "block";
        setTimeout(() => {
            fecha_nacimiento_feedback.style.display = "none";
        }, 3500);
    }
    else if (new Date(fecha_nacimiento) > new Date()) {
        fecha_nacimiento_feedback.innerText = "La fecha de nacimiento no puede ser en el futuro.";
        fecha_nacimiento_feedback.style.display = "block";
        setTimeout(() => {
            fecha_nacimiento_feedback.style.display = "none";
        }, 3500);
    }
    else if (new Date().getFullYear() - new Date(fecha_nacimiento).getFullYear() < 18) {
        fecha_nacimiento_feedback.innerText = "Debes tener al menos 18 años para registrarte.";
        fecha_nacimiento_feedback.style.display = "block";
        setTimeout(() => {
            fecha_nacimiento_feedback.style.display = "none";
        }, 3500);
    }
    else if (password === "" || !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        password_feedback.innerText = "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.";
        password_feedback.style.display = "block";
        setTimeout(() => {
            password_feedback.style.display = "none";
        }, 3500);
    }
    else if (confirmacion === "") {
        password_confirmation.innerText = "La confirmación de contraseña no puede estar vacía.";
        password_confirmation.style.display = "block";
        setTimeout(() => {
            password_confirmation.style.display = "none";
        }, 3500);
    }
     else if (password !== confirmacion) {
        password_confirmation.innerText = "Las contraseñas no coinciden.";
        password_confirmation.style.display = "block";
        setTimeout(() => {
            password_confirmation.style.display = "none";
        }, 3500);
    }
    else {

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let user = {
            nombre: nombre,
            apellido: apellido,
            username: username,
            email: email,
            fecha_nacimiento: fecha_nacimiento,
            direccion: direccion,
            password: password,
            role: role
        }

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Registro exitoso. Ahora puedes iniciar sesión.");

        window.location.href = "/ludus_arcanus_web/login.html";
    }
})