function deletePostEventHandler (event) {
  event.preventDefault()

  const id = determinePost()
  Post.destroy(id).then(() => {
    window.location.hash = ''
    homeView.init()
  })
}

window.postView = {
  init (post) {
    document.querySelector('#view').innerHTML = postTemplate(post)
    document.querySelector('#delete-post').addEventListener('click', deletePostEventHandler)
  }
}
