let form_pass = document.getElementById("restart_pass");
let password_feed = document.getElementById('password_feedback');
let confirm_password_feed = document.getElementById('confirm_password_feedback');

form_pass.addEventListener("submit", function (event) {
    event.preventDefault();

    let new_password = document.getElementById("new_password").value.trim();
    let confirm_new_password = document.getElementById("confirm_new_password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    console.log(users);

    let user = users.find(u => u.username === sessionStorage.username);

    console.log(user);

    if (new_password !== confirm_new_password) {
        confirm_password_feed.innerText = "Las contraseñas no coinciden.";
        confirm_password_feed.style.display = "block";

        setTimeout(() => {
            confirm_password_feed.style.display = "none";
        }, 3500);
    }

    else if (!new_password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        password_feed.style.display = "block";
        password_feed.innerText = "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.";

        setTimeout(() => {
            password_feed.style.display = "none";
        }, 3500);
    }

    else if (new_password === "" || confirm_new_password === "") {
        password_feed.style.display = "block";
        password_feed.innerText = "Por favor, completa ambos campos de contraseña.";

        setTimeout(() => {
            password_feed.style.display = "none";
        }, 3500);
    }

    else {

        let users = JSON.parse(localStorage.getItem("users")) || [];

       let new_user = {
            nombre: user.nombre,
            apellido: user.apellido,
            username: user.username,
            email: user.email,
            direccion: user.direccion,
            fecha_nacimiento: user.fecha_nacimiento,
            role: user.role,
            password: new_password,
        }

        console.log(new_user);

        users.remove(user);

        users.push(new_user);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Contraseña actualizada exitosamente.");

        form_pass.reset();
        window.location.href = "login.html";
    }

})

