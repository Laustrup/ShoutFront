
function createUser() {

    // Attributes from form
    const username = document.getElementById('new_user_username').value;
    const password = document.getElementById('new_user_password').value;
    const description = document.getElementById('new_user_description').value;
    const gender = document.getElementById('new_user_gender').value;

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
            posts: null,
            comments: null
        })
    }

    fetch("http://localhost:8090/user", user);
}

function createPost() {

    // Attributes from form
    const title = document.getElementById('new_post_title').value;
    const content = document.getElementById('new_post_content').value;
    const hashtag = document.getElementById('new_post_hashtags').value;
    const isPoliticalCorrect = document.getElementById('new_post_political_correct').value;

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
    const content = document.getElementById('new_comment_content').value;

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