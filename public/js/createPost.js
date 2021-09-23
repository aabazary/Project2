const button_CreatePost = document.getElementById('create-post')
const button_SubmitComment = document.getElementById('submit-button')
const button_CancelComment = document.getElementById('cancel-button')

button_CreatePost.addEventListener('click', function () {
    // Open Form
    const form = document.getElementById('form')
    form.setAttribute('style', 'display: show;')
})

button_SubmitComment.addEventListener('click', function () {
    var pathStr = document.location.pathname.replace(/#/g, '')
    // Fix logic for gameID if adding more than 9 games
    var gameID = parseInt(pathStr.charAt(pathStr.length-1))
    const title = document.getElementById('title').value
    const content = document.getElementById('post').value
    console.log('phase 1')
    console.log(title)
    console.log(content)

    fetch('/forum/new', {
        method: "POST",
        body: JSON.stringify({ game_id: gameID, title: title, content: content}),
        headers: { 'Content-Type': 'application/json' }

    })

        .then(function (response) {
            console.log('phase 2')
            if (response) {
                // Close Form
                const form = document.getElementById('form')
                form.setAttribute('style', 'display: none;')
                // Delay refresh to make sure data is in db (does not happen instantly)
                setTimeout(() => {
                    location.reload()
                }, 500);

            } else {
            alert('Post not submitted')
        }
        })
})

button_CancelComment.addEventListener('click', function () {

    // Close Form
    const form = document.getElementById('form')
    form.setAttribute('style', 'display: none;')
})