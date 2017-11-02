window.sidebar = {
  init (posts, id) {
    document.querySelector('#sidebar').innerHTML = sidebarTemplate(posts)
    document.querySelector(`[href="#/posts/${id}"]`).classList.add('active')
  }
}
