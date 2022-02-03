
renderPosts();

async function renderPosts() {

    const response = await fetch("http://localhost:8090/posts");
    const posts = await response.json();

    for (let i = 0; i < posts.length;i++) {

        // Post section, will add delete button, if user is creator
        if (posts[i].author === sessionStorage.getItem("user")) {
            document.getElementById('dashboard_content').innerHTML += `
        <section class="post_section">
            <div><h3>posts[i].title</h3></div>
            <div><p>By posts[i].author.username</p></div>
            <div><h4>posts[i].content</h4></div>
            <div><button type="submit" onclick="renderEdit(posts[i].id)">Edit</button></div>
            <div><button onclick="deletePost(posts[i].id)">Delete</button></div>
            </section>
            <section class="comment_section">
            `
        }
        else {
            document.getElementById('dashboard_content').innerHTML += `
            <section class="post_section">
                <div><h3>posts[i].title</h3></div>
                <div><p>By posts[i].author.username</p></div>
                <div><h4>posts[i].content</h4></div>
                <section class="comment_section">
            `
        }

        // Comments of post section, will add delete button, if user is creator
        for (let j = 0; j < posts[i].comments.length;j++) {
            if (posts[i].comments[j].author === sessionStorage.getItem("user")) {
                document.getElementById('dashboard_content').innerHTML += `
                <section class="comment_container">
                    <div><h5>posts[i].comments[j].author.username</h5></div>
                    <div><p>posts[i].comments[j].content</p></div>
                    <div><p>Written: posts[i].comments[j].date</p></div>
                    <div><button onclick="deleteComment(posts[i].comments[j].id)">Delete</button></div>
                </section>
                `
            }
            else {
                document.getElementById('dashboard_content').innerHTML += `
                <section class="comment_container">
                    <div><h5>posts[i].comments[j].author.username</h5></div>
                    <div><p>posts[i].comments[j].content</p></div>
                    <div><p>Written: posts[i].comments[j].date</p></div>
                </section>
                `
            }
        }

        // End of post and as well a form for creating a new comment
        document.getElementById('dashboard_content').innerHTML += `
                <section class="create_comment_section">
                    <form>
                        <input type="text" placeholder="New comment..." required>
                        <button type="submit" onclick="createComment(posts[i].id)">Reply</button>
                    </form>
                </section>
            </section>
        </section>
        `
    }

}
