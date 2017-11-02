window.post = {
  init (post) {
    document.querySelector('#view').innerHTML = postTemplate(post)
  }
}
