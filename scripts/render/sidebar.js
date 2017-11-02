function goHome (event) {
  event.preventDefault()

  const hash = event.target.getAttribute('href')
  window.location.hash = hash

  homeView.init()
}

function addLinkEventHandler (link) {
  link.addEventListener('click', goHome)
}

function initLinks () {
    //makes an array from a node collection or whatever and repops list and add event handlers to all
  const navLinks = Array.from(document.querySelectorAll('a.list-group-item'))
  navLinks.forEach(addLinkEventHandler)
}


window.sidebarView = {
  init (posts, id) {
    document.querySelector('#sidebar').innerHTML = sidebarTemplate(posts)
    document.querySelector(`[href="#/posts/${id}"]`).classList.add('active')
      //initLinks is up. up there. 
    initLinks()
  }
}
