function determinePost () {
  return window.location.hash.replace('#/posts/','')
}

function goToPost (post) {
  window.location.hash = `#/posts/${post.id}`
}
