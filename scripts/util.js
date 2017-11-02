function determinePost () {
  return window.location.hash.replace('#/posts/','')
}

function goToPost (post) {
  window.location.hash = `#/posts/${post.id}`
}


//this is keeping the structure of the urls