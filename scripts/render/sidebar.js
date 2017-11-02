function goHome (event) {
  event.preventDefault()

  const hash = event.target.getAttribute('href')
  window.location.hash = hash

  home.init()
}

function addLinkEventHandler (link) {
  link.addEventListener('click', goHome)
}

function initLinks () {
  const navLinks = Array.from(document.querySelectorAll('a.list-group-item'))
  navLinks.forEach(addLinkEventHandler)
}

window.sidebar = {
  init (posts, id) {
    document.querySelector('#sidebar').innerHTML = sidebarTemplate(posts)
    document.querySelector(`[href="#/posts/${id}"]`).classList.add('active')
    initLinks()
  }
}
