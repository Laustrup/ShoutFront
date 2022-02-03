
function validateLogin() {

    // Attributes from form
    let username = document.getElementById('login_username');
    let password = document.getElementById('login_password');

    // Attributes to HTML
    const loginMismatch = document.getElementById('login_mismatch')

    // Checks if password fits username in db
    const allow_login = fetch('http://localhost:8090/allow_login/:' + username + '/:' + password).json();

    if (allow_login===true) {
        const user = fetch('http://localhost:8090/user/:' + username).json();
        sessionStorage.setItem("user",user);
        window.location.href("/dashboard/?username="+username);
    }
    else {
        let message = 'Password or username doesn\' fit';
        loginMismatch.innerText = message.join();
    }
}
function logout() {
    sessionStorage.removeItem("user");
    window.location.href("/");
}