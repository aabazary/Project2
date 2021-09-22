const button_AddComment = document.getElementById('add-post')
const button_SubmitComment = document.getElementById('submit-button')
const button_CancelComment = document.getElementById('cancel-button')
const button_editComment = document.getElementById('cancel-button')
const button_deleteComment = document.getElementById('cancel-button')


button_AddComment.addEventListener('click', function () {
    // Open Form
    const form = document.getElementById('form')
    form.setAttribute('style', 'display: show;')

})

button_SubmitComment.addEventListener('click', function () {
    var pathStr = document.location.pathname.replace(/#/g, '')
    // Fix logic for postID if adding more than 9 posts
    var postID = parseInt(pathStr.charAt(pathStr.length-1))
    
    const comment = document.getElementById('about').value
    console.log('phase 1')
    console.log(comment)

    // Post Comment
    fetch('/comment', {
        method: "POST",
        body: JSON.stringify({body: comment, id: postID}),
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
            alert('Comment not submitted')
        }
        })
})

button_CancelComment.addEventListener('click', function () {

    // Close Form
    const form = document.getElementById('form')
    form.setAttribute('style', 'display: none;')
})
