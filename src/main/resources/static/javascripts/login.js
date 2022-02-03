
function validateLogin() {
    const user = fetch('http://localhost:8090/user/:' + 1).then(data=>data.json());
    sessionStorage.setItem("user",user);
    window.location.href("http://localhost:8080/dashboard/?");
}
function logout() {
    sessionStorage.removeItem("user");
    window.location.href("/");
}