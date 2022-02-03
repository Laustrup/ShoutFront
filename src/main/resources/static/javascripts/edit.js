
editContent();

function renderEdit(postId) {

    sessionStorage.setItem("post_id",postId);
    window.location.href("http://localhost:8080/edit_post/?pid="+postId);

}

async function editContent() {

    let postId = sessionStorage.getItem("post_id");

    const response = await fetch("http://localhost:8090/post/:" + postId);
    const post = await response.json();

    document.getElementById('edit_content').innerHTML = `
    <section id="post_edit_display">
        <h3>${post.title}</h3>
        <h4>${post.content}</h4>
        <p>Written: ${post.date}</p>
    </section>
    
    <section>
        <h2>Change it to:</h2>
        <form>
            <input type="text" id="new_post_title" placeholder="Title..." required>
            <input type="text" id="new_post_content" placeholder="Content..." required>
            <button type="submit" onclick="editPost(post)">Change</button>
        </form>
    </section>
    `

}

function editPost(post) {

    const edited = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: post.id,
            author: post.author,
            content: post.content,
            date: post.date,
            hashtags: post.hashtags,
            isPoliticalCorrect: post.isPoliticalCorrect,
            comments: post.comments
        })
    }

    fetch("http://localhost:8090/post", edited);
}