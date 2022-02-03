
function deleteUser() {
    let user = sessionStorage.getItem("user");
    fetch("http://localhost:8090/delete_user/:"+user.id);
    window.location.href("/");
}

function deletePost(id) {
    fetch("http://localhost:8090/delete_post/:" + id);
}

function deleteComment(id) {
    fetch("http://localhost:8090/delete_comment/:" + id);
}