const button_AddComment = document.getElementById('add-post')
const button_SubmitComment = document.getElementById('submit-button')
const button_CancelComment = document.getElementById('cancel-button')
const allImages_editComment = document.querySelectorAll('[data-edit]')
const allImages_deleteComment = document.querySelectorAll('[data-delete]')

// If someone clicks Add Comment Button, open the form module
button_AddComment.addEventListener('click', function () {
    // Open Form
    const form = document.getElementById('form')
    form.setAttribute('style', 'display: show;')

})


// If someone clicks submit button on the form module, post comment to database
button_SubmitComment.addEventListener('click', function () {
    var pathStr = document.location.pathname.replace(/#/g, '')
    // Fix logic for postID if adding more than 9 posts
    var postID = parseInt(pathStr.charAt(pathStr.length - 1))

    const comment = document.getElementById('about').value
    console.log('phase 1')
    console.log(comment)

    // Post Comment
    fetch('/api/comment', {
        method: "POST",
        body: JSON.stringify({ body: comment, id: postID }),
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

// If someone clicks cancel on the form modal, close form
button_CancelComment.addEventListener('click', function () {

    // Close Form
    const form = document.getElementById('form')
    form.setAttribute('style', 'display: none;')
})


// // EDIT COMMENT — for future development (:
// allImages_editComment.forEach(item => {
//     item.addEventListener('click', event => {
//         // Append 

//         // Open Edit Form modal
//         const form = document.getElementById('form-edit').
//         form.setAttribute('style', 'display: show;')
//     })
// })

// Delete Comment
allImages_deleteComment.forEach(item => {
    item.addEventListener('click', function (e) {

        fetch('/api/comment/delete', {
            method: "DELETE",
            body: JSON.stringify({ id: parseInt(this.getAttribute("data-id")) }),
            headers: { 'Content-Type': 'application/json' }

        })
        // Delay refresh to make sure data is in db (does not happen instantly)
        setTimeout(() => {
            location.reload()
        }, 500);
    })
})



