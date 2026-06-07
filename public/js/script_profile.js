let profile_nombre = document.getElementById("nombre");
let profile_apellido = document.getElementById("apellido");
let profile_username = document.getElementById("username");
let profile_email = document.getElementById("email");
let profile_direccion = document.getElementById("direccion");
let profile_fecha_nacimiento = document.getElementById("fecha_nacimiento");

let b_borrar = document.getElementById("b_borrar");
let b_pass = document.getElementById("b_pass");

let usuarios = JSON.parse(localStorage.getItem("users")) || [];

let usuario = usuarios.find(u => u.username === sessionStorage.username);

if (usuario != null) {
    profile_nombre.value = usuario.nombre;
    profile_apellido.value = usuario.apellido;
    profile_username.value = usuario.username;
    profile_email.value = usuario.email;
    profile_direccion.value = usuario.direccion;

    let fecha_nac = new Date(usuario.fecha_nacimiento);
    let dia = String(fecha_nac.getDate()).padStart(2, '0');
    let mes = String(fecha_nac.getMonth() + 1).padStart(2, '0');
    let anio = fecha_nac.getFullYear();
    profile_fecha_nacimiento.value = `${dia}-${mes}-${anio}`;
}

b_borrar.addEventListener("click", () => {

    usuarios.remove(usuario);

    localStorage.setItem("users", JSON.stringify(usuarios));

    sessionStorage.clear();

    alert("Usuario eliminado exitosamente.");

    window.location.href = "index.html";

})

b_pass.addEventListener("click", () => {
    window.location.href = "restart_password.html";
})