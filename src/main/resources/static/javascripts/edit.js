
async function editPostTitle(id) {

    const title = document.getElementById("new_post_title").value;
    const response = await fetch("http://localhost:8090/post/:"+id);
    const post = await response.json();

    const edited = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: post.id,
            author: post.author,
            title: title,
            content: post.content,
            hashtags: post.hashtags,
            isPoliticalCorrect: post.isPoliticalCorrect,
            date: Date.now()
        })
    }
    fetch("http://localhost:8090/post",edited);
}

async function editPostContent(id) {
    const content = document.getElementById("new_post_content").value;
    const response = await fetch("http://localhost:8090/post/:"+id);
    const post = await response.json();

    const edited = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: post.id,
            author: post.author,
            title: post.title,
            content: content,
            hashtags: post.hashtags,
            isPoliticalCorrect: post.isPoliticalCorrect,
            date: Date.now()
        })
    }
    fetch("http://localhost:8090/post",edited);
}