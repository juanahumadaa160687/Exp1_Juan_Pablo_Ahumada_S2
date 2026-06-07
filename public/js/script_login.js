let form = document.getElementById("login");
let feedback_username = document.getElementById("feedback_username");
let feedback_password = document.getElementById("feedback_password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(x => x.username === username);

    let user_username = user.username;
    let user_password = user.password;

    console.log(user);

    if (user_username === null) {
        feedback_username.innerHTML = "El usuario no existe. Intenta nuevamente o registrate";
        feedback_username.style.display = "block";

        setTimeout(() => {
            feedback_username.style.display = "none";
        }, 3500);
    }

    else {
        let user_role = user.role;

        console.log(user_role);
        console.log(user_username);
        console.log(user_password);

        if (username === user_username && password === user_password) {

            sessionStorage.setItem("username", user_username);
            sessionStorage.setItem("password", user_password);
            sessionStorage.setItem("role", user_role);

            window.location.href = "index.html";
        }
        else {
            feedback_password.innerText = "Contraseña incorrecta. Intenta nuevamente";
            feedback_password.style.display = "block";

            setTimeout(() => {
                feedback_username.style.display = "none";
            }, 3500);
        }
    }
})

