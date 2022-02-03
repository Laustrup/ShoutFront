
function createUser() {

    // Attributes from form
    let username = document.getElementById('new_user_username');
    let password = document.getElementById('new_user_password');
    let description = document.getElementById('new_user_description');
    let gender = document.getElementById('new_user_gender');

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
            gender: gender
        })
    }

    fetch("http://localhost:8090/user", user)
}

function createPost() {

    // Attributes from form
    let title = document.getElementById('new_post_title');
    let content = document.getElementById('new_post_content');
    let hashtag = document.getElementById('new_post_hashtags');
    let isPoliticalCorrect = document.getElementById('new_post_political_correct');

    const hashtags = hashtag.split("#");

    const post = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author: sessionStorage.getItem("user"),
            title: title,
            content: content,
            hashtags: hashtags,
            isPoliticalCorrect: isPoliticalCorrect,
            date: Date.now()
        })
    }

    fetch("http://localhost:8090/post", post);
}

function createComment(postId) {

    // Attributes from form
    let content = document.getElementById('new_comment_content');

    const response = fetch('http://localhost:8090/post/:'+postId);
    const post = response.json();

    const comment = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author: sessionStorage.getItem("user"),
            content: content,
            date: Date.now(),
            post: post
        })
    }

    fetch("http://localhost:8090/comment", comment);
}