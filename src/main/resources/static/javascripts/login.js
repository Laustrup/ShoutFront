
async function validateLogin() {
    const response = await fetch("http://localhost:8090/user/:" + 1);
    const user = await response.json();
    sessionStorage.setItem("user_id",user.id);
    sessionStorage.setItem("username",user.username)
    document.location.href = 'http://localhost:8080/dashboard/';
}
function logout() {
    sessionStorage.removeItem("user");
    document.location.href = 'http://localhost:8080/';
}

