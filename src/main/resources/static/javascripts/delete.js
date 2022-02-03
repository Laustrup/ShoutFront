
function deleteUser() {
    let user = sessionStorage.getItem("user");
    fetch("https://localhost:8090/delete_user/:"+user.id);
    window.location.href("/");
}

function deletePost(id) {
    fetch("https://localhost:8090/post/:" + id);
}

function deleteComment(id) {
    fetch("https://localhost:8090/delete_comment/:" + id);
}