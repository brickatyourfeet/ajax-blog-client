window.postView = {
  init (post) {
    document.querySelector('#view').innerHTML = postTemplate(post)
  }
}
