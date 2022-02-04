
userInfo();

async function validateLogin() {
    const response = await fetch('http://localhost:8090/user/:' + 1);
    const user = await response.json();
    sessionStorage.setItem("user",user);
    document.location.href = 'http://localhost:8080/dashboard/';
}
function logout() {
    sessionStorage.removeItem("user");
    document.location.href = 'http://localhost:8080/';
}

async function userInfo() {
    const user = sessionStorage.getItem("user");
    document.getElementById("user_info_content").innerHTML += `<h2>Welcome ${user.username}</h2>`
}