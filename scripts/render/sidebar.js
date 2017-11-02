window.sidebar = {
  init (posts) {
    document.querySelector('#sidebar').innerHTML = sidebarTemplate(posts)
  }
}
