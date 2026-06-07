let login =document.getElementById("login");
let logout = document.getElementById("logout");
let profile = document.getElementById("profile");
let dashboard = document.getElementById("dashboard");

let user = sessionStorage.getItem("username");


if (user != null && user !== "") {
    logout.style.visibility = "visible";
    login.style.display = "none";

    if (sessionStorage.getItem("role") === "admin") {
        dashboard.style.visibility = "visible";

        dashboard.innerText = "Bienvenido " + user.toUpperCase();
    }
    else {
        profile.style.visibility = "visible";

        profile.innerText = "Bienvenido " + user.toUpperCase();
    }
}

else {
    login.style.visibility = "visible";
}

logout.addEventListener("click", function () {
    sessionStorage.clear()
    login.style.visibility = "visible";
    login.style.display = "block";
    logout.style.display = "none";
    profile.style.display = "none";

});