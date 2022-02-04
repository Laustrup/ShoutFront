
userInfo();
renderPosts();

async function renderPosts() {

    const response = await fetch("http://localhost:8090/posts");
    const posts = await response.json();
    renderHTML(posts);
}

async function userInfo() {
    let username = sessionStorage.getItem("username");
    document.getElementById("user_info_content").innerHTML += `<h2>Welcome ${username}</h2>`
}

async function sortPosts() {

    const hashtag = document.getElementById("sort_search").value;

    const response = await fetch("http://localhost:8090/posts");
    const posts = await response.json();

    posts.sort(posts.localeCompare(hashtag));
    renderHTML(posts);
}

function renderHTML(posts) {
    let userId = sessionStorage.getItem("user_id");
    for (let i = 0; i < posts.length;i++) {

        // Post section, will add delete button, if user is creator
        if (posts[i].author.id === userId) {
            document.getElementById("dashboard_content").innerHTML += `
            <div><h3>${posts[i].title}</h3></div>
            <div><p>By ${posts[i].author.username}</p></div>
            <div><p>Written: ${posts[i].date}</p></div>
            <div><h4>${posts[i].content}</h4></div>
            <div><p>#tag = ${posts[i].hashtag}</p></div>
            <div><input type="text" id="new_post_title" onchange="editPostTitle(${posts[i].id})" placeholder="Change title"></div>
            <div><textarea id="new_post_content" onchange="editPostContent(${posts[i].id})" placeholder="Change content"></textarea></div>            
            <div><button onclick="deletePost(${posts[i].id})">Delete</button></div>
            `
        }
        else {
            document.getElementById("dashboard_content").innerHTML += `
                <div><h3>${posts[i].title}</h3></div>
                <div><p>By ${posts[i].author.username}</p></div>
                <div><p>Written: ${posts[i].date}</p></div>
                <div><p>#tag = ${posts[i].hashtag}</p></div>
                <div><h4>${posts[i].content}</h4></div>
            `
        }

        /* Comments are no longer relevant
        // Comments of post section, will add delete button, if user is creator
        for (let j = 0; j < posts[i].comments;j++) {
            if (posts[i].comments[j].author.id === userId) {
                document.getElementById("dashboard_content").innerHTML += `
                <section class="comment_container">
                    <div><h5>${posts[i].comments[j].author.username}</h5></div>
                    <div><p>${posts[i].comments[j].content}</p></div>
                    <div><p>Written: ${posts[i].comments[j].date}</p></div>
                    <div><button onclick="deleteComment(${posts[i].comments[j].id})">Delete</button></div>
                </section>
                `
            }
            else {
                document.getElementById("dashboard_content").innerHTML += `
                <section class="comment_container">
                    <div><h5>${posts[i].comments[j].author.username}</h5></div>
                    <div><p>${posts[i].comments[j].content}</p></div>
                    <div><p>Written: ${posts[i].comments[j].date}</p></div>
                </section>
                `
            }
        }

         */

        // End of post and as well a form for creating a new comment
        document.getElementById("dashboard_content").innerHTML += `
                <section class="create_comment_section">
                    <form>
                        <input type="text" placeholder="New comment..." required>
                        <button type="submit" onclick="createComment(${posts[i].id})">Reply</button>
                    </form>
                </section>
        `
    }
}


