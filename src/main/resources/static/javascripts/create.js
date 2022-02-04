
function createUser() {

    // Attributes from form
    const username = document.getElementById("new_user_username").value;
    const password = document.getElementById("new_user_password").value;
    const description = document.getElementById("new_user_description").value;
    const gender = document.getElementById("new_user_gender").value;

    const user = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            description: description,
            gender: gender,
        })
    }

    fetch("http://localhost:8090/user", user);
}

async function createPost() {

    // Attributes from form
    const title = document.getElementById("new_post_title").value;
    const content = document.getElementById("new_post_content").value;
    const hashtag = document.getElementById("new_post_hashtags").value;
    const isPoliticalCorrect = document.getElementById("new_post_political_correct").value;

    const response = await fetch("http://localhost:8090/user/:"+sessionStorage.getItem("user_id"));
    const author = await response.json();

    const post = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author: author,
            title: title,
            content: content,
            hashtag: hashtag,
            isPoliticalCorrect: isPoliticalCorrect,
            date: Date.now()
        })
    }

    fetch("http://localhost:8090/post/:"+author.id, post);
}

async function createComment(postId) {

    // Attributes from form
    const content = document.getElementById("new_comment_content").value;

    let response = await fetch("http://localhost:8090/post/:"+postId);
    const post = await response.json();

    response = await fetch("http://localhost:8090/user/:"+sessionStorage.getItem("user_id"));
    const author = await response.json();

    const comment = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author: author,
            content: content,
            date: Date.now(),
            post: post
        })
    }

    fetch("http://localhost:8090/comment", comment);
}